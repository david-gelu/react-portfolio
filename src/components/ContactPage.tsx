import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProgressBar from 'react-bootstrap/ProgressBar'
import emailjs from '@emailjs/browser'

function ContactPage() {
  const [messageLength, setMessageLength] = useState(0)
  const maxLength = 500

  const sendEmail = (e: any) => {
    e.preventDefault()
    emailjs.sendForm('service_8dkv0jh', 'template_t2tba9l', e.target, 'u0Jo1bqtqbl6bWq10')
      .then(
        res => {
          setMessageLength(0)
            ; (e.target as HTMLFormElement).reset()
        },
        error => console.error(error.text)
      )
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length)
  }

  const progressPercentage = (messageLength / maxLength) * 100

  const getProgressVariant = () => {
    if (progressPercentage < 50) return 'success'
    if (progressPercentage < 80) return 'warning'
    return 'danger'
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">

        {/* Header — same as CV mockup */}
        <div className="contact-header">
          <div className="contact-header__eyebrow">GET IN TOUCH</div>
          <h2 className="contact-header__title">Interested in working together?</h2>
          <p className="contact-header__summary">
            My inbox is always open.
          </p>
          <div className="contact-header__meta">
            <span className="meta-item"><span className="meta-dot" />Brașov, Romania</span>
            <span className="meta-item"><span className="meta-dot" />david.gelu90@gmail.com</span>
            <span className="meta-item"><span className="meta-dot" />+40 744 598 995</span>
          </div>
        </div>

        {/* Body — 2 columns like CV mockup */}
        <div className="contact-body">

          {/* Sidebar */}
          <aside className="contact-sidebar">
            <div className="sidebar-section">
              <div className="sidebar-section__title">Direct links</div>
              <a href="mailto:david.gelu90@gmail.com" className="sidebar-link">
                <i className="fa fa-envelope" aria-hidden="true" />
                david.gelu90@gmail.com
              </a>
              <a href="tel:+40744598995" className="sidebar-link">
                <i className="fa fa-mobile" aria-hidden="true" />
                +40 744 598 995
              </a>
              <a href="https://linkedin.com/in/gelu-fanel-david" target="_blank" rel="noreferrer" className="sidebar-link">
                <i className="fa fa-linkedin" aria-hidden="true" />
                LinkedIn
              </a>
              <a href="https://github.com/david-gelu" target="_blank" rel="noreferrer" className="sidebar-link">
                <i className="fa fa-github" aria-hidden="true" />
                GitHub
              </a>
              <a href="https://davidgelu.netlify.app" target="_blank" rel="noreferrer" className="sidebar-link">
                <i className="fa fa-globe" aria-hidden="true" />
                Portfolio
              </a>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-section__title">Availability</div>
              <div className="availability-badge">
                <span className="availability-dot" />
                Open to opportunities
              </div>
              <p className="availability-note">
                Full-time projects. Remote or Brașov-based.
              </p>
            </div>
          </aside>

          {/* Main — form */}
          <main className="contact-main">
            <div className="form-section-title">Send a message</div>
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="field-group">
                <label htmlFor="emailFrom">Email</label>
                <input
                  pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
                  maxLength={64}
                  required
                  type="email"
                  name="email_from"
                  id="emailFrom"
                  placeholder="person@example.com"
                />
              </div>

              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  required
                  placeholder="Enter your message here…"
                  name="message"
                  maxLength={maxLength}
                  rows={6}
                  id="message"
                  onChange={handleMessageChange}
                />
                <div className="char-track">
                  <div
                    className={`char-bar char-bar--${getProgressVariant()}`}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div
                  className={`char-count ${messageLength >= maxLength ? 'char-count--danger' : ''}`}
                >
                  {messageLength} / {maxLength}
                </div>
              </div>

              <motion.button
                className="submit-btn"
                whileTap={{ scale: 0.94 }}
                type="submit"
              >
                Send message
              </motion.button>
            </form>
          </main>
        </div>

        {/* Footer note — same as ATS note bar */}
        <div className="contact-note">
          <div className="note-item"><span className="note-check">✓</span>Usually replies within 24h</div>
          <div className="note-item"><span className="note-check">✓</span>Open to remote work</div>
          <div className="note-item"><span className="note-check">✓</span>React / TypeScript / Node.js</div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage