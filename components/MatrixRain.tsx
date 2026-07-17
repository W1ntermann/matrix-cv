'use client';

import React, { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // false for performance if drawing solid background
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Matrix characters
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン0123456789{}<>/=+*#@!'.split('');
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    
    // Arrays for tracking column drop state and speed
    const drops: number[] = [];
    const speeds: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at different heights off screen
      speeds[i] = Math.random() * 0.5 + 0.3; 
    }

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 40; 
    const interval = 1000 / fps;

    const draw = (time: number) => {
      animationFrameId = requestAnimationFrame(draw);
      const deltaTime = time - lastTime;

      if (deltaTime > interval) {
        // Fade effect to create trailing tails
        ctx.fillStyle = 'rgba(5, 7, 5, 0.15)'; // Near-black with low opacity
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize + fontSize / 2;
          const y = drops[i] * fontSize;

          // Only draw if within screen bounds for performance
          if (y > -fontSize && y < canvas.height + fontSize) {
            // Brighter green head, no expensive shadow for performance, just raw color
            ctx.fillStyle = '#39ff6a';
            ctx.fillText(char, x, y);
          }

          drops[i] += speeds[i];

          // Reset drop randomly after it crosses screen
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
            speeds[i] = Math.random() * 0.5 + 0.3;
          }
        }
        
        lastTime = time - (deltaTime % interval);
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] opacity-45 pointer-events-none"
    />
  );
}
