'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrowserMockup } from './browser-mockup';

const projects = [
  {
    tag: 'AI-Powered SaaS',
    title: 'LexisManage — Contract Management System',
    description: 'A smart contract management platform powered by AI. Built for businesses and legal teams to create, organize, track, and manage contracts in one place. AI assists with contract drafting, clause analysis, deadline alerts, and risk identification — saving hours of manual legal work.',
    tags: ['React', 'AI', 'Firebase', 'Vercel'],
    link: 'https://lexis-manage.vercel.app',
    url: 'lexis-manage.vercel.app',
    gradient: 'from-amber-600 to-orange-600',
    image: '/projects/lexismanage.png',
  },
  {
    tag: 'AI-Powered SaaS',
    title: 'ProcurEase — Supplier & Tender Management',
    description: 'An intelligent procurement platform that streamlines supplier management and tender processes. AI helps evaluate suppliers, analyze tenders, and make smarter procurement decisions faster.',
    tags: ['React', 'PHP', 'AI', 'Railway', 'Vercel'],
    link: 'https://procurease.vercel.app',
    url: 'procurease.vercel.app',
    gradient: 'from-emerald-600 to-green-600',
    image: '/projects/procurease.png',
  },
  {
    tag: 'EdTech · AI-Powered',
    title: 'FinalDesk — Academic Assignment Platform',
    description: 'A modern assignment submission and management platform for schools and universities. AI assists students and lecturers with feedback, grading insights, and academic integrity checks.',
    tags: ['React', 'Supabase', 'AI', 'Vercel'],
    link: 'https://finaldesk.vercel.app',
    url: 'finaldesk.vercel.app',
    gradient: 'from-blue-600 to-cyan-600',
    image: '/projects/finaldesk.png',
  },
  {
    tag: 'School Portal',
    title: 'TARSCO — School Management System',
    description: 'A comprehensive school management platform for Tarkwa Senior High School. Streamlines academics, admissions, student life, and alumni engagement with a modern, intuitive interface.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: 'https://tarsco.vercel.app',
    url: 'tarsco.vercel.app',
    gradient: 'from-green-600 to-emerald-600',
    image: '/projects/tarsco.png',
  },
  {
    tag: 'School Portal',
    title: 'Archbishop Porter — Girls SHS',
    description: 'Modern website for Archbishop Porter Girls Senior High School. Features academics information, admissions, student life updates, virtual tours, and alumni connections.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: 'https://archbishopportergirls.vercel.app',
    url: 'archbishopportergirls.vercel.app',
    gradient: 'from-blue-700 to-indigo-600',
    image: '/projects/porter.png',
  },
  {
    tag: 'SaaS Starter',
    title: 'SaaS Starter Kit',
    description: 'A production-ready SaaS boilerplate with authentication, database integration, and payment processing. Designed to help entrepreneurs launch their SaaS products faster.',
    tags: ['React', 'Stripe', 'Supabase'],
    link: '#',
    url: 'Coming Soon',
    gradient: 'from-slate-700 to-slate-900',
    image: null,
    comingSoon: true,
  },
];

export function Work() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured Work
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Explore some of our recent projects that showcase our expertise and innovation.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"
            >
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''} flex flex-col justify-center`}>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.tag}</span>
                <h3 className="text-3xl font-bold mb-4 mt-2">{project.title}</h3>
                <p className="text-lg text-foreground/60 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group w-fit">
                    View Project
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </a>
              </div>
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''} relative w-full`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-10 blur-3xl`} />
                <BrowserMockup url={project.url} image={project.image} comingSoon={project.comingSoon} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
