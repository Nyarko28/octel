'use client';

import { motion } from 'framer-motion';

export function Marquee() {
  const items = [
    'TARSCO',
    'Archbishop Porter Girls SHS',
    'LexisManage',
    'ProcurEase',
    'FinalDesk',
    'SaaS Starter',
    'School Portal',
    'Booking System',
  ];

  return (
    <div className="hidden sm:block w-full max-w-full bg-gradient-to-r from-primary/5 via-transparent to-accent/5 py-12 mt-12 overflow-hidden">
      <div className="flex max-w-full whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex min-w-max gap-16 pr-16"
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-foreground/40 font-semibold text-lg flex-shrink-0">
              · {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
