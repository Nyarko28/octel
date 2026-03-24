'use client';

import { motion } from 'framer-motion';

interface BrowserMockupProps {
  url: string;
  image?: string | null;
  comingSoon?: boolean;
}

export function BrowserMockup({ url, image, comingSoon }: BrowserMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full"
    >
      <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
        {/* Browser frame */}
        <div className="bg-card px-4 py-2.5 border-b border-border flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-xs text-foreground/50">
            {url}
          </div>
        </div>

        {/* Browser content */}
        {comingSoon ? (
          <div className="h-56 md:h-72 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <p className="text-white text-xl font-semibold">Coming Soon</p>
            </div>
          </div>
        ) : image ? (
          <img
            src={image}
            alt="Project screenshot"
            className="w-full h-auto object-cover object-top block"
          />
        ) : null}
      </div>

      {/* Decorative shadow */}
      <motion.div
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-2xl rounded-full"
      />
    </motion.div>
  );
}
