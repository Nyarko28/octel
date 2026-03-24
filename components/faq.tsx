'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope and complexity. Starter projects typically take 2-4 weeks, Professional projects 6-12 weeks, and Enterprise solutions are custom. We provide detailed timelines during the initial consultation.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes! All our projects include support periods based on your plan. We also offer optional extended maintenance and optimization services to keep your digital solution running smoothly.',
  },
  {
    question: 'Can you work with existing platforms?',
    answer:
      'Absolutely. We can integrate with existing platforms like Shopify, WordPress, Webflow, and custom systems. We assess compatibility and provide recommendations during the discovery phase.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use modern, industry-leading technologies including React, Next.js, TypeScript, Node.js, and more. Our tech stack is chosen based on your project requirements to ensure optimal performance and scalability.',
  },
  {
    question: 'How do you approach project pricing?',
    answer:
      'We offer fixed pricing for our standard plans and custom quotes for Enterprise solutions. We break down costs clearly so you know exactly what you\'re paying for with no hidden fees.',
  },
  {
    question: 'What happens if I need changes after launch?',
    answer:
      'Changes and revisions are covered during your support period. After that, we offer flexible hourly rates or maintenance packages for ongoing updates and improvements.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60 text-balance">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/50 transition-colors"
      >
        <span className="text-lg font-semibold text-left">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="text-primary" size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-card/50 border-t border-border">
          <p className="text-foreground/70 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
