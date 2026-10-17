import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  AlertCircle,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'tabbasumnaz309@gmail.com';
  const githubUrl = 'https://github.com/fatimatabbasum18';
  const linkedinUrl = 'https://www.linkedin.com/in/fatima-tabbasum-300937390/';

  // Copy email with clipboard API + fallback
  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        // Fallback for older browsers
        const tempInput = document.createElement('textarea');
        tempInput.value = emailAddress;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      setCopiedEmail(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch (err) {
      // If clipboard failed, open mail client
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please provide your name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) return 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return 'Please write a message of at least 10 characters.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ submitting: false, success: false, error: validationError });
      return;
    }

    setFormStatus({ submitting: true, success: false, error: null });

    // Check environment variables for EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Fatima Tabbasum',
          },
          publicKey
        );

        setFormStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.7 },
        });
        return;
      } catch (err) {
        console.error('EmailJS Error:', err);
        // Fall back to mailto if EmailJS service failed
      }
    }

    // Graceful fallback to direct mailto if EmailJS is not configured or failed
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hi Fatima,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    );

    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus({
      submitting: false,
      success: true,
      error: 'Opened your email client with your message pre-filled. If it did not open, you can send an email directly to tabbasumnaz309@gmail.com.',
    });
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} />
            <span>Let's Connect</span>
          </span>
          <h2 className="section-title">Get In Touch With Fatima</h2>
          <p className="section-subtitle">
            Whether you are a recruiter with an internship opportunity, a teacher, a fellow developer, or looking to collaborate on a frontend project—my inbox is always open!
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Column 1: Contact Information Cards & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      wordBreak: 'break-all',
                    }}
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                aria-label="Copy email address"
                style={{ gap: '0.4rem' }}
              >
                {copiedEmail ? <Check size={16} color="#22c55e" /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub Profile Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Github size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                    GitHub Profile
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    @fatimatabbasum18
                  </div>
                </div>
              </div>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="Visit Fatima's GitHub profile"
                style={{ gap: '0.4rem' }}
              >
                <span>Visit Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* LinkedIn Profile Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0a66c2',
                  }}
                >
                  <Linkedin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                    LinkedIn Network
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Fatima Tabbasum
                  </div>
                </div>
              </div>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="Connect on LinkedIn"
                style={{ gap: '0.4rem' }}
              >
                <span>Connect</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Location Pill */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
                background: 'var(--bg-glass-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}
            >
              <MapPin size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <span>
                Based in <strong>Karachi, Pakistan</strong> • Available for on-site & remote roles
              </span>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.5rem' }}>
              Fill out the form below and I will respond to your inquiry as soon as possible.
            </p>

            {formStatus.success ? (
              <div
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Thank You!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {formStatus.error ||
                    'Your message has been sent successfully. I will get back to you shortly!'}
                </p>
                <button
                  onClick={() => setFormStatus({ submitting: false, success: false, error: null })}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {formStatus.error && (
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#f87171',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{formStatus.error}</span>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'var(--bg-glass-input)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sarah@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'var(--bg-glass-input)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Frontend Internship Opportunity"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'var(--bg-glass-input)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'var(--bg-glass-input)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    marginTop: '0.5rem',
                  }}
                >
                  {formStatus.submitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }
      `}</style>
    </section>
  );
}
