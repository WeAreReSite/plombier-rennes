'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative">
        <motion.div
          className="w-20 h-20 relative"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1976D2', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M50 10 C30 10, 10 30, 10 50 C10 70, 30 90, 50 90 C70 90, 90 70, 90 50 C90 30, 70 10, 50 10 L50 25 C62 25, 75 38, 75 50 C75 62, 62 75, 50 75 C38 75, 25 62, 25 50 C25 38, 38 25, 50 25"
              fill="url(#water-gradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.circle
              cx="50"
              cy="50"
              r="4"
              fill="#1D4ED8"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-blue-700 font-medium whitespace-nowrap">
            Chargement en cours...
          </p>
        </motion.div>
      </div>
    </div>
  );
}