import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, GraduationCap, Laptop, FileText, CheckCircle2, Heart } from 'lucide-react';
import CvModal from './CvModal';

export default function About() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const highlights = [
    {
      icon: <Laptop size={22} color="var(--accent-primary)" />,
      title: '17+ Projects Built',
      description: 'Hands-on practical experience crafting single-page apps, interactive games, calculators, and responsive landing pages.',
    },
    {
      icon: <GraduationCap size={22} color="var(--accent-secondary)" />,
      title: 'SMIT & Aptech Trainee',
      description: 'Undergoing rigorous frontend and software engineering training focused on modern industry web standards.',
    },
    {
      icon: <Code2 size={22} color="#ec4899" />,
      title: 'Component Mindset',
      description: 'Writing modular, reusable, and maintainable code in React.js and vanilla JavaScript with attention to clean hierarchy.',
    },
    {
      icon: <Sparkles size={22} color="#3b82f6" />,
      title: 'Mobile-First Philosophy',
      description: 'Designing interfaces that look intentional, readable, and perfectly proportioned on phones, tablets, and desktops.',
    },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>Get To Know Me</span>
          </span>
          <h2 className="section-title">About Fatima Tabbasum</h2>
          <p className="section-subtitle">
            Transforming creative ideas into elegant, responsive digital experiences through continuous learning and disciplined code craft.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Main Story Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
            }}
          >
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
              Passionate About Designing Responsive Interfaces & Interactive Experiences
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
              I am an enthusiastic web developer based in Karachi, Pakistan. My journey started with a genuine fascination for how visual designs come to life on the screen. What began with mastering core semantic <strong style={{ color: 'var(--text-primary)' }}>HTML5</strong> and expressive <strong style={{ color: 'var(--text-primary)' }}>CSS3</strong> has grown into deep exploration of <strong style={{ color: 'var(--text-primary)' }}>JavaScript (ES6+)</strong> and building modern stateful user interfaces with <strong style={{ color: 'var(--accent-secondary)' }}>React.js</strong>.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Currently, I am actively sharpening my skills in <strong style={{ color: 'var(--text-primary)' }}>Modern Web & App Development at SMIT</strong> while concurrently pursuing a formal <strong style={{ color: 'var(--text-primary)' }}>Software Engineering curriculum at Aptech</strong>. This dual-track learning enables me to understand both practical frontend implementation and broader computer science logic.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
              I firmly believe that good software is not just functional—it should be intuitive, accessible, performant, and delightful to interact with. When I am not building web apps or experimenting with state management, I am exploring backend basics with PHP & MySQL and Laravel to expand my fullstack perspective.
            </p>

            {/* Core Values / What I Bring */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.85rem',
                marginTop: '0.5rem',
              }}
            >
              {[
                'Pixel-perfect mobile responsiveness',
                'Clean, readable code structure',
                'Continuous curious learner mindset',
                'Enthusiasm for team collaboration',
              ].map((value) => (
                <div
                  key={value}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span>{value}</span>
                </div>
              ))}
            </div>

            {/* CV Modal Trigger Action */}
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setCvModalOpen(true)}
                className="btn btn-primary"
                aria-label="View professional curriculum vitae"
              >
                <FileText size={18} />
                <span>View & Print CV</span>
              </button>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Includes verified education, technical skills, and project catalog
              </span>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CV Modal Component */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.35fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
