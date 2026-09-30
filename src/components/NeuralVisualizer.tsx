import React, { useState } from 'react';
import { Play, RotateCcw, Activity } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export const NeuralVisualizer: React.FC = () => {
  const [inputs, setInputs] = useState<number[]>([1, 0, 1]);
  const [learningRate, setLearningRate] = useState<number>(0.5);
  const [bias, setBias] = useState<number>(0.2);
  const [isPulsing, setIsPulsing] = useState<boolean>(false);

  // Compute activations for a 3-input -> 4-hidden -> 2-output network
  const weightsHidden = [
    [0.7 * learningRate, -0.4 * learningRate, 0.9 * learningRate],
    [-0.3 * learningRate, 0.8 * learningRate, 0.4 * learningRate],
    [0.5 * learningRate, 0.6 * learningRate, -0.2 * learningRate],
    [0.8 * learningRate, -0.5 * learningRate, 0.3 * learningRate]
  ];

  // Sigmoid activation function
  const sigmoid = (z: number) => 1 / (1 + Math.exp(-z));

  const hiddenActivations = weightsHidden.map((wRow) => {
    const sum = wRow.reduce((acc, w, idx) => acc + w * inputs[idx], 0) + bias;
    return sigmoid(sum);
  });

  const weightsOutput = [
    [0.8, -0.5, 0.9, 0.4],
    [-0.7, 0.6, -0.4, 0.8]
  ];

  const outputScores = weightsOutput.map((wRow) => {
    const sum = wRow.reduce((acc, w, idx) => acc + w * hiddenActivations[idx], 0);
    return sigmoid(sum);
  });

  // Softmax-like normalization for percentage view
  const sumOutputs = outputScores[0] + outputScores[1] || 1;
  const prob1 = Math.round((outputScores[0] / sumOutputs) * 100);
  const prob2 = 100 - prob1;

  const toggleInput = (idx: number) => {
    sound.playClick();
    const next = [...inputs];
    next[idx] = next[idx] === 1 ? 0 : 1;
    setInputs(next);
  };

  const triggerPulse = () => {
    sound.playSuccess();
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 900);
  };

  const resetNet = () => {
    sound.playClick();
    setInputs([1, 0, 1]);
    setLearningRate(0.5);
    setBias(0.2);
  };

  return (
    <div className="neural-visualizer-container">
      <div className="visualizer-header">
        <div className="viz-title-row">
          <Activity size={18} className="neon-cyan-text" />
          <h4 className="viz-title">Simulador en Vivo: Red Neuronal de Inferencia</h4>
        </div>
        <div className="viz-actions">
          <button className="viz-btn-pulse" onClick={triggerPulse}>
            <Play size={14} />
            <span>Propagar Señal</span>
          </button>
          <button className="viz-btn-reset" onClick={resetNet} title="Reiniciar">
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <p className="viz-instruction">
        Haz clic en las <strong>neuronas de entrada (X1, X2, X3)</strong> para alternar su estado binario y observa cómo se propagan los valores a través de las capas ocultas hasta predecir la salida.
      </p>

      {/* Network Canvas / SVG Graph */}
      <div className="neural-graph-stage">
        {/* Layer 1: Inputs */}
        <div className="layer-column">
          <div className="layer-tag">Entradas (X)</div>
          {inputs.map((val, idx) => (
            <button
              key={idx}
              className={`neuron-node input-node ${val === 1 ? 'active' : ''} ${isPulsing ? 'pulse-anim' : ''}`}
              onClick={() => toggleInput(idx)}
              title={`Clic para cambiar X${idx + 1}`}
            >
              <span className="node-label">X{idx + 1}</span>
              <span className="node-val">{val}</span>
            </button>
          ))}
        </div>

        {/* Dynamic connection lines */}
        <div className="connection-column">
          <svg className="neural-lines-svg" viewBox="0 0 100 180" preserveAspectRatio="none">
            {inputs.map((inVal, i) =>
              hiddenActivations.map((_, h) => {
                const y1 = 30 + i * 60;
                const y2 = 18 + h * 46;
                const active = inVal === 1;
                return (
                  <line
                    key={`${i}-${h}`}
                    x1="0"
                    y1={y1}
                    x2="100"
                    y2={y2}
                    className={`neural-path ${active ? 'path-active' : ''} ${isPulsing ? 'pulse-flow' : ''}`}
                  />
                );
              })
            )}
          </svg>
        </div>

        {/* Layer 2: Hidden */}
        <div className="layer-column">
          <div className="layer-tag">Capa Oculta (H)</div>
          {hiddenActivations.map((val, idx) => (
            <div
              key={idx}
              className={`neuron-node hidden-node ${isPulsing ? 'pulse-anim-delay' : ''}`}
              style={{
                borderColor: `rgba(157, 78, 221, ${0.4 + val * 0.6})`,
                boxShadow: `0 0 ${val * 16}px rgba(157, 78, 221, 0.45)`
              }}
            >
              <span className="node-label">H{idx + 1}</span>
              <span className="node-val">{(val).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Dynamic connection lines 2 */}
        <div className="connection-column">
          <svg className="neural-lines-svg" viewBox="0 0 100 180" preserveAspectRatio="none">
            {hiddenActivations.map((hVal, h) =>
              outputScores.map((_, o) => {
                const y1 = 18 + h * 46;
                const y2 = 45 + o * 90;
                return (
                  <line
                    key={`${h}-${o}`}
                    x1="0"
                    y1={y1}
                    x2="100"
                    y2={y2}
                    className={`neural-path ${hVal > 0.5 ? 'path-active' : ''} ${isPulsing ? 'pulse-flow' : ''}`}
                  />
                );
              })
            )}
          </svg>
        </div>

        {/* Layer 3: Outputs */}
        <div className="layer-column output-layer">
          <div className="layer-tag">Predicción (Y)</div>
          <div className={`neuron-node output-node ${prob1 >= prob2 ? 'dominant' : ''}`}>
            <span className="node-label">Clase A: Patrón IA</span>
            <div className="meter-bar-track">
              <div className="meter-fill" style={{ width: `${prob1}%`, background: '#00f0ff' }} />
            </div>
            <span className="prob-value">{prob1}%</span>
          </div>

          <div className={`neuron-node output-node ${prob2 > prob1 ? 'dominant' : ''}`}>
            <span className="node-label">Clase B: Ruido / Tradicional</span>
            <div className="meter-bar-track">
              <div className="meter-fill" style={{ width: `${prob2}%`, background: '#ec4899' }} />
            </div>
            <span className="prob-value">{prob2}%</span>
          </div>
        </div>
      </div>

      {/* Sliders for hyperparameters */}
      <div className="viz-sliders-row">
        <div className="slider-control">
          <div className="slider-label-row">
            <span>Tasa de Aprendizaje (LR)</span>
            <span className="slider-val">{learningRate.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.05"
            value={learningRate}
            onChange={(e) => setLearningRate(parseFloat(e.target.value))}
            className="neon-range-slider"
          />
        </div>

        <div className="slider-control">
          <div className="slider-label-row">
            <span>Sesgo Sináptico (Bias)</span>
            <span className="slider-val">{bias.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="-0.5"
            max="0.5"
            step="0.05"
            value={bias}
            onChange={(e) => setBias(parseFloat(e.target.value))}
            className="neon-range-slider"
          />
        </div>
      </div>
    </div>
  );
};
