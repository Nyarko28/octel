'use client';

import { motion } from 'framer-motion';

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/30 to-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-secondary/25 to-primary/15 blur-3xl"
      />
    </div>
  );
}
