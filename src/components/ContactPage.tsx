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
    <section className='main title-text pb-5' id='contact' style={{ minHeight: '100dvh' }}>
      <h2>Contact me</h2>
      <div className='contact mt-5'>
        <form className="contact-form accent-background" onSubmit={sendEmail}>
          <label htmlFor="emailFrom">Email:</label>
          <input
            pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
            maxLength={64}
            required
            type="email"
            name="email_from"
            id="emailFrom"
            className="w-100"
            placeholder="person@example.com"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            required
            placeholder='Enter your message here, maxim 500 characters'
            name="message"
            maxLength={maxLength}
            rows={5}
            id="message"
            className="w-100"
            onChange={handleMessageChange}
          ></textarea>

          <div className='mt-2 w-100'>
            <ProgressBar
              now={progressPercentage}
              variant={getProgressVariant()}
              animated
              style={{ height: '8px' }}
            />   <div style={{
              fontSize: '0.875rem',
              color: messageLength >= maxLength ? 'var(--danger, #dc3545)' : 'var(--text-color)',
              textAlign: 'left'
            }}>
              {messageLength} / {maxLength} characters
            </div>
          </div>



          <motion.button className='btn btn-success' whileTap={{ scale: 0.85 }} type="submit">
            Send message
          </motion.button>
        </form>
        <div className='accent-background d-flex flex-column justify-content-center align-items-start gap-5 p-3 mb-5'>
          <div className='d-flex align-items-center gap-3'>
            <i className="icon-border fa fa-envelope" aria-hidden="true" />
            <a href="mailto:david.gelu90@gmail.com" aria-label='email' className='d-flex flex-column align-items-start text-start gap-0'>
              <span style={{ color: 'var(--text-color)', fontSize: '0.75rem' }}>Email: </span>
              david.gelu90@gmail.com
            </a>
          </div>
          <div className='d-flex align-items-center gap-3'>
            <i className="icon-border fa fa-mobile" aria-hidden="true" />
            <a href="tel:+4 0744 598 995" aria-label='phone number' className='d-flex flex-column align-items-start text-start gap-0'>
              <span style={{ color: 'var(--text-color)', fontSize: '0.75rem' }}>Phone: </span>
              +4 0744 598 995
            </a>
          </div>
          <div className='d-flex align-items-center gap-3'>
            <i className="icon-border fa fa-map-marker" aria-hidden="true" />
            <span style={{ color: 'var(--link-color)' }} aria-label='location' className='d-flex flex-column align-items-start text-start gap-0'>
              <span style={{ color: 'var(--text-color)', fontSize: '0.75rem' }}>Location: </span>
              Brasov
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage