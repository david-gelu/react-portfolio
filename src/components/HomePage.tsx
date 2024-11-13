import { AnimatePresence } from "framer-motion"
import React, { Suspense } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
const TooltipWrap = React.lazy(() => import('./TooltipWrap'))

const HomePage = () => {

  return (
    <main className="main" id="main">
      <div className="main-name-div p-3" >
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <div className="d-flex max-content mt-2 align-items-center">
            <span className="tx-color">&#60; </span>
            <div className="show-text">Web Developer</div>
            <span className="tx-color"> &#47;&#62;</span>
          </div>
          <h1><span>Hello, I'm</span>
            <br />
            David Gelu
          </h1>
          <div className="tx-color">
            Skilled in React, TypeScript, and UX/UI collaboration,
            delivering high-quality, cross-browser web applications in Agile environments.
          </div>
          <div className="left contact-data">
            <TooltipWrap desc='Download CV'>
              <a href={"img/DavidGeluCV.pdf"} download="DavidGeluCV.pdf" aria-label='download cv' className='d-flex align-items-center text-center rounded-pill ps-2'>
                DOWNLOAD CV  <i className="far fa-file-alt px-1" style={{ minWidth: '1rem' }} aria-hidden="true" />
              </a>
            </TooltipWrap>
            <TooltipWrap desc='+4 0744 598 995'>
              <a href="tel:+4 0744 598 995" aria-label='phone number' className='d-flex flex-column text-center'>
                <i className="fa fa-mobile" aria-hidden="true" />
              </a>
            </TooltipWrap>
            <TooltipWrap desc='david.gelu90@gmail.com'>
              <a href="mailto:david.gelu90@gmail.com" aria-label='email' className='d-flex flex-column text-center'>
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
            </TooltipWrap>
            <TooltipWrap desc='https://www.linkedin.com/in/gelu-fanel-david/'>
              <a target={'_blank'} href="https://www.linkedin.com/in/gelu-fanel-david/" aria-label='linkedin' className='d-flex flex-column text-center'>
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
            </TooltipWrap>
            <TooltipWrap desc='Github repo'>
              <a target={'_blank'} href="https://github.com/david-gelu/react-portfolio" aria-label='github repo' className='d-flex flex-column text-center'>
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </TooltipWrap>
          </div>
        </Suspense>
      </div>
      <div className="h-100">
        <AnimatePresence>
          <LazyLoadImage
            useIntersectionObserver={false}
            threshold={0}
            visibleByDefault={true}
            effect="blur"
            className="fancy-border  p-3"
            style={{ backgroundColor: 'var(--bg-color-accent)' }}
            src={'img/logo/code.png'}
            alt={'image with code'} />
        </AnimatePresence>
      </div>
    </main>
  )
}

export default HomePage