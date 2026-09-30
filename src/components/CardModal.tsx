import React, { useEffect, useState } from 'react';
import type { SlideCardItem } from '../types/presentation';
import { IconHelper } from './IconHelper';
import { X, CheckCircle, ArrowRight, Sparkles, Play, Image as ImageIcon } from 'lucide-react';
import { sound } from '../utils/soundEngine';
import { AIExampleSimulator } from './AIExampleSimulator';

interface CardModalProps {
  card: SlideCardItem | null;
  onClose: () => void;
}

export const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  const [mediaTab, setMediaTab] = useState<'sim' | 'photo'>('sim');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset tab to simulation on card change
  useEffect(() => {
    if (card?.id.startsWith('c-t4ej-')) {
      setMediaTab('sim');
    } else {
      setMediaTab('photo');
    }
  }, [card?.id]);

  if (!card) return null;

  const isExampleCard = card.id.startsWith('c-t4ej-');

  return (
    <div className="card-modal-backdrop" onClick={onClose}>
      <div
        className="card-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-wrapper">
            <div className="badge-inner-bevel">
              <IconHelper name={card.iconName} size={28} className="card-badge-icon" />
            </div>
            <div>
              <span className="modal-number-chip">Subtema {card.number}</span>
              <h3 className="modal-title">{card.title}</h3>
            </div>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Cerrar ventana"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Media Mode Tabs Bar for Examples Slide */}
          {isExampleCard && (
            <div className="modal-media-tabs-bar">
              <button 
                className={`media-tab-btn ${mediaTab === 'sim' ? 'active' : ''}`}
                onClick={() => { sound.playClick(); setMediaTab('sim'); }}
              >
                <Play size={13} className="tab-icon" />
                <span>Simulador Animado en Vivo</span>
                <span className="live-pulse-badge">LIVE DEMO</span>
              </button>
              <button 
                className={`media-tab-btn ${mediaTab === 'photo' ? 'active' : ''}`}
                onClick={() => { sound.playClick(); setMediaTab('photo'); }}
              >
                <ImageIcon size={13} className="tab-icon" />
                <span>Imagen del Caso Real</span>
              </button>
            </div>
          )}

          {/* Dynamic Interactive Simulator or Real Image Showcase */}
          {isExampleCard && mediaTab === 'sim' ? (
            <AIExampleSimulator cardId={card.id} />
          ) : (
            card.imageUrl && (
              <div className="modal-featured-image-box">
                <div className="modal-featured-image-wrap">
                  <img src={card.imageUrl} alt={card.title} className="modal-featured-img" />
                  {card.imageTag && <span className="modal-image-tag-badge">{card.imageTag}</span>}
                </div>
                {card.imageCaption && (
                  <div className="modal-image-caption-row">
                    <span className="caption-dot" />
                    <span className="modal-image-caption-text">{card.imageCaption}</span>
                  </div>
                )}
              </div>
            )
          )}

          <div className="modal-subtitle-row">
            <Sparkles size={16} className="accent-sparkle" />
            <h4 className="modal-subtitle">{card.details.subtitle}</h4>
          </div>

          <p className="modal-summary-lead">{card.summary}</p>

          {/* Key Bullet Points */}
          <div className="modal-points-list">
            {card.details.points.map((pt, idx) => (
              <div key={idx} className="modal-point-item">
                <CheckCircle size={17} className="check-icon" />
                <span className="point-text">{pt}</span>
              </div>
            ))}
          </div>

          {/* Interactive Comparison Widget if available */}
          {card.details.comparison && (
            <div className="modal-comparison-box">
              <h5 className="box-title">Comparativa Paradigmática</h5>
              <div className="comparison-grid">
                <div className="comparison-card traditional">
                  <div className="card-tag">Computación Tradicional</div>
                  <p>{card.details.comparison.traditional}</p>
                </div>
                <div className="comparison-divider">
                  <ArrowRight size={20} />
                </div>
                <div className="comparison-card ai">
                  <div className="card-tag">Inteligencia Artificial</div>
                  <p>{card.details.comparison.ai}</p>
                </div>
              </div>
            </div>
          )}

          {/* Example / Case study box if available */}
          {card.details.exampleTitle && (
            <div className="modal-example-box">
              <span className="example-badge">{card.details.exampleTitle}</span>
              <p className="example-quote">{card.details.exampleText}</p>
            </div>
          )}

          {/* Stat Badge */}
          {card.details.statBadge && (
            <div className="modal-stat-footer">
              <span className="stat-pill">{card.details.statBadge}</span>
              <span className="stat-note">Concepto verificado de exposición académica</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            className="modal-action-close"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
