import { AnimatePresence } from "framer-motion"
import React, { Suspense } from "react"
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component"
const TooltipWrap = React.lazy(() => import('./TooltipWrap'))

const HomePage = () => {
  const LazyImage = LazyLoadImage as unknown as React.FC<LazyLoadImageProps>

  return (
    <main className="main accent-background mt-5" id="main">
      <div className="main-name-div p-3" >
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <div className="d-flex max-content mt-2 align-items-center">
            <div className="d-flex align-items-center justify-content-center">
              <div className="logo-arrow">
                <span className="tx-color me-1" >&#60;</span><span className="tx-color">&#47;&#62;</span>
              </div>
              <div className="d-flex flex-column">
                <h1>David Gelu </h1>
                <div className="show-textt">Software Developer</div>
              </div>
            </div>
          </div>
          <div className="tx-color mt-3">
            Skilled in React, TypeScript, and UX/UI collaboration,
            delivering high-quality, cross-browser web applications in Agile environments.
          </div>
          <div className="left contact-data">
            <TooltipWrap desc='Download CV'>
              <a href={"img/DavidGeluCV.pdf"} download="DavidGeluCV.pdf" aria-label='download cv' className='btn-success download-cv'>
                DOWNLOAD CV  <i className="far fa-file-alt p-2 pe-0 w-auto" aria-hidden="true" />
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
          <LazyImage
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