'use client';

import { motion } from 'framer-motion';

const services = [
  {
    emoji: '🏫',
    title: 'School Websites',
    description: 'Professional websites for nurseries, primary, JHS and SHS schools.',
  },
  {
    emoji: '💼',
    title: 'Business Websites',
    description: 'Clean, fast websites for shops and companies.',
  },
  {
    emoji: '📅',
    title: 'Booking Systems',
    description: 'Let customers book appointments online.',
  },
  {
    emoji: '⚡',
    title: 'SaaS Products',
    description: 'Full software platforms with auth and payments.',
  },
  {
    emoji: '📱',
    title: 'Mobile Apps',
    description: 'iOS and Android apps with React Native.',
  },
  {
    emoji: '🤖',
    title: 'AI-Powered Systems',
    description: 'Contract, procurement, and academic management systems with AI.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Practical digital solutions designed to improve your brand credibility, customer experience, and business operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="mb-4 text-4xl">{service.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
