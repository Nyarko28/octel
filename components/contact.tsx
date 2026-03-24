'use client';

import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const projectType = String(formData.get('projectType') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = encodeURIComponent(`New OCTEL project inquiry (${projectType})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:lemnadimat@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-card to-card/50 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Let&apos;s discuss your project and how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'lemnadimat@gmail.com',
              href: 'mailto:lemnadimat@gmail.com',
            },
            {
              icon: MessageCircle,
              label: 'WhatsApp',
              value: '0534086538',
              href: 'https://wa.me/233534086538',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '0534086538',
              href: 'tel:+233534086538',
            },
          ].map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={i}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={20} />
                </div>
                <p className="text-sm text-foreground/60 mb-1">{contact.label}</p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-8 border border-border"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
              >
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
