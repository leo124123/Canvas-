import React, { useEffect } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { X, Check } from 'lucide-react';
import { sound } from '../utils/soundEngine';

interface SlideDrawerProps {
  isOpen: boolean;
  currentSlide: number;
  onSelectSlide: (idx: number) => void;
  onClose: () => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  currentSlide,
  onSelectSlide,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="slide-drawer-backdrop" onClick={onClose}>
      <div className="slide-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <h3 className="drawer-title">Índice General de Diapositivas</h3>
            <p className="drawer-subtitle">Acceso directo a los temas de los 7 integrantes y mini-juego</p>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-grid">
          {SLIDES_DATA.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`drawer-card-item ${isActive ? 'active-slide' : ''}`}
                onClick={() => {
                  sound.playClick();
                  onSelectSlide(idx);
                  onClose();
                }}
              >
                <div className="drawer-card-preview">
                  <img src={slide.bgImage} alt={slide.title} className="drawer-thumb-img" />
                  <span className="drawer-index-badge">{String(idx + 1).padStart(2, '0')}</span>
                  {isActive && (
                    <span className="drawer-current-badge">
                      <Check size={12} />
                      <span>Actual</span>
                    </span>
                  )}
                </div>
                <div className="drawer-card-details">
                  <span className="drawer-member-tag">{slide.member}</span>
                  <h4 className="drawer-slide-name">
                    {slide.title} {slide.titleHighlight}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
