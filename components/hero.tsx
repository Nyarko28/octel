'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingOrbs } from './floating-orbs';
import { Marquee } from './marquee';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%), rgb(9,9,11)',
        backgroundColor: '#090913',
      }}
    >
      <FloatingOrbs />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-indigo-400 font-semibold">
            Takoradi · Ghana · West Africa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance text-white"
        >
          We Build Trusted Digital Products That Help Your Business Grow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto text-balance"
        >
          From school websites to AI-powered SaaS platforms, we deliver clean design, fast performance, and reliable support so your business looks professional and wins client trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button
            size="lg"
            className="bg-indigo-600 text-white hover:bg-indigo-700 group cursor-pointer"
            onClick={() => scrollToSection('contact')}
          >
            Start Your Project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            className="border border-white text-white hover:bg-white/10 bg-transparent cursor-pointer"
            onClick={() => scrollToSection('work')}
          >
            See Real Projects
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm text-zinc-500 mb-12"
        >
          ✓ Based in Takoradi  ✓ 8+ Projects Delivered  ✓ Clear Communication  ✓ On-Time Delivery
        </motion.p>

        <Marquee />
      </motion.div>
    </section>
  );
}
