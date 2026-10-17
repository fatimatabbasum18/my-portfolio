import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        color: isDark ? '#fbbf24' : '#6d28d9',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
      }}
    >
      {isDark ? (
        <Sun size={20} style={{ transition: 'transform 0.4s ease', transform: 'rotate(0deg)' }} />
      ) : (
        <Moon size={20} style={{ transition: 'transform 0.4s ease', transform: 'rotate(0deg)' }} />
      )}
    </button>
  );
}
