import React, { useEffect, useRef } from 'react';

interface FullBackgroundProps {
  currentBgImage: string;
  slideIndex: number;
}

export const FullBackground: React.FC<FullBackgroundProps> = ({ currentBgImage, slideIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevSlideRef = useRef<number>(slideIndex);
  const warpSpeedRef = useRef<number>(1);

  const isScreensRoom = currentBgImage.includes('bg_room_screens');

  // Trigger hyperspace warp boost on slide change
  useEffect(() => {
    if (prevSlideRef.current !== slideIndex) {
      prevSlideRef.current = slideIndex;
      warpSpeedRef.current = 6; // Boost speed for 3D page transition!
      const timer = setTimeout(() => {
        warpSpeedRef.current = 1;
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [slideIndex]);

  // Subtle 3D mouse parallax for the curved monitor amphitheater
  useEffect(() => {
    if (!isScreensRoom) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      // Smooth lerp interpolation
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const panX = currentX * 14; // pixels
      const panY = currentY * 10;
      const rotX = -currentY * 2.2; // degrees
      const rotY = currentX * 3.2;

      document.documentElement.style.setProperty('--screens-pan-x', `${panX.toFixed(2)}px`);
      document.documentElement.style.setProperty('--screens-pan-y', `${panY.toFixed(2)}px`);
      document.documentElement.style.setProperty('--screens-rot-x', `${rotX.toFixed(2)}deg`);
      document.documentElement.style.setProperty('--screens-rot-y', `${rotY.toFixed(2)}deg`);

      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      document.documentElement.style.removeProperty('--screens-pan-x');
      document.documentElement.style.removeProperty('--screens-pan-y');
      document.documentElement.style.removeProperty('--screens-rot-x');
      document.documentElement.style.removeProperty('--screens-rot-y');
    };
  }, [isScreensRoom]);

  // Constant 3D Depth Particle Field (Hyperspace + Ambient Sine Float)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Star/Particle Depth Coordinates
    const count = isScreensRoom ? 110 : 90;
    const starField: {
      x: number;
      y: number;
      z: number;
      pz: number;
      size: number;
      color: string;
    }[] = [];

    // Screen matrix phosphor palette when in screens room, cosmic palette otherwise
    const colors = isScreensRoom
      ? ['#00f0ff', '#38bdf8', '#00e5bc', '#f59e0b', '#818cf8']
      : ['#00f0ff', '#c084fc', '#38bdf8', '#a855f7', '#e879f9'];

    for (let i = 0; i < count; i++) {
      starField.push({
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 1.8,
        z: Math.random() * 1200 + 1,
        pz: 1200,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let clock = 0;
    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      clock += 0.015;

      const centerX = width / 2;
      const centerY = height / 2;
      const speed = 2.5 * warpSpeedRef.current;

      // Draw 3D Depth Particles flying toward camera
      for (let i = 0; i < count; i++) {
        const star = starField[i];
        star.pz = star.z;
        star.z -= speed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 1.8;
          star.y = (Math.random() - 0.5) * height * 1.8;
          star.z = 1200;
          star.pz = 1200;
        }

        // Perspective 3D projection
        const fov = 350;
        const k = fov / star.z;
        const pk = fov / star.pz;

        // Subtle ambient camera sway
        const swayX = Math.sin(clock * 0.8) * 12;
        const swayY = Math.cos(clock * 0.6) * 8;

        const sx = star.x * k + centerX + swayX;
        const sy = star.y * k + centerY + swayY;

        const px = star.x * pk + centerX + swayX;
        const py = star.y * pk + centerY + swayY;

        if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
          const depthRatio = 1 - star.z / 1200;
          const radius = Math.max(0.5, star.size * k * 0.8);

          ctx.beginPath();
          if (warpSpeedRef.current > 1.5) {
            // Speed streak line during 3D page transition!
            ctx.moveTo(px, py);
            ctx.lineTo(sx, sy);
            ctx.strokeStyle = star.color;
            ctx.lineWidth = radius * 1.5;
            ctx.stroke();
          } else {
            // Constant ambient glowing particle dot
            ctx.arc(sx, sy, radius, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = Math.min(1, depthRatio * (isScreensRoom ? 1.4 : 1.2));
            ctx.shadowColor = star.color;
            ctx.shadowBlur = isScreensRoom ? 12 : 10;
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isScreensRoom]);

  return (
    <div className={`full-background-container ${isScreensRoom ? 'is-screens-mode' : ''}`}>
      {/* Background Image with crossfade & 3D parallax / Ken Burns motion */}
      <img
        key={currentBgImage}
        src={currentBgImage}
        alt="Fondo de presentación 3D"
        className={`full-bg-image-layer ${isScreensRoom ? 'screens-parallax-img' : ''}`}
      />

      {/* Dynamic Animated Matrix Layers when in Screens Room */}
      {isScreensRoom && (
        <div className="screens-matrix-overlay-group" aria-hidden="true">
          {/* CRT phosphor micro raster lines */}
          <div className="screens-crt-raster" />

          {/* Sweeping CRT Cathode Ray beam */}
          <div className="screens-scanline-beam" />

          {/* Glowing Ambient Screen Pulses (Cyan, Teal, Amber) */}
          <div className="screens-ambient-glow" />

          {/* Shimmering Wet Floor Light Reflections */}
          <div className="screens-floor-reflection" />

          {/* Adaptive Readability Vignette (ensures text and cards stand out clearly) */}
          <div className="screens-adaptive-vignette" />
        </div>
      )}

      {/* Atmospheric Deep Purple/Blue Vignette (for standard slides) */}
      {!isScreensRoom && <div className="full-bg-vignette" />}

      {/* Constant 3D Depth Particle Canvas with Warp Transition */}
      <canvas ref={canvasRef} className="full-bg-particles-canvas" />
    </div>
  );
};

