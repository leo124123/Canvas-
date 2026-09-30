import React, { useRef, useEffect } from 'react';
import { animate, stagger } from 'animejs';
import type { SlideData, SlideCardItem } from '../types/presentation';
import { IconHelper } from './IconHelper';
import { sound } from '../utils/soundEngine';

interface AIExamplesGridViewProps {
  slide: SlideData;
  onCardClick: (card: SlideCardItem) => void;
}

export const AIExamplesGridView: React.FC<AIExamplesGridViewProps> = ({
  slide,
  onCardClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // 3D Cinematic Entrance Animation
  useEffect(() => {
    // 1. Stage container entrance with depth warp
    if (containerRef.current) {
      animate(containerRef.current, {
        opacity: [0, 1],
        scale: [0.93, 1],
        duration: 750,
        ease: 'outCubic'
      });
    }

    // 2. Header reveal
    if (headerRef.current) {
      const badge = headerRef.current.querySelector('.member-presenter-badge');
      const title = headerRef.current.querySelector('.examples-title-centered');
      const bar = headerRef.current.querySelector('.title-neon-bar');
      const desc = headerRef.current.querySelector('.examples-subhead-lead');

      if (badge) {
        animate(badge, {
          opacity: [0, 1],
          translateY: [-22, 0],
          duration: 600,
          delay: 60,
          ease: 'outBack'
        });
      }

      if (title) {
        animate(title, {
          opacity: [0, 1],
          translateY: [35, 0],
          rotateX: [-22, 0],
          duration: 750,
          delay: 110,
          ease: 'outBack'
        });
      }

      if (bar) {
        animate(bar, {
          scaleX: [0, 1],
          opacity: [0, 1],
          duration: 600,
          delay: 220,
          ease: 'outCubic'
        });
      }

      if (desc) {
        animate(desc, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 650,
          delay: 260,
          ease: 'outQuad'
        });
      }
    }

    // 3. Staggered 3D entrance for the 4 action showcase cards
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.example-action-card');
      if (cards.length > 0) {
        animate(cards, {
          opacity: [0, 1],
          translateY: [60, 0],
          translateZ: [100, 0],
          scale: [0.88, 1],
          rotateX: [12, 0],
          delay: stagger(110, { start: 240 }),
          duration: 850,
          ease: 'outBack'
        });
      }
    }
  }, [slide.id]);

  // Parallax tilt on mouse move for the entire stage
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xOffset = (clientX / innerWidth - 0.5) * 10;
    const yOffset = (clientY / innerHeight - 0.5) * -10;
    containerRef.current.style.setProperty('--stage-rx', `${yOffset}deg`);
    containerRef.current.style.setProperty('--stage-ry', `${xOffset}deg`);
  };

  const handleStageMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--stage-rx', '0deg');
    containerRef.current.style.setProperty('--stage-ry', '0deg');
  };

  // Card individual 3D tilt
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(16px)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={containerRef}
      className="slide-content-stage ai-examples-grid-stage"
      onMouseMove={handleStageMouseMove}
      onMouseLeave={handleStageMouseLeave}
    >
      {/* Centered Top Header matching user mockup */}
      <div ref={headerRef} className="examples-top-header">
        <div className="member-presenter-badge">
          <span className="presenter-text">{slide.member}</span>
        </div>

        <h1 className="title-3d-extruded examples-title-centered">
          <span className="title-line-base">{slide.title} </span>
          <span className="title-line-highlight neon-text-3d">{slide.titleHighlight}</span>
        </h1>

        <div className="title-neon-bar center-bar" />
        <p className="examples-subhead-lead">{slide.description}</p>
      </div>

      {/* 2x2 Grid of 4 Interactive 3D Showcase Action Cards */}
      <div ref={gridRef} className="examples-2x2-grid">
        {slide.cards.map((card, idx) => {
          const badgeTheme = card.badgeColor || (idx % 2 === 0 ? 'cyan' : 'purple');

          return (
            <div
              key={card.id}
              className={`example-action-card theme-${badgeTheme}`}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onMouseEnter={() => sound.playHover()}
              onClick={() => {
                sound.playClick();
                onCardClick(card);
              }}
              role="button"
              tabIndex={0}
              title="Haz clic para ver caso de estudio completo"
            >
              {/* Background Image Container with dynamic scale */}
              <div className="card-bg-visual-wrapper">
                <img
                  src={card.imageUrl || `/assets/images/grid_card_${idx === 0 ? 'facial' : idx === 1 ? 'recs' : idx === 2 ? 'genai' : 'agi'}.jpg`}
                  alt={card.title}
                  className="card-bg-visual-img"
                />
                <div className="card-bg-vignette" />
              </div>

              {/* ACTION MOVEMENTS: Dynamic Live Action Layers */}
              {idx === 0 && (
                /* Card 1: Reconocimiento Facial - Sweeping Laser Scanner & Biometric Reticle */
                <div className="action-layer action-vision">
                  <div className="scanner-laser-beam" />
                  <div className="biometric-reticle-box">
                    <span className="reticle-corner top-left" />
                    <span className="reticle-corner top-right" />
                    <span className="reticle-corner bottom-left" />
                    <span className="reticle-corner bottom-right" />
                    <div className="reticle-crosshair" />
                  </div>
                </div>
              )}

              {idx === 1 && (
                /* Card 2: Recomendaciones, Spam y Fraudes - Security Radar Pulse & Data Stream Nodes */
                <div className="action-layer action-recs-shield">
                  <div className="security-radar-sweep" />
                  <div className="data-stream-nodes">
                    <span className="data-node n1" />
                    <span className="data-node n2" />
                    <span className="data-node n3" />
                  </div>
                </div>
              )}

              {idx === 2 && (
                /* Card 3: ChatGPT y Creación Multimedia - Generative Shimmer & Particle Floating Glow */
                <div className="action-layer action-generative">
                  <div className="generative-shimmer-wave" />
                  <div className="generative-particles-field">
                    <span className="gen-sparkle s1" />
                    <span className="gen-sparkle s2" />
                    <span className="gen-sparkle s3" />
                  </div>
                </div>
              )}

              {idx === 3 && (
                /* Card 4: Aprendizaje AGI - Synaptic Neural Waves & Multidomain Cognitive Pulses */
                <div className="action-layer action-cognition">
                  <div className="synapse-neural-burst" />
                  <div className="cortex-activity-ring" />
                </div>
              )}

              {/* Card Top Row: Clean 3D Badge on Left and Image Tag Chip on Right */}
              <div className="card-top-action-bar">
                <div className={`card-badge-3d badge-glow-${badgeTheme}`}>
                  <div className="badge-inner-bevel">
                    <IconHelper name={card.iconName} size={24} className="card-badge-icon" />
                  </div>
                </div>
                {card.imageTag && (
                  <span className="card-top-tag-chip">{card.imageTag}</span>
                )}
              </div>

              {/* Card Bottom Area: Bold 3D Extruded Title */}
              <div className="card-bottom-info-wrap">
                <h3 className="card-bold-uppercase-title">{card.title}</h3>
              </div>

              {/* 3D Border Glow & Physical Edge Reflection */}
              <div className={`card-bevel-edge-glow glow-${badgeTheme}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
