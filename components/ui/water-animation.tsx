'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WaterDropProps {
  delay?: number;
  x: number;
  size?: number;
}

const WaterDrop = ({ delay = 0, x, size = 20 }: WaterDropProps) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%` }}
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: [-50, 400, 500],
        opacity: [0, 1, 0],
        scale: [1, 1, 0.5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeIn",
      }}
    >
      <svg
        width={size}
        height={size * 1.5}
        viewBox="0 0 40 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0C20 0 0 20 0 35C0 46.0457 8.95431 55 20 55C31.0457 55 40 46.0457 40 35C40 20 20 0 20 0Z"
          fill="url(#gradient)"
          fillOpacity="0.8"
        />
        <defs>
          <linearGradient id="gradient" x1="20" y1="0" x2="20" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1976D2" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

interface WaterAnimationProps {
  containerClass?: string;
}

export const WaterAnimation = ({ containerClass = "fixed inset-0" }: WaterAnimationProps) => {
  const [drops, setDrops] = useState<{ id: number; x: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generateDrops = () => {
      const newDrops = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // Use percentage for responsive positioning
        delay: Math.random() * 4,
        size: 15 + Math.random() * 25,
      }));
      setDrops(newDrops);
    };

    generateDrops();
    window.addEventListener('resize', generateDrops);
    return () => window.removeEventListener('resize', generateDrops);
  }, []);

  return (
    <div className={`${containerClass} pointer-events-none overflow-hidden`}>
      {drops.map((drop) => (
        <WaterDrop key={drop.id} x={drop.x} delay={drop.delay} size={drop.size} />
      ))}
    </div>
  );
};

export const WaveAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <svg
        className="w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#1D4ED8"
          fillOpacity="0.1"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,208C672,235,768,277,864,277.3C960,277,1056,235,1152,213.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};