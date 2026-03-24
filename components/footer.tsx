'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/lemnadimat', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com', label: 'X' },
  { icon: Mail, href: 'mailto:lemnadimat@gmail.com', label: 'Email' },
];

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Mobile Development', href: '#services' },
  ],
  Company: [
    { label: 'Portfolio', href: '#work' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              OCTEL
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Building exceptional digital solutions that drive real business results.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map((section, i) => (
            <motion.div
              key={section[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 1) * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{section[0]}</h4>
              <ul className="space-y-2">
                {section[1].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm text-center md:text-left"
          >
            © 2026 OCTEL. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
