'use client';

import { useEffect, useState } from 'react';

export function HeroHeading({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        animation: isVisible ? 'fadeInScale 0.8s ease-out forwards' : 'none',
      }}
    >
      {children}
    </div>
  );
}

export function HeroSubtitle({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'opacity: 0',
      }}
    >
      {children}
    </div>
  );
}

export function HeroButton({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        animation: isVisible
          ? 'fadeInUp 0.8s ease-out forwards'
          : 'opacity: 0',
      }}
      className="hover:animate-pulse"
    >
      {children}
    </div>
  );
}
