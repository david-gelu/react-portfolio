const ContactPage = () => {
  return (
    <main className="contact" id="contact">
      <h2>
        Contact me..
      </h2>
      <div className="left mt-5">
        <h4 className="contact-form">
          <i className="fa fa-envelope" aria-hidden="true"></i> Email:<a className="contact-info"
            href="mailto:david.gelu90@gmail.com">
            david.gelu90@gmail.com</a>
        </h4>
        <h4 className="contact-form">
          <i className="fa fa-mobile" aria-hidden="true"></i> Phone : <a className="contact-info" href="tel:+4 0744 598 995">+4 0744
            598 995</a>
        </h4>
        <h4 className="contact-form">
          <i className="fa fa-map-marker" aria-hidden="true"></i> Adress: <span className="contact-info">Brasov</span>
        </h4>
        <h4 className="contact-form">
          <a href="https://www.facebook.com/david.gf27" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/gelu-fanel-david/" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </h4>
      </div>
    </main>
  )
}

export default ContactPage