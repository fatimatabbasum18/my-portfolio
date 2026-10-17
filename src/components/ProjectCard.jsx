import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Info,
  FolderGit2,
  Binary,
  Eye,
  MoonStar,
  Palette,
  Layout,
  Sparkles,
  Utensils,
  Calculator,
  Dices,
  Compass,
  Shapes,
  Gamepad2,
  GraduationCap,
  Bot,
  FileText,
  Hash,
  Star,
} from 'lucide-react';

const PROJECT_ICONS = {
  FolderGit2,
  Binary,
  Eye,
  MoonStar,
  Palette,
  Layout,
  Sparkles,
  Utensils,
  Calculator,
  Dices,
  Compass,
  Shapes,
  Gamepad2,
  GraduationCap,
  Bot,
  FileText,
  Hash,
};

export default function ProjectCard({ project, onSelect }) {
  const IconComponent = PROJECT_ICONS[project.iconName] || Layout;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
        position: 'relative',
        padding: 0,
      }}
    >
      {/* Featured Ribbon Badge */}
      {project.featured && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 5,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            color: '#fbbf24',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '9999px',
            fontSize: '0.725rem',
            fontWeight: 700,
            border: '1px solid rgba(251, 191, 36, 0.4)',
          }}
        >
          <Star size={12} fill="#fbbf24" />
          <span>Featured</span>
        </div>
      )}

      {/* Visual Thumbnail / Modern Mockup Header */}
      <div
        style={{
          height: '170px',
          background: project.themeGradient,
          position: 'relative',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        {/* Subtle patterned overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.22) 0%, transparent 60%)',
          }}
        />

        {/* Mock Browser Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', zIndex: 2 }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.6)' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.4)' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.4)' }} />
        </div>

        {/* Project Central Icon Illustration */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <IconComponent size={26} />
          </div>

          {/* Status Live Dot */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(6px)',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              color: '#ffffff',
              fontWeight: 500,
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
            <span>Live App</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: '1.4rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          gap: '1.2rem',
        }}
      >
        <div>
          {/* Category Tag */}
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              display: 'block',
              marginBottom: '0.4rem',
            }}
          >
            {project.category}
          </span>

          <h3
            style={{
              fontSize: '1.25rem',
              marginBottom: '0.6rem',
              color: 'var(--text-primary)',
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.725rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                background: 'var(--bg-surface-hover)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span
              style={{
                fontSize: '0.725rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                background: 'var(--accent-soft)',
                color: 'var(--accent-secondary)',
              }}
            >
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Buttons Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ flex: 1 }}
            aria-label={`Open live demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>

          <button
            onClick={() => onSelect(project)}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.55rem 0.85rem' }}
            aria-label={`View details for ${project.title}`}
            title="View Details"
          >
            <Info size={16} />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.55rem 0.85rem' }}
              aria-label={`View GitHub repository for ${project.title}`}
              title="View GitHub Repository"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
