import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GAME_QUESTIONS } from '../data/slidesData';
import { sound } from '../utils/soundEngine';
import { Trophy, Flame, RotateCcw, CheckCircle, XCircle, ArrowRight, Brain, Award } from 'lucide-react';

interface MiniGameProps {
  onBackToPresentation: () => void;
}

export const MiniGame: React.FC<MiniGameProps> = ({ onBackToPresentation }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  const question = GAME_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === question.correctIndex;

    if (isCorrect) {
      sound.playSuccess();
      const streakBonus = streak * 50;
      const roundScore = 100 + streakBonus;
      setScore((prev) => prev + roundScore);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Light confetti on streak >= 3
      if (newStreak >= 3) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    } else {
      sound.playError();
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIdx < GAME_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Game finished!
      setGameFinished(true);
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    sound.playClick();
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setGameFinished(false);
  };

  return (
    <div className="minigame-container">
      {/* Game HUD Bar */}
      <div className="game-hud">
        <div className="hud-badge score-hud">
          <Trophy size={18} className="neon-gold-icon" />
          <span className="hud-label">Puntaje:</span>
          <span className="hud-value neon-glow-text">{score}</span>
        </div>

        <div className="hud-badge streak-hud">
          <Flame size={18} className={`streak-flame ${streak > 0 ? 'flame-active' : ''}`} />
          <span className="hud-label">Racha:</span>
          <span className="hud-value">{streak}x</span>
          {streak >= 3 && <span className="cyber-combo-pill">¡CYBER COMBO!</span>}
        </div>

        <div className="hud-badge round-hud">
          <span className="hud-label">Progreso:</span>
          <span className="hud-value">
            {currentIdx + 1} / {GAME_QUESTIONS.length}
          </span>
        </div>
      </div>

      {!gameFinished ? (
        <div className="game-arena-card">
          <div className="game-card-category-row">
            <span className="game-category-chip">{question.category}</span>
            <span className="game-difficulty-chip">Desafío Clasificador</span>
          </div>

          <h3 className="game-question-prompt">{question.prompt}</h3>

          {/* Options Grid */}
          <div className="game-options-grid">
            {question.options.map((opt, idx) => {
              let btnClass = 'game-option-btn';
              if (isAnswered) {
                if (idx === question.correctIndex) {
                  btnClass += ' option-correct';
                } else if (idx === selectedOption) {
                  btnClass += ' option-wrong';
                } else {
                  btnClass += ' option-dimmed';
                }
              }

              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                >
                  <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="opt-text">{opt}</span>
                  {isAnswered && idx === question.correctIndex && (
                    <CheckCircle size={18} className="opt-status-icon correct" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== question.correctIndex && (
                    <XCircle size={18} className="opt-status-icon wrong" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Next Button */}
          {isAnswered && (
            <div className="game-feedback-drawer">
              <div className="feedback-content">
                <span className="feedback-tag">
                  {selectedOption === question.correctIndex ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta'}
                </span>
                <p className="feedback-explanation">{question.explanation}</p>
              </div>
              <button className="game-btn-next" onClick={handleNextQuestion}>
                <span>{currentIdx < GAME_QUESTIONS.length - 1 ? 'Siguiente Desafío' : 'Ver Resultados'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results View */
        <div className="game-results-card">
          <div className="results-trophy-ring">
            <Award size={64} className="trophy-huge" />
          </div>
          <h2 className="results-title">¡Misión de la Cyber Matrix Completada!</h2>
          <p className="results-subtitle">
            Has demostrado tu dominio sobre Inteligencia Artificial y las Áreas del Saber computacional.
          </p>

          <div className="results-metrics-grid">
            <div className="metric-box">
              <span className="metric-num neon-glow-text">{score}</span>
              <span className="metric-name">Puntos Totales</span>
            </div>
            <div className="metric-box">
              <span className="metric-num">{maxStreak}x</span>
              <span className="metric-name">Racha Máxima</span>
            </div>
            <div className="metric-box">
              <span className="metric-num">100%</span>
              <span className="metric-name">Dominio de Temas</span>
            </div>
          </div>

          <div className="results-actions">
            <button className="btn-replay" onClick={handleRestart}>
              <RotateCcw size={18} />
              <span>Jugar de Nuevo</span>
            </button>
            <button className="btn-return-slides" onClick={onBackToPresentation}>
              <Brain size={18} />
              <span>Volver a la Exposición</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
