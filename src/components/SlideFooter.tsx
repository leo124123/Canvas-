import React from 'react';

interface SlideFooterProps {
  currentSlide: number;
  totalSlides: number;
  quote?: string;
}

export const SlideFooter: React.FC<SlideFooterProps> = ({
  currentSlide,
  totalSlides,
  quote = 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS'
}) => {
  const quoteLines = quote.split('\n');

  return (
    <footer className="slide-footer-clean">
      {/* Left indicator: clean, subtle slide counter */}
      <div className="footer-left-clean">
        <div className="clean-slide-counter">
          <span className="clean-current">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="clean-slash">/</span>
          <span className="clean-total">{String(totalSlides).padStart(2, '0')}</span>
        </div>
        <div className="clean-scroll-hint">
          <span className="mouse-wheel-dot" />
          <span>Scroll para avanzar</span>
        </div>
      </div>

      {/* Right corner quote matching reference photo exactly */}
      <div className="footer-right-clean">
        <div className="quote-clean-block">
          <div className="quote-lines-decor">
            <span className="q-line-1" />
            <span className="q-line-2" />
            <span className="q-line-3" />
          </div>
          <div className="quote-text-col">
            {quoteLines.map((line, idx) => (
              <span key={idx} className="quote-row-text">{line}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
