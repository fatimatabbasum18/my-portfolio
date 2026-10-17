import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Tag, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modal-open');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-surface)',
          borderRadius: '24px',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          padding: 0,
          position: 'relative',
        }}
      >
        {/* Modal Visual Header Banner */}
        <div
          style={{
            height: '180px',
            background: project.themeGradient,
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1.5rem',
            overflow: 'hidden',
          }}
        >
          {/* Subtle pattern or overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.25), transparent 70%)',
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.45)',
              color: '#ffffff',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s',
              zIndex: 10,
            }}
          >
            <X size={18} />
          </button>

          {/* Category Chip */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(0, 0, 0, 0.55)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.25)',
              zIndex: 2,
            }}
          >
            <Sparkles size={14} />
            <span>{project.category} Project</span>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.5rem, 3.5vw, 2.2rem)', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <div>
            <h3 id="modal-project-title" style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>
              {project.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
              {project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          {project.highlights && (
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                Key Implementation Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              Technologies & Tools
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    background: 'var(--bg-surface-hover)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions / Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '160px' }}
            >
              <span>Launch Live Demo</span>
              <ExternalLink size={16} />
            </a>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, minWidth: '160px' }}
              >
                <Github size={16} />
                <span>View Source Code</span>
              </a>
            ) : (
              <div
                style={{
                  fontSize: '0.825rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                }}
              >
                Source repository hosted on private/academic Git workflow.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
