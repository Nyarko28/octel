'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Business-First Strategy',
    description: 'We design every project around your goals, so your website or app supports real business growth.',
  },
  {
    title: 'Reliable Delivery',
    description: 'Clear communication, transparent milestones, and on-time execution from planning to launch.',
  },
  {
    title: 'Long-Term Support',
    description: 'We stay available after launch to improve, maintain, and scale your digital product with you.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 px-6 border-y border-border bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Why Clients Choose OCTEL</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A focused process built on trust, quality, and measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-background p-6"
            >
              <CheckCircle2 className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
