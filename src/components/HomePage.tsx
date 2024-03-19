import React, { Suspense } from "react"
const TooltipWrap = React.lazy(() => import('./TooltipWrap'))

const HomePage = () => {
  return (
    <main className="main" id="main">
      <div className="main-name-div fancy-border p-3">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <h1><span>I'm</span> David Gelu
            <br />
            <div className="d-flex max-content mt-2 mx-auto align-items-center">
              <span className="tx-color">&#60; </span>
              <div className="show-text">Web Developer</div>
              <span className="tx-color"> &#47;&#62;</span>
            </div>
          </h1>

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
    </main>
  )
}

export default HomePage