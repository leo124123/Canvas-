import React, { useRef } from 'react';
import type { SlideCardItem } from '../types/presentation';
import { IconHelper } from './IconHelper';
import { sound } from '../utils/soundEngine';

interface SlideCard3DProps {
  card: SlideCardItem;
  index: number;
  onClick: (card: SlideCardItem) => void;
}

export const SlideCard3D: React.FC<SlideCard3DProps> = ({ card, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  const badgeTheme = card.badgeColor || (index === 0 ? 'blue' : index === 1 ? 'purple' : index === 2 ? 'cyan' : 'magenta');

  return (
    <div
      ref={cardRef}
      className={`slide-card-3d card-anim-item badge-theme-${badgeTheme} ${card.imageUrl ? 'card-has-image' : ''}`}
      data-index={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sound.playHover()}
      onClick={() => {
        sound.playClick();
        onClick(card);
      }}
      role="button"
      tabIndex={0}
      title="Clic para explorar detalles a fondo"
    >
      {/* 3D Glass Badge on the left matching reference photo exactly */}
      <div className={`card-badge-3d badge-glow-${badgeTheme}`}>
        <div className="badge-inner-bevel">
          <IconHelper name={card.iconName} size={26} className="card-badge-icon" />
        </div>
      </div>

      {/* Card Text Content */}
      <div className="card-info-content">
        <div className="card-heading-row">
          <span className="card-num">{card.number}.</span>
          <h4 className="card-title-text">{card.title}</h4>
        </div>
        <p className="card-summary-text">{card.summary}</p>
      </div>

      {/* 3D Real Photographic Example Thumbnail */}
      {card.imageUrl && (
        <div className={`card-image-preview-3d preview-glow-${badgeTheme}`}>
          <img src={card.imageUrl} alt={card.title} className="card-preview-thumb-img" />
          {card.imageTag && <span className="card-preview-chip">{card.imageTag}</span>}
          <div className="card-preview-border-glow" />
        </div>
      )}

      {/* 3D Rim and Neon Under-Glow */}
      <div className={`card-neon-glow glow-${badgeTheme}`} />
    </div>
  );
};
