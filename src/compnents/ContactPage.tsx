import React from "react"

const ContactPage = () => {
  return (
    <main className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="d-flex flex-wrap">
        <div className="left mt-5">
          <h3 className="contact-form">
            <i className="fa fa-envelope" aria-hidden="true"></i> Email:<a className="contact-info"
              href="mailto:david.gelu90@gmail.com">
              david.gelu90@gmail.com</a>
          </h3>
          <h3 className="contact-form">
            <i className="fa fa-mobile" aria-hidden="true"></i> Phone : <a className="contact-info" href="tel:+4 0744 598 995">+4 0744
              598 995</a>
          </h3>
          <h3 className="contact-form">
            <a href="https://www.linkedin.com/in/gelu-fanel-david/" target="_blank">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              https://www.linkedin.com/in/gelu-fanel-david/
            </a>
          </h3>
          <h3 className="contact-form">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Adress: <span className="contact-info">Brasov</span>
          </h3>
        </div>
        <img lazy-loading="lazy" width='60%' height='auto' className="footer-img" alt='frontend desktop' src='img/footer-bg.png' />
      </div>
    </main>
  )
}

export default ContactPage