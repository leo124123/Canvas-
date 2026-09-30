import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import type { SlideCardItem } from './types/presentation';
import { FullBackground } from './components/FullBackground';
import { SlideHeader } from './components/SlideHeader';
import { SlideFooter } from './components/SlideFooter';
import { SlideView } from './components/SlideView';
import { CardModal } from './components/CardModal';
import { sound } from './utils/soundEngine';

export const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<SlideCardItem | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const isTransitioningRef = useRef<boolean>(false);
  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // Navigate to next slide
  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      sound.playSlideTransition();
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex]);

  // Navigate to previous slide
  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      sound.playSlideTransition();
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  // Jump to specific slide
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES_DATA.length && index !== currentSlideIndex) {
      sound.playSlideTransition();
      setCurrentSlideIndex(index);
    }
  }, [currentSlideIndex]);

  // Restart presentation from beginning
  const restartPresentation = useCallback(() => {
    goToSlide(0);
  }, [goToSlide]);

  // Toggle sound
  const handleToggleMute = useCallback(() => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.setMuted(nextMuted);
  }, [isMuted]);

  // Toggle fullscreen
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  // Keyboard navigation: Arrow keys & Space
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCard) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'm' || e.key === 'M') {
        handleToggleMute();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, selectedCard, handleToggleMute, handleToggleFullscreen]);

  // Wheel / Scroll listener with smooth debounce
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (selectedCard) return;

      const target = e.target as HTMLElement;
      if (target.closest('.modal-body')) {
        return;
      }

      if (isTransitioningRef.current) return;

      if (Math.abs(e.deltaY) > 25) {
        isTransitioningRef.current = true;

        if (e.deltaY > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }

        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 650);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goToNextSlide, goToPrevSlide, selectedCard]);

  // Touchpad / touch swipe navigation
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (selectedCard) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 45) {
        if (deltaY > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNextSlide, goToPrevSlide, selectedCard]);

  return (
    <div className="canvas-app-wrapper theme-cyan-violet">
      {/* Full-Screen 3D Room Background with animated particles and crossfade */}
      <FullBackground
        currentBgImage={currentSlide.bgImage}
        slideIndex={currentSlideIndex}
      />

      {/* Presentation Canvas Overlay */}
      <div className="presentation-canvas-frame">
        {/* Header matching Image 1 */}
        <SlideHeader
          currentSlide={currentSlideIndex}
          totalSlides={SLIDES_DATA.length}
          onSelectSlide={goToSlide}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
          groupName="NOMBRE DEL GRUPO"
        />

        {/* Main 3D Slide Stage matching Image 1 */}
        <main className="presentation-stage-container">
          <SlideView
            slide={currentSlide}
            slideIndex={currentSlideIndex}
            onCardClick={(card) => setSelectedCard(card)}
            onRestartPresentation={restartPresentation}
          />
        </main>

        {/* Clean Footer matching Image 1 */}
        <SlideFooter
          currentSlide={currentSlideIndex}
          totalSlides={SLIDES_DATA.length}
          quote={currentSlide.quote}
        />
      </div>

      {/* Card Detail Modal */}
      <CardModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </div>
  );
};

export default App;
