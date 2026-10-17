import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Paintbrush,
  FileCode,
  Boxes,
  Smartphone,
  Atom,
  Zap,
  Layers,
  Cpu,
  GitBranch,
  Github,
  Terminal,
  Search,
  Database,
  Server,
  Sparkles,
} from 'lucide-react';
import { skillsCategories } from '../data/skills';

// Icon mapping helper
const ICONS = {
  Code2,
  Paintbrush,
  FileCode,
  Boxes,
  Smartphone,
  Atom,
  Zap,
  Layers,
  Cpu,
  GitBranch,
  Github,
  Terminal,
  Search,
  Database,
  Server,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            An honest, transparent breakdown of the modern tools and technologies I use to build responsive web products, alongside the backend skills I am actively learning.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {skillsCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Category Header */}
              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
                    {category.title}
                  </h3>
                  {category.id === 'learning' ? (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'rgba(236, 72, 153, 0.15)',
                        color: '#ec4899',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
                      }}
                    >
                      Currently Learning
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'var(--badge-bg)',
                        color: 'var(--badge-text)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      Active Tools
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {category.description}
                </p>
              </div>

              {/* Skills Item List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {category.skills.map((skill) => {
                  const IconComponent = ICONS[skill.icon] || Code2;
                  const isLearning = skill.status === 'Learning';
                  const isInProgress = skill.status === 'In Progress';

                  return (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: 'var(--bg-surface-hover)',
                        border: '1px solid var(--border-subtle)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-medium)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: isLearning
                              ? 'rgba(236, 72, 153, 0.12)'
                              : isInProgress
                              ? 'rgba(139, 92, 246, 0.12)'
                              : 'var(--accent-soft)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isLearning
                              ? '#ec4899'
                              : isInProgress
                              ? 'var(--accent-secondary)'
                              : 'var(--accent-primary)',
                          }}
                        >
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                            {skill.name}
                          </div>
                          <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                            {skill.level}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: '0.725rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          background: isLearning
                            ? 'rgba(236, 72, 153, 0.1)'
                            : isInProgress
                            ? 'rgba(139, 92, 246, 0.1)'
                            : 'rgba(34, 197, 94, 0.1)',
                          color: isLearning
                            ? '#ec4899'
                            : isInProgress
                            ? 'var(--accent-secondary)'
                            : '#22c55e',
                          border: `1px solid ${
                            isLearning
                              ? 'rgba(236, 72, 153, 0.25)'
                              : isInProgress
                              ? 'rgba(139, 92, 246, 0.25)'
                              : 'rgba(34, 197, 94, 0.25)'
                          }`,
                        }}
                      >
                        {skill.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
