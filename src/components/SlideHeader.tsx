import React from 'react';
import { Users, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { sound } from '../utils/soundEngine';

interface SlideHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  groupName?: string;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  isMuted,
  onToggleMute,
  isFullscreen,
  onToggleFullscreen,
  groupName = 'NOMBRE DEL GRUPO'
}) => {
  return (
    <header className="slide-header">
      {/* Left branding matching reference photo exactly */}
      <div className="header-left">
        <div className="group-badge">
          <div className="group-icon-minimal">
            <Users size={19} className="neon-group-icon" />
          </div>
          <span className="group-title-text">{groupName}</span>
          <div className="header-accent-divider" />
        </div>
      </div>

      {/* Right: PRESENTACIÓN DE EXPOSICIÓN + Glowing Dots */}
      <div className="header-right">
        <div className="presentation-tag">
          <span className="tag-label">PRESENTACIÓN DE EXPOSICIÓN</span>
          <div className="dots-indicator">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={`dot-pill ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  sound.playClick();
                  onSelectSlide(idx);
                }}
                title={`Diapositiva ${idx + 1}`}
                aria-label={`Diapositiva ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Minimalist utility buttons */}
        <div className="header-minimal-actions">
          <button
            className="mini-icon-btn"
            onClick={() => {
              sound.playClick();
              onToggleMute();
            }}
            title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <button
            className="mini-icon-btn"
            onClick={() => {
              sound.playClick();
              onToggleFullscreen();
            }}
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
};
