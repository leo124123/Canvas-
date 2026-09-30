import React, { useState, useEffect } from 'react';
import { 
  ScanFace, 
  ShieldCheck, 
  Bot, 
  Brain, 
  RotateCcw, 
  Sparkles, 
  Film, 
  Mail, 
  CreditCard, 
  Code2, 
  Image as ImageIcon, 
  Volume2, 
  Zap,
  Lock,
  Unlock
} from 'lucide-react';
import { sound } from '../utils/soundEngine';

interface AIExampleSimulatorProps {
  cardId: string;
}

export const AIExampleSimulator: React.FC<AIExampleSimulatorProps> = ({ cardId }) => {
  // Simulator 1: Face ID state
  const [faceScanProgress, setFaceScanProgress] = useState<number>(0);
  const [isFaceUnlocked, setIsFaceUnlocked] = useState<boolean>(false);
  const [scanStep, setScanStep] = useState<string>('Iniciando sensor biométrico TrueDepth...');

  // Simulator 2: Recs / Spam / Fraud tab
  const [recsMode, setRecsMode] = useState<'netflix' | 'spam' | 'fraud'>('netflix');

  // Simulator 3: GenAI mode & typewriter
  const [genAiMode, setGenAiMode] = useState<'text' | 'image' | 'audio'>('text');
  const [typewriterText, setTypewriterText] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Simulator 4: AGI Active Domain
  const [activeAgiTask, setActiveAgiTask] = useState<string>('multi');

  // -------------------------------------------------------------
  // SIMULATOR 1: FACE ID BIOMETRIC SCAN SEQUENCE
  // -------------------------------------------------------------
  const runFaceScan = () => {
    sound.playClick();
    setFaceScanProgress(0);
    setIsFaceUnlocked(false);
    setScanStep('Proyectando 30,000 puntos infrarrojos...');

    let progress = 0;
    const interval = setInterval(() => {
      progress += 12;
      setFaceScanProgress(Math.min(100, progress));

      if (progress === 36) {
        setScanStep('Analizando malla tridimensional y profundidad de ojos...');
      } else if (progress === 72) {
        setScanStep('Comparando con clave encriptada en Secure Enclave...');
      } else if (progress >= 100) {
        clearInterval(interval);
        setIsFaceUnlocked(true);
        setScanStep('¡Identidad Verificada • Coincidencia 99.8%! Dispositivo desbloqueado.');
        sound.playSuccess();
      }
    }, 180);
  };

  useEffect(() => {
    if (cardId === 'c-t4ej-1') {
      runFaceScan();
    }
  }, [cardId]);

  // -------------------------------------------------------------
  // SIMULATOR 3: CHATGPT STREAMING TYPEWRITER
  // -------------------------------------------------------------
  const fullAiResponse = `def clasificar_datos(muestra):
    # Modelo neuronal de inferencia rápida
    prediccion = modelo.inferir(muestra)
    return "Resultado verificado con éxito"

"La Inteligencia Artificial generativa crea contenido inédito en milisegundos a partir de patrones aprendidos."`;

  const runTypewriter = () => {
    sound.playClick();
    setTypewriterText('');
    setIsGenerating(true);
    let index = 0;

    const timer = setInterval(() => {
      if (index < fullAiResponse.length) {
        setTypewriterText(fullAiResponse.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsGenerating(false);
        sound.playSuccess();
      }
    }, 18);
  };

  useEffect(() => {
    if (cardId === 'c-t4ej-3') {
      runTypewriter();
    }
  }, [cardId]);

  // -------------------------------------------------------------
  // SIMULATOR 4: AGI MULTI-DOMAIN CYCLING
  // -------------------------------------------------------------
  const triggerAgiSync = (taskName: string) => {
    sound.playClick();
    setActiveAgiTask(taskName);
    sound.playSuccess();
  };

  // =============================================================
  // RENDER PER CARD
  // =============================================================

  // 1. RECONOCIMIENTO FACIAL (c-t4ej-1)
  if (cardId === 'c-t4ej-1') {
    return (
      <div className="sim-container sim-theme-cyan">
        <div className="sim-header-row">
          <div className="sim-title-group">
            <ScanFace size={18} className="sim-icon-glow" />
            <span className="sim-title">Simulador Biométrico FaceID en Tiempo Real</span>
          </div>
          <button className="sim-action-btn" onClick={runFaceScan}>
            <RotateCcw size={14} />
            <span>Repetir Escaneo</span>
          </button>
        </div>

        {/* Viewfinder frame emulating smartphone screen */}
        <div className="sim-face-viewfinder">
          <img 
            src="/assets/images/grid_card_facial.jpg" 
            alt="Malla facial" 
            className="sim-face-bg-img" 
          />
          <div className="sim-face-screen-tint" />

          {/* Dynamic sweeping laser scanner beam */}
          <div className={`sim-laser-sweep-beam ${isFaceUnlocked ? 'unlocked' : ''}`} />

          {/* Biometric reticle bounding box */}
          <div className={`sim-biometric-reticle ${isFaceUnlocked ? 'verified' : ''}`}>
            <span className="ret-c top-l" />
            <span className="ret-c top-r" />
            <span className="ret-c bot-l" />
            <span className="ret-c bot-r" />

            {/* Simulated 3D tracked landmark points */}
            <div className="landmark-point pt-forehead" />
            <div className="landmark-point pt-left-eye" />
            <div className="landmark-point pt-right-eye" />
            <div className="landmark-point pt-nose" />
            <div className="landmark-point pt-mouth-l" />
            <div className="landmark-point pt-mouth-r" />
            <div className="landmark-point pt-chin" />

            {/* Center crosshair */}
            <div className="ret-crosshair" />
          </div>

          {/* Top Smartphone Dynamic Island & Status */}
          <div className="sim-phone-island">
            {isFaceUnlocked ? (
              <Unlock size={14} className="unlock-icon" />
            ) : (
              <Lock size={14} className="lock-icon" />
            )}
            <span className="island-text">
              {isFaceUnlocked ? 'Face ID • Desbloqueado' : 'Escaneando Rostro...'}
            </span>
          </div>

          {/* Bottom Telemetry HUD */}
          <div className="sim-telemetry-hud">
            <div className="hud-metric">
              <span className="hud-label">Puntos 3D</span>
              <span className="hud-val">30,000 IR</span>
            </div>
            <div className="hud-metric">
              <span className="hud-label">Latencia</span>
              <span className="hud-val">12 ms</span>
            </div>
            <div className="hud-metric">
              <span className="hud-label">Coincidencia</span>
              <span className="hud-val text-cyan">{faceScanProgress > 80 ? '99.8%' : `${faceScanProgress}%`}</span>
            </div>
          </div>
        </div>

        {/* Live Status Message Card */}
        <div className={`sim-status-banner ${isFaceUnlocked ? 'status-success' : 'status-scanning'}`}>
          <div className="status-indicator-dot" />
          <p className="status-text-live">{scanStep}</p>
        </div>
      </div>
    );
  }

  // 2. RECOMENDACIONES, SPAM Y FRAUDES (c-t4ej-2)
  if (cardId === 'c-t4ej-2') {
    return (
      <div className="sim-container sim-theme-purple">
        <div className="sim-header-row">
          <div className="sim-title-group">
            <ShieldCheck size={18} className="sim-icon-glow" />
            <span className="sim-title">Simulador de Motores Especializados en Vivo</span>
          </div>
          {/* Sub-mode selector */}
          <div className="sim-subtabs">
            <button 
              className={`subtab-btn ${recsMode === 'netflix' ? 'active' : ''}`}
              onClick={() => { sound.playClick(); setRecsMode('netflix'); }}
            >
              <Film size={13} />
              <span>Netflix/YouTube</span>
            </button>
            <button 
              className={`subtab-btn ${recsMode === 'spam' ? 'active' : ''}`}
              onClick={() => { sound.playClick(); setRecsMode('spam'); }}
            >
              <Mail size={13} />
              <span>Anti-Spam</span>
            </button>
            <button 
              className={`subtab-btn ${recsMode === 'fraud' ? 'active' : ''}`}
              onClick={() => { sound.playClick(); setRecsMode('fraud'); }}
            >
              <CreditCard size={13} />
              <span>Fraude Bancario</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Netflix & YouTube Recommender */}
        {recsMode === 'netflix' && (
          <div className="sim-panel-content">
            <div className="sim-user-profile-strip">
              <div className="user-avatar-tag">Perfil: Estudiante de Sistemas</div>
              <div className="user-pref-tag">Historial: Ciencia Ficción, Cyberpunk, Inteligencia Artificial</div>
            </div>

            <div className="sim-recs-grid">
              <div className="rec-sim-card">
                <div className="rec-match-badge">99% Match</div>
                <div className="rec-info">
                  <span className="rec-title">Matrix Resurrections</span>
                  <span className="rec-reason">Por afinidad con "IA & Redes"</span>
                </div>
              </div>
              <div className="rec-sim-card">
                <div className="rec-match-badge">97% Match</div>
                <div className="rec-info">
                  <span className="rec-title">Interstellar</span>
                  <span className="rec-reason">Filtrado colaborativo de usuarios afines</span>
                </div>
              </div>
              <div className="rec-sim-card">
                <div className="rec-match-badge">95% Match</div>
                <div className="rec-info">
                  <span className="rec-title">Blade Runner 2049</span>
                  <span className="rec-reason">Patrones visuales y género Sci-Fi</span>
                </div>
              </div>
            </div>

            <p className="sim-explanation-note">
              💡 <strong>¿Cómo funciona?:</strong> Analiza tu historial de reproducción y encuentra correlaciones estadísticas con millones de otros usuarios para recomendar contenidos afines en tiempo real.
            </p>
          </div>
        )}

        {/* Mode 2: Anti-Spam Filter */}
        {recsMode === 'spam' && (
          <div className="sim-panel-content">
            <div className="sim-emails-feed">
              <div className="sim-email-row spam">
                <div className="email-status-pill blocked">SPAM DETECTADO</div>
                <div className="email-info">
                  <span className="email-subject">¡URGENTE! Has ganado $50,000 en sorteo anónimo</span>
                  <span className="email-reason">Bloqueado por: Palabras fraudulentas, remitente no verificado</span>
                </div>
              </div>
              <div className="sim-email-row clean">
                <div className="email-status-pill verified">CORREO SEGURO</div>
                <div className="email-info">
                  <span className="email-subject">Entrega de Proyecto: Fundamentos de Cómputo (UNIBE)</span>
                  <span className="email-reason">Aprobado: Firma institucional válida y texto legítimo</span>
                </div>
              </div>
              <div className="sim-email-row spam">
                <div className="email-status-pill blocked">PHISHING BLOQUEADO</div>
                <div className="email-info">
                  <span className="email-subject">Actualiza tus credenciales bancarias de inmediato</span>
                  <span className="email-reason">Bloqueado por: Enlace falso detectado por modelo heurístico</span>
                </div>
              </div>
            </div>

            <p className="sim-explanation-note">
              🛡️ <strong>¿Cómo funciona?:</strong> Clasifica miles de correos por segundo usando Procesamiento de Lenguaje Natural (NLP) para separar correo legítimo del correo no deseado.
            </p>
          </div>
        )}

        {/* Mode 3: Fraud Detection */}
        {recsMode === 'fraud' && (
          <div className="sim-panel-content">
            <div className="sim-transactions-feed">
              <div className="sim-tx-card safe">
                <div className="tx-header">
                  <span className="tx-amount">$15.50 USD</span>
                  <span className="tx-badge ok">AUTORIZADA</span>
                </div>
                <span className="tx-desc">Cafetería universitaria • Comportamiento habitual del cliente</span>
              </div>

              <div className="sim-tx-card alert">
                <div className="tx-header">
                  <span className="tx-amount">$4,850.00 USD</span>
                  <span className="tx-badge danger">TRANSACCIÓN BLOQUEADA</span>
                </div>
                <span className="tx-desc">Retiro en cajero de país no habitual (Singapur) a las 3:15 AM • <strong>Anomalía detectada en 8ms</strong></span>
              </div>
            </div>

            <p className="sim-explanation-note">
              ⚡ <strong>¿Cómo funciona?:</strong> Modela tu patrón de gastos habitual (lugares, horarios, montos) y frena transacciones anómalas antes de que se complete el cobro.
            </p>
          </div>
        )}
      </div>
    );
  }

  // 3. CHATGPT & GENERATIVA (c-t4ej-3)
  if (cardId === 'c-t4ej-3') {
    return (
      <div className="sim-container sim-theme-cyan">
        <div className="sim-header-row">
          <div className="sim-title-group">
            <Bot size={18} className="sim-icon-glow" />
            <span className="sim-title">Consola de Inferencia Generativa en Vivo</span>
          </div>
          <div className="sim-subtabs">
            <button 
              className={`subtab-btn ${genAiMode === 'text' ? 'active' : ''}`}
              onClick={() => { sound.playClick(); setGenAiMode('text'); }}
            >
              <Code2 size={13} />
              <span>Texto & Código</span>
            </button>
            <button 
              className={`subtab-btn ${genAiMode === 'image' ? 'active' : ''}`}
              onClick={() => { sound.playClick(); setGenAiMode('image'); }}
            >
              <ImageIcon size={13} />
              <span>Imagen por Prompt</span>
            </button>
            <button 
              className={`subtab-btn ${genAiMode === 'audio' ? 'active' : ''}`}
              onClick={() => { sound.playClick(); setGenAiMode('audio'); }}
            >
              <Volume2 size={13} />
              <span>Audio Sintético</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Code & Text Stream */}
        {genAiMode === 'text' && (
          <div className="sim-panel-content">
            <div className="sim-prompt-box">
              <span className="prompt-label">Prompt de usuario:</span>
              <span className="prompt-text">"Escribe una función de inferencia en Python y una frase sobre el futuro"</span>
            </div>

            <div className="sim-terminal-screen">
              <div className="terminal-header">
                <span className="t-dot red" />
                <span className="t-dot yellow" />
                <span className="t-dot green" />
                <span className="terminal-title">ChatGPT Inférence Engine • gpt-4o stream</span>
              </div>
              <pre className="terminal-body">
                <code>{typewriterText}</code>
                <span className="typing-cursor">▌</span>
              </pre>
            </div>

            <div className="sim-footer-controls">
              <button className="sim-action-btn" onClick={runTypewriter} disabled={isGenerating}>
                <Sparkles size={14} />
                <span>{isGenerating ? 'Generando respuesta...' : 'Regenerar Respuesta'}</span>
              </button>
              <span className="stream-speed-label">Velocidad: ~110 tokens/segundo</span>
            </div>
          </div>
        )}

        {/* Mode 2: Image Generation */}
        {genAiMode === 'image' && (
          <div className="sim-panel-content">
            <div className="sim-prompt-box">
              <span className="prompt-label">Prompt de Imagen:</span>
              <span className="prompt-text">"Estudio cibernético de IA con pantallas interactivas, render 8K fotorrealista"</span>
            </div>

            <div className="sim-diffusion-canvas-wrap">
              <img 
                src="/assets/images/grid_card_genai.jpg" 
                alt="Arte generado" 
                className="sim-diffusion-img" 
              />
              <div className="sim-diffusion-overlay">
                <div className="diffusion-scan-bar" />
                <span className="diffusion-tag">Denoising Difusión: 100% Completado</span>
              </div>
            </div>

            <p className="sim-explanation-note">
              🎨 <strong>Modelos de Difusión:</strong> Comienzan con ruido gaussiano puro y van eliminando el ruido paso a paso hasta formar una imagen inédita basada en la descripción.
            </p>
          </div>
        )}

        {/* Mode 3: Audio Generation */}
        {genAiMode === 'audio' && (
          <div className="sim-panel-content">
            <div className="sim-prompt-box">
              <span className="prompt-label">Prompt de Audio:</span>
              <span className="prompt-text">"Voz humana sintética explicando conceptos de computación con tono profesional"</span>
            </div>

            <div className="sim-audio-spectrum-box">
              <div className="audio-bars-wrapper">
                <span className="audio-bar b1" />
                <span className="audio-bar b2" />
                <span className="audio-bar b3" />
                <span className="audio-bar b4" />
                <span className="audio-bar b5" />
                <span className="audio-bar b6" />
                <span className="audio-bar b7" />
                <span className="audio-bar b8" />
                <span className="audio-bar b9" />
                <span className="audio-bar b10" />
              </div>
              <span className="audio-status-label">🔊 Síntesis de voz neuronal activa (44.1 kHz, 24-bit)</span>
            </div>

            <p className="sim-explanation-note">
              🎙️ <strong>Audio Generativo:</strong> Sintetiza fonemas y modulación emocional creando discursos y música que nunca antes fueron grabados por una persona real.
            </p>
          </div>
        )}
      </div>
    );
  }

  // 4. AGI MULTIDISCIPLINARIA (c-t4ej-4)
  return (
    <div className="sim-container sim-theme-magenta">
      <div className="sim-header-row">
        <div className="sim-title-group">
          <Brain size={18} className="sim-icon-glow" />
          <span className="sim-title">Simulador de Núcleo Cognitivo AGI Multidisciplinario</span>
        </div>
        <button 
          className="sim-action-btn"
          onClick={() => triggerAgiSync('multi')}
        >
          <Zap size={14} />
          <span>Sincronizar Todos los Dominios</span>
        </button>
      </div>

      <div className="sim-agi-matrix-stage">
        {/* Central AGI Core */}
        <div className={`agi-central-core ${activeAgiTask === 'multi' ? 'pulsing-all' : ''}`}>
          <div className="core-inner-nucleus">
            <Brain size={32} className="nucleus-brain-icon" />
            <span className="nucleus-label">NÚCLEO AGI</span>
          </div>
          <div className="core-synapse-ring" />
          <div className="core-synapse-ring ring-outer" />
        </div>

        {/* 4 Connected Specialized Cognitive Nodes */}
        <div className="agi-nodes-orbit">
          <button 
            className={`agi-orbit-node node-math ${activeAgiTask === 'math' || activeAgiTask === 'multi' ? 'active' : ''}`}
            onClick={() => triggerAgiSync('math')}
          >
            <span className="node-icon">📐</span>
            <span className="node-name">Matemáticas</span>
            <span className="node-status">Cálculo & Optimización</span>
          </button>

          <button 
            className={`agi-orbit-node node-lang ${activeAgiTask === 'lang' || activeAgiTask === 'multi' ? 'active' : ''}`}
            onClick={() => triggerAgiSync('lang')}
          >
            <span className="node-icon">🌐</span>
            <span className="node-name">Idiomas</span>
            <span className="node-status">Lingüística Universal</span>
          </button>

          <button 
            className={`agi-orbit-node node-code ${activeAgiTask === 'code' || activeAgiTask === 'multi' ? 'active' : ''}`}
            onClick={() => triggerAgiSync('code')}
          >
            <span className="node-icon">💻</span>
            <span className="node-name">Programación</span>
            <span className="node-status">Arquitectura de Software</span>
          </button>

          <button 
            className={`agi-orbit-node node-logic ${activeAgiTask === 'logic' || activeAgiTask === 'multi' ? 'active' : ''}`}
            onClick={() => triggerAgiSync('logic')}
          >
            <span className="node-icon">🧩</span>
            <span className="node-name">Sentido Común</span>
            <span className="node-status">Razonamiento Adaptable</span>
          </button>
        </div>
      </div>

      <div className="sim-status-banner status-success">
        <Sparkles size={16} className="accent-sparkle" />
        <p className="status-text-live">
          {activeAgiTask === 'multi'
            ? '⚡ Interconexión Total: La AGI transfiere conocimientos entre matemáticas, lenguaje y código simultáneamente como un ser humano polivalente.'
            : `Dominio activo enfocado: ${activeAgiTask.toUpperCase()} integrado con el núcleo sintético.`}
        </p>
      </div>
    </div>
  );
};
