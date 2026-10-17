import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, ChevronDown, Sparkles, Code2 } from 'lucide-react';

const ROLES = [
  'Frontend Developer',
  'React Developer in Progress',
  'Creative Web Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Column 1: Intro Text & Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Status Badge */}
            <div style={{ display: 'inline-flex' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-glass-card)',
                  border: '1px solid var(--border-medium)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                }}
              >
                <span className="status-dot-active" />
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.02em',
                  }}
                >
                  Open to learning opportunities & internships
                </span>
              </div>
            </div>

            {/* Main Greeting & Heading */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.6rem',
                }}
              >
                Hi, I'm{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 10%, var(--accent-secondary) 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Fatima Tabbasum
                </span>
                <span style={{ color: 'var(--accent-secondary)' }}>.</span>
              </h1>

              {/* Dynamic Animated Rotating Role */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: 'var(--accent-primary)',
                  minHeight: '2.4rem',
                }}
              >
                <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>A</span>
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    color: 'var(--accent-secondary)',
                    borderBottom: '2px solid var(--accent-primary)',
                    paddingBottom: '2px',
                  }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Short Introduction */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '560px',
              }}
            >
              I'm an aspiring Frontend Developer passionate about building beautiful, responsive, and interactive web experiences. I enjoy transforming ideas into clean, user-friendly interfaces while continuously learning modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
                aria-label="Explore my work"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
                aria-label="Contact me"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginTop: '0.75rem',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Connect:
              </span>

              <a
                href="https://github.com/fatimatabbasum18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fatima's GitHub Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-secondary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/fatima-tabbasum-300937390/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fatima's LinkedIn Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-secondary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={19} />
              </a>

              <a
                href="mailto:tabbasumnaz309@gmail.com"
                aria-label="Send Email to Fatima"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-secondary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={19} />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Authentic Portrait with Glowing Ring & Floating Decorative Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '20px 0',
            }}
          >
            {/* Glowing Backdrop Ring */}
            <div
              style={{
                position: 'relative',
                width: 'clamp(270px, 32vw, 370px)',
                height: 'clamp(270px, 32vw, 370px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Outer Gradient Halo */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)',
                  opacity: 0.7,
                  filter: 'blur(22px)',
                  animation: 'pulseGlow 6s ease-in-out infinite',
                }}
              />

              {/* Portrait Container Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  padding: '6px',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.4), rgba(255, 255, 255, 0.2))',
                  boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 35px var(--accent-glow)',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#0d0b18',
                    position: 'relative',
                  }}
                >
                  <img
                    src="/assets/fatima-profile.jpg"
                    alt="Portrait of Fatima Tabbasum - Aspiring Frontend Developer"
                    loading="eager"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge 1: React Enthusiast */}
              <div
                className="float-slow"
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '-20px',
                  background: 'var(--bg-glass-card)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-medium)',
                  padding: '0.55rem 1rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  zIndex: 3,
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>⚛️</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  React Focus
                </span>
              </div>

              {/* Floating Badge 2: Clean Code & Responsive UI */}
              <div
                className="float-delayed"
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '-15px',
                  background: 'var(--bg-glass-card)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-medium)',
                  padding: '0.55rem 1rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  zIndex: 3,
                }}
              >
                <Sparkles size={16} color="var(--accent-secondary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Responsive Craft
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 'clamp(2rem, 5vw, 4rem)',
          }}
        >
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll down to About section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <span>Scroll Down</span>
            <ChevronDown size={18} style={{ animation: 'subtleFloat 2s infinite' }} />
          </button>
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
