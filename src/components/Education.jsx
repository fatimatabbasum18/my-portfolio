import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Laptop, Sparkles, Calendar, MapPin, Award } from 'lucide-react';

const EDUCATION_TIMELINE = [
  {
    id: 1,
    title: 'Modern Web and App Development',
    institution: 'Saylani Mass IT Training (SMIT)',
    status: 'Actively Enrolled',
    statusColor: '#22c55e',
    icon: Laptop,
    description:
      'Intensive training program focused on modern frontend engineering. Hands-on experience developing semantic web layouts, responsive interfaces with HTML5 & CSS3, interactive DOM scripting with JavaScript (ES6+), and single-page application development with React.js.',
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Bootstrap 5', 'Git & GitHub'],
  },
  {
    id: 2,
    title: 'Software Engineering',
    institution: 'Aptech Computer Education',
    status: 'Currently Pursuing',
    statusColor: '#8b5cf6',
    icon: BookOpen,
    description:
      'Comprehensive software engineering curriculum covering fundamental computer science methodologies, data structures, relational database foundations, object-oriented programming concepts, and systematic software development lifecycles.',
    skills: ['Programming Logic', 'Database Concepts', 'Software Lifecycle', 'Web Technologies'],
  },
  {
    id: 3,
    title: 'Intermediate in Computer Science (ICS / Pre-Engineering)',
    institution: 'Higher Secondary Education',
    status: 'Completed',
    statusColor: '#3b82f6',
    icon: GraduationCap,
    description:
      'Graduated with solid academic standing, establishing a strong analytical background in computing mathematics, logic formulation, physics, and introductory computing.',
    skills: ['Computer Science', 'Mathematics', 'Logical Reasoning', 'Analytical Problem Solving'],
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Journey</span>
          </span>
          <h2 className="section-title">Education & Learning Journey</h2>
          <p className="section-subtitle">
            A solid grounding in computer science combined with modern, practical frontend specialization through premier technical institutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
            padding: '1rem 0',
          }}
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: 'clamp(18px, 5vw, 36px)',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), var(--border-subtle))',
              zIndex: 0,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {EDUCATION_TIMELINE.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(1.2rem, 3vw, 2.2rem)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Timeline Node Icon */}
                  <div
                    style={{
                      width: 'clamp(38px, 6vw, 50px)',
                      height: 'clamp(38px, 6vw, 50px)',
                      borderRadius: '50%',
                      background: 'var(--bg-surface)',
                      border: '2px solid var(--accent-primary)',
                      boxShadow: '0 0 15px var(--accent-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-secondary)',
                      flexShrink: 0,
                      marginTop: '0.25rem',
                    }}
                  >
                    <IconComp size={20} />
                  </div>

                  {/* Card Content */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: 'clamp(1.4rem, 3.5vw, 2rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.9rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      <h3 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)', color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>

                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          background: 'var(--bg-surface-hover)',
                          color: item.statusColor,
                          border: `1px solid ${item.statusColor}40`,
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--accent-secondary)',
                      }}
                    >
                      {item.institution}
                    </div>

                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.925rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Skill Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.65rem',
                            borderRadius: '9999px',
                            background: 'var(--accent-soft)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
