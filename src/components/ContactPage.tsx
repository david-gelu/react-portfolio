import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "react-bootstrap"
import emailjs from '@emailjs/browser'

function ContactPage() {
  const sendEmail = (e: any) => {
    e.preventDefault()
    console.log(`e:`, e)
    emailjs.sendForm('service_8dkv0jh', 'template_t2tba9l', e.target, 'u0Jo1bqtqbl6bWq10')
      .then(
        res => console.log(res.text, res.status),
        error => console.error(error.text)
      )
  }

  return (
    <main className='title-text pb-5' id='contact' style={{ minHeight: '100dvh' }}>
      <h2 >Contact me</h2>
      <div className='contact mt-5'>
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="emailFrom">Email:</label>
          <input pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}" maxLength={64} required type="email" name="email_from" id="emailFrom" className="w-100" placeholder="person@example.com" />
          <label htmlFor="message">Message:</label>
          <textarea required placeholder='Enter your message here, maxim 500 characters' name="message" maxLength={500} rows={5} id="message" className="w-100"></textarea>
          <motion.button className='btn btn-success' whileTap={{ scale: 0.85 }} type="submit">Send message</motion.button>
        </form>
        <div className='d-flex flex-column justify-content-center align-items-start gap-5 p-3 mb-5'>
          <div className='d-flex align-items-center gap-3'>
            <i className="icon-border fa fa-envelope" aria-hidden="true" />
            <a href="mailto:david.gelu90@gmail.com" aria-label='email' className='d-flex flex-column align-items-start text-start gap-0'>
              <span style={{ color: 'var(--text-color)', fontSize: '0.75rem' }}>Email: </span>david.gelu90@gmail.com
            </a>
          </div>
          <div className='d-flex align-items-center gap-3'>
            <i className="icon-border fa fa-mobile" aria-hidden="true" />
            <a href="tel:+4 0744 598 995" aria-label='phone number' className='d-flex  flex-column align-items-start text-start gap-0'>
              <span style={{ color: 'var(--text-color)', fontSize: '0.75rem' }}>Phone: </span> +4 0744 598 995
            </a>
          </div>
          <div className='d-flex align-items-center gap-3'>
            <i className="icon-border fa fa-map-marker" aria-hidden="true" />
            <a aria-label='location' className='d-flex  flex-column align-items-start text-start gap-0'>
              <span style={{ color: 'var(--text-color)', fontSize: '0.75rem' }}>Location: </span>Brasov
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage