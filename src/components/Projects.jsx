import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, X, Sparkles, Filter } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by both category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            <span>Interactive Works</span>
          </span>
          <h2 className="section-title">Complete Projects Portfolio</h2>
          <p className="section-subtitle">
            Explore 17 deployed web applications spanning React.js state management, interactive vanilla JavaScript games, algorithms, and responsive layouts.
          </p>
        </div>

        {/* Filters & Search Control Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            {/* Category Filter Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                background: 'var(--bg-glass-card)',
                padding: '0.4rem',
                borderRadius: '9999px',
                border: '1px solid var(--border-subtle)',
              }}
              role="tablist"
              aria-label="Filter projects by technology"
            >
              {projectCategories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    role="tab"
                    aria-selected={isSelected}
                    style={{
                      padding: '0.45rem 1.15rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: isSelected ? 600 : 500,
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                      background: isSelected
                        ? 'linear-gradient(135deg, var(--accent-primary) 0%, #6366f1 100%)'
                        : 'transparent',
                      boxShadow: isSelected ? '0 4px 14px var(--accent-glow)' : 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search Input Field */}
            <div
              style={{
                position: 'relative',
                minWidth: '260px',
                maxWidth: '340px',
                width: '100%',
              }}
            >
              <Search
                size={18}
                color="var(--text-muted)"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Search by title, tool, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
                style={{
                  width: '100%',
                  padding: '0.65rem 2.2rem 0.65rem 2.5rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Result Count Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              padding: '0 0.25rem',
            }}
          >
            <span>
              Showing <strong>{filteredProjects.length}</strong> of {projectsData.length} total projects
            </span>
            {searchQuery && (
              <span>
                Filtered by "<em>{searchQuery}</em>"
              </span>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.85rem',
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search State */
          <div
            className="glass-card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
              }}
            >
              <Search size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem' }}>No projects found matching criteria</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', fontSize: '0.95rem' }}>
              We couldn't find any projects matching your current filter and search term. Try resetting the search or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '0.5rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
