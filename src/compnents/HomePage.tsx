import React, { Suspense } from "react"
const TooltipWrap = React.lazy(() => import('./TooltipWrap'))

const HomePage = () => {
  return (
    <main className="main" id="main">
      <div className="main-name-div fancy-border">
        <h1><span>I'm</span> David Gelu
          <br />
          <div className="d-flex max-content mt-2 mx-auto">
            <i className="bi bi-chevron-left tx-color">&#60;</i>
            <div className="show-text">Web Developer</div>
            <i className="bi bi-slash-lg tx-color ms-1"></i>
            <i className="bi bi-chevron-right tx-color">&#47; &#62;</i>
          </div>
        </h1>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <div className="left contact-data">
            <TooltipWrap desc='david.gelu90@gmail.com'>
              <a href="mailto:david.gelu90@gmail.com" alt='email' className='d-flex flex-column text-center'>
                <i className="fa fa-envelope" aria-hidden="true" />
                <span className="nav-text text-center" >
                  email
                </span>
              </a>
            </TooltipWrap>
            <TooltipWrap desc='+4 0744 598 995'>
              <a href="tel:+4 0744 598 995" alt='phone number' className='d-flex flex-column text-center'>
                <i className="fa fa-mobile" aria-hidden="true" />
                <span className="nav-text text-center">
                  phone no
                </span>
              </a>
            </TooltipWrap>
            <TooltipWrap desc='https://www.linkedin.com/in/gelu-fanel-david/'>
              <a target={'_blank'} href="https://www.linkedin.com/in/gelu-fanel-david/" alt='linkedin' className='d-flex flex-column text-center'>
                <i className="fab fa-linkedin" aria-hidden="true" />
                <span className="nav-text text-center" >
                  linkedin
                </span>
              </a>
            </TooltipWrap>
            <TooltipWrap desc='Brasov, Romania'>
              <span alt='location' className='d-flex flex-column text-center'>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span className="nav-text text-center" >
                  location
                </span>
              </span>
            </TooltipWrap>
          </div>
        </Suspense>
      </div>
      <div className="d-flex flex-column obj-info">
        <span>&#123;</span>
        <div className="ms-2">
          <div><span className='key'>"author"</span> : <span className="property">"Gelu David",</span></div>
          <div><span className='key'>"description"</span> : <span className="property">"Web Developer",</span></div>
          <div><span className='key'>"homepage"</span> : <span className="property">"davidgelu.netlify.com",</span></div>
          <div><span className='key'>"version"</span> : <span className="property">"2.0.0",</span></div>
          <div><span className='key'>"repository"</span> : <span className="ms-2">&#123; </span></div>
          <div><span className="ms-3 key">"type"</span> : <span className="property">"Public"</span></div>
          <div><span className="ms-3 key">"url"</span> : <span className="property">"github.com/david-gelu"</span></div>
          <span>&#125;,</span>
        </div>
        <div className="ms-2">
          <span className='key'>"engines"</span> :<span> &#91;</span>
          <span className="property ms-2 ">"html"</span>,
          <span className="ms-2 property">"css"</span>,
          <span className="mx-2 property">"js"</span>
          <span>&#x5d;,</span>
        </div>
        <div className="ms-2">
          <div><span className='key'>"dependencies"</span> : <span className="ms-2">&#123;</span></div>
          <div><span className="ms-3 key">"react"</span> : <span className="property">"^17.0.2",</span></div>
          <div><span className="ms-3 key">"react-bootstrap"</span> : <span className="property">"^2.4.0",</span></div>
          <div> <span className="ms-3 key">"typescript"</span> : <span className="property">"^4.5.5",</span></div>
          <div><span className="ms-3 key">"bootstrap"</span> : <span className="property">"^5.2.3",</span></div>
          <div><span className="ms-3 key">"sass"</span> : <span className="property">"^1.49.0",</span></div>
          {/* <div><span className="ms-3 key">"styled-components"</span> : <span className="property">"^5.3.6",</span></div> */}
          <div><span className="ms-3 key">"@fortawesome/fontawesome-free"</span> : <span className="property">"^5.15.4",</span></div>
          <div><span className="ms-3"> &#125;, </span></div>
        </div>
        <div className="ms-2">
          <div><span className='key'>"devDependencies"</span> : <span className="ms-2">  &#123;</span></div>
          <div><span className="ms-3 key">"coffee"</span> : <span className="property">"^1.0.0",</span></div>
          <div><span className="ms-3 key">"music"</span> : <span className="property">in headseat,</span></div>
          <div><span className="ms-3 key">"internet"</span> : <span className="property">"500mbps",</span></div>
          <div><span className="ms-3 key">"editor"</span> : <span className="property">"vscode"</span></div>
          <div><span className="ms-3"> &#125;,</span></div>
        </div>
        <span>&#125;</span>
      </div>
    </main>
  )
}

export default HomePage