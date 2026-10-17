import React, { useEffect } from 'react';
import { X, Printer, Mail, Github, Linkedin, ExternalLink, Download } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modal-open');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(1.5rem, 4vw, 2.8rem)',
          background: 'var(--bg-surface)',
          borderRadius: '24px',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
          position: 'relative',
        }}
      >
        {/* Top Action Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '1.25rem',
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h2 id="cv-modal-title" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>
              Curriculum Vitae Preview
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Accurate verified academic and frontend development profile
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              style={{ gap: '0.5rem' }}
              title="Print CV or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV Modal"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-surface-hover)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div
          className="printable-cv-view"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            color: 'var(--text-primary)',
          }}
        >
          {/* Header Block */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              background: 'var(--bg-glass-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <h1 style={{ fontSize: '2.2rem', marginBottom: '0.25rem', color: 'var(--accent-secondary)' }}>
              Fatima Tabbasum
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
              }}
            >
              Frontend Developer | React Developer in Progress
            </p>

            {/* Contact Details */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={16} color="var(--accent-primary)" />
                <a href="mailto:tabbasumnaz309@gmail.com" style={{ textDecoration: 'underline' }}>
                  tabbasumnaz309@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Github size={16} color="var(--accent-primary)" />
                <a
                  href="https://github.com/fatimatabbasum18"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline' }}
                >
                  github.com/fatimatabbasum18
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Linkedin size={16} color="var(--accent-primary)" />
                <a
                  href="https://www.linkedin.com/in/fatima-tabbasum-300937390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline' }}
                >
                  linkedin.com/in/fatima-tabbasum-300937390
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.6rem' }}>
              Professional Profile
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Aspiring Frontend Developer passionate about building beautiful, responsive, and interactive web experiences. Committed to transforming requirements and ideas into clean, user-friendly digital products using modern web standards (HTML5, CSS3, JavaScript, React.js, Bootstrap). Currently enhancing skills in component architectures and fullstack fundamentals at SMIT and Aptech.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.8rem' }}>
              Education & Professional Training
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'var(--bg-surface-hover)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong>Modern Web and App Development</strong>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Enrolled / Active</span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  SMIT (Saylani Mass IT Training)
                </div>
                <p style={{ fontSize: '0.875rem', marginTop: '0.4rem', color: 'var(--text-secondary)' }}>
                  Specializing in modern frontend development, HTML5/CSS3 mastery, JavaScript ES6+, React.js, responsive layouts, and version control with Git & GitHub.
                </p>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'var(--bg-surface-hover)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong>Software Engineering</strong>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Currently Pursuing</span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Aptech</div>
                <p style={{ fontSize: '0.875rem', marginTop: '0.4rem', color: 'var(--text-secondary)' }}>
                  In-depth curriculum covering core computer science principles, database modeling, software architecture, and modern programming languages.
                </p>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'var(--bg-surface-hover)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong>Intermediate in Computer Science (ICS / Pre-Engineering)</strong>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Completed</span>
                </div>
                <p style={{ fontSize: '0.875rem', marginTop: '0.4rem', color: 'var(--text-secondary)' }}>
                  Completed with excellent grades, building a rigorous logical and mathematical problem-solving background.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.8rem' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'React.js',
                'Bootstrap 5',
                'Responsive Web Design',
                'Git & GitHub',
                'PHP & MySQL (Learning)',
                'Laravel (Learning)',
                'UI/UX Basics',
                'DOM Manipulation',
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.825rem',
                    background: 'var(--badge-bg)',
                    color: 'var(--badge-text)',
                    border: '1px solid var(--border-subtle)',
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Key Web Applications */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.8rem' }}>
              Selected Projects (17 Total Built & Deployed)
            </h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>Counter App with React:</strong> Interactive counter showcasing useState hook and component lifecycle.</li>
              <li><strong>Teacher Day Surprise:</strong> Personalized celebratory card with interactive reveal animations.</li>
              <li><strong>Restaurant Website:</strong> Multi-section responsive menu and culinary showcase.</li>
              <li><strong>Calculator Pro:</strong> Full-featured arithmetic calculator with chained operations.</li>
              <li><strong>Theme Toggler:</strong> React-based dark/light theme switching with custom CSS variables.</li>
              <li><strong>First Landing Page:</strong> Responsive modern marketing layout.</li>
            </ul>
          </div>
        </div>

        {/* Note about PDF replacement */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            borderRadius: '12px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.825rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
          }}
        >
          💡 <strong>Tip:</strong> Clicking "Print / Save as PDF" above allows instant export to clean PDF via your browser. You can also place an existing PDF file into <code>public/Fatima_Tabbasum_CV.pdf</code> to provide a direct download link.
        </div>
      </div>
    </div>
  );
}
