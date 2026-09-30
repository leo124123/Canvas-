import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import type { SlideData, SlideCardItem } from '../types/presentation';
import { SlideCard3D } from './SlideCard3D';
import { NeuralVisualizer } from './NeuralVisualizer';
import { MiniGame } from './MiniGame';
import { TeamRosterView } from './TeamRosterView';
import { AIExamplesGridView } from './AIExamplesGridView';
import { Cpu } from 'lucide-react';
import { sound } from '../utils/soundEngine';

interface SlideViewProps {
  slide: SlideData;
  slideIndex: number;
  onCardClick: (card: SlideCardItem) => void;
  onRestartPresentation: () => void;
}

export const SlideView: React.FC<SlideViewProps> = ({
  slide,
  slideIndex,
  onCardClick,
  onRestartPresentation
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [showLiveVisualizer, setShowLiveVisualizer] = useState<boolean>(false);

  // 3D Immersive Page Transition with Anime.js
  useEffect(() => {
    setShowLiveVisualizer(false);

    // 1. Animate entire 3D container with perspective warp & depth zoom
    if (containerRef.current) {
      animate(containerRef.current, {
        opacity: [0, 1],
        scale: [0.93, 1],
        translateZ: [160, 0],
        rotateY: [-6, 0],
        rotateX: [4, 0],
        duration: 750,
        ease: 'outCubic'
      });
    }

    // 2. Animate 3D title reveal
    if (titleRef.current) {
      animate(titleRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        rotateX: [-20, 0],
        duration: 700,
        delay: 80,
        ease: 'outBack'
      });
    }

    // 3. Animate description text
    if (descRef.current) {
      animate(descRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 180,
        ease: 'outQuad'
      });
    }

    // 4. Animate the 4 3D cards with staggered spring entrance
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll('.card-anim-item');
      if (cards.length > 0) {
        animate(cards, {
          opacity: [0, 1],
          translateX: [60, 0],
          translateZ: [100, 0],
          scale: [0.9, 1],
          delay: stagger(90, { start: 150 }),
          duration: 750,
          ease: 'outBack'
        });
      }
    }
  }, [slideIndex]);

  // Constant 3D mouse parallax interaction
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xOffset = (clientX / innerWidth - 0.5) * 14;
    const yOffset = (clientY / innerHeight - 0.5) * -14;

    containerRef.current.style.setProperty('--stage-rx', `${yOffset}deg`);
    containerRef.current.style.setProperty('--stage-ry', `${xOffset}deg`);
  };

  const handleStageMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--stage-rx', `0deg`);
    containerRef.current.style.setProperty('--stage-ry', `0deg`);
  };

  // If this is the 2x2 Grid Examples slide
  if (slide.interactiveType === 'grid-examples') {
    return (
      <AIExamplesGridView
        slide={slide}
        onCardClick={onCardClick}
      />
    );
  }

  // If this is the Team Roster introductory slide
  if (slide.interactiveType === 'equipo') {
    return (
      <div
        ref={containerRef}
        className="slide-content-stage team-roster-stage"
        onMouseMove={handleStageMouseMove}
        onMouseLeave={handleStageMouseLeave}
      >
        <TeamRosterView 
          initialMembers={slide.teamMembers}
          title={slide.title}
          titleHighlight={slide.titleHighlight}
          description={slide.description}
        />
      </div>
    );
  }

  // If this is the Mini-Game slide
  if (slide.interactiveType === 'game') {
    return (
      <div
        ref={containerRef}
        className="slide-content-stage mini-game-stage"
        onMouseMove={handleStageMouseMove}
        onMouseLeave={handleStageMouseLeave}
      >
        <MiniGame onBackToPresentation={onRestartPresentation} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="slide-content-stage"
      onMouseMove={handleStageMouseMove}
      onMouseLeave={handleStageMouseLeave}
    >
      <div className="slide-grid-columns">
        {/* Left Column: 3D Typography */}
        <div className="slide-left-col">
          {/* Member / Presenter indicator */}
          <div className="member-presenter-badge">
            <span className="presenter-text">{slide.member}</span>
          </div>

          {/* 3D Extruded Title matching reference photo */}
          <h1 ref={titleRef} className="title-3d-extruded">
            <span className="title-line-base">{slide.title}</span>
            <span className="title-line-highlight neon-text-3d">{slide.titleHighlight}</span>
          </h1>

          {/* Glowing horizontal neon bar under title */}
          <div className="title-neon-bar" />

          {/* Subtitle / Description text */}
          <p ref={descRef} className="slide-description-lead">
            {slide.description}
          </p>

          {/* Optional Interactive Live Simulator button for Slide 3 */}
          {slide.interactiveType === 'neural' && (
            <div className="live-demo-toggle-row">
              <button
                className={`live-demo-btn ${showLiveVisualizer ? 'active' : ''}`}
                onClick={() => {
                  sound.playClick();
                  setShowLiveVisualizer(!showLiveVisualizer);
                }}
              >
                <Cpu size={16} />
                <span>{showLiveVisualizer ? 'Cerrar Simulador' : 'Simulador Neuronal en Vivo'}</span>
              </button>
            </div>
          )}

          {showLiveVisualizer && (
            <div className="embedded-visualizer-wrap">
              <NeuralVisualizer />
            </div>
          )}
        </div>

        {/* Right Column: Exactly 4 floating 3D Pill Cards matching reference */}
        <div ref={cardsContainerRef} className="slide-right-col">
          <div className={`cards-stack-wrapper ${slide.cards.some(c => !!c.imageUrl) ? 'cards-stack-with-images' : ''}`}>
            {slide.cards.map((card, idx) => (
              <SlideCard3D
                key={card.id}
                card={card}
                index={idx}
                onClick={onCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
