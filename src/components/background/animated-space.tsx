'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  life: number;
  maxLife: number;
}

export default function AnimatedSpace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const initStars = () => {
      starsRef.current = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
    };

    const initParticles = () => {
      particlesRef.current = Array.from({ length: 50 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.5 + 0.2;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          color: ['#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'][
            Math.floor(Math.random() * 4)
          ],
        };
      });
    };

    const drawStar = (
      x: number,
      y: number,
      size: number,
      opacity: number,
      time: number,
      duration: number,
      delay: number
    ) => {
      const adjustedTime = (time - delay * 100) / (duration * 1000);
      const cycle = adjustedTime % 1;
      const twinkle =
        Math.sin(cycle * Math.PI * 2) * 0.5 + 0.5;

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * twinkle})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawParticle = (
      x: number,
      y: number,
      size: number,
      opacity: number,
      color: string
    ) => {
      ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = color.replace(')', `, ${opacity * 0.5})`).replace('rgb', 'rgba');
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const drawShootingStar = (star: ShootingStar) => {
      const progress = star.life / star.maxLife;
      const opacity = Math.sin(progress * Math.PI) * 0.8;

      ctx.strokeStyle = `rgba(220, 180, 255, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(
        star.x + Math.cos(star.angle) * star.length,
        star.y + Math.sin(star.angle) * star.length
      );
      ctx.stroke();

      ctx.fillStyle = `rgba(255, 200, 255, ${opacity * 0.5})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawNebula = (time: number) => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.0001) * 100,
        canvas.height / 2 + Math.cos(time * 0.00008) * 100,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );

      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.1)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(88, 28, 135, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const createShootingStar = () => {
      if (Math.random() > 0.995 && shootingStarsRef.current.length < 3) {
        shootingStarsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 60,
          angle: Math.random() * 0.5 + 0.2,
          speed: Math.random() * 5 + 5,
          life: 0,
          maxLife: Math.random() * 30 + 40,
        });
      }
    };

    const animate = (time: number) => {
      ctx.fillStyle = 'rgb(6, 0, 10)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawNebula(time);

      starsRef.current.forEach((star) => {
        drawStar(
          star.x,
          star.y,
          star.size,
          star.opacity,
          time,
          star.duration,
          star.delay
        );
      });

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity -= 0.002;

        if (particle.opacity <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.opacity = Math.random() * 0.3 + 0.1;
        }

        drawParticle(
          particle.x,
          particle.y,
          particle.size,
          particle.opacity,
          particle.color
        );
      });

      createShootingStar();

      shootingStarsRef.current = shootingStarsRef.current.filter(
        (star) => star.life < star.maxLife
      );

      shootingStarsRef.current.forEach((star) => {
        drawShootingStar(star);
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.life++;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    initStars();
    initParticles();
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20"
      style={{ background: 'rgb(6, 0, 10)' }}
    />
  );
}
