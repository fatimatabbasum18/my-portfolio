import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 2.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {/* Top Row: Monogram, Nav Links, Socials */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            {/* Brand Logo & Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, #ec4899 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 15px var(--accent-glow)',
                }}
              >
                FT
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                  Fatima Tabbasum
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Frontend Developer | React Developer in Progress
                </p>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <nav
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}
              aria-label="Footer Navigation"
            >
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Education', id: 'education' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    color: 'inherit',
                    transition: 'color 0.2s',
                    fontSize: 'inherit',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-secondary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href="https://github.com/fatimatabbasum18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fatima's GitHub"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-secondary)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                }}
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/fatima-tabbasum-300937390/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fatima's LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-secondary)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                }}
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:tabbasumnaz309@gmail.com"
                aria-label="Email Fatima"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-secondary)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Bottom Divider & Copyright Tagline */}
          <div
            style={{
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <div>
              Designed & Built with 💜 by <strong>Fatima Tabbasum</strong> • Aspiring Frontend Developer
            </div>

            <div>
              © {currentYear} All rights reserved. Made for the modern web.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
