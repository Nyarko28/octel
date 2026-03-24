'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and MVPs',
    price: 'Book a Consultation',
    period: '',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      '1 month of support',
      'Unlimited revisions',
    ],
  },
  {
    name: 'Professional',
    description: 'Best for growing businesses',
    price: 'Book a Consultation',
    period: '',
    featured: true,
    features: [
      'Up to 15 pages',
      'Advanced UI/UX design',
      'Complete SEO optimization',
      'Integration with 3rd party tools',
      'Analytics setup',
      '3 months of support',
      'Unlimited revisions',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom Quote',
    period: '',
    features: [
      'Unlimited pages',
      'Custom features & integrations',
      'Performance optimization',
      'Security audit & implementation',
      'Dedicated account manager',
      '6+ months of support',
      'Ongoing optimization',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Project Plans</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">Choose the best plan for your goals. We will tailor the scope to your needs.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 p-4 rounded-lg bg-primary/5 border border-primary/20"
        >
          <p className="text-sm text-foreground/70">We define scope and timeline first, then provide a tailored proposal.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50 scale-105 md:scale-100 md:ring-2 md:ring-primary/50'
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period ? <span className="text-foreground/60 ml-2">/{plan.period}</span> : null}
                </div>

                <Button
                  className={`w-full mb-8 ${
                    plan.featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-card border border-border hover:bg-border/50'
                  }`}
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
