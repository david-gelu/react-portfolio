import { Suspense, lazy } from "react"
import TerminalCodeEditorCard from "./TerminalCodeEditorCard"
import { motion } from 'framer-motion';
const TooltipWrap = lazy(() => import('./TooltipWrap'))

const HomePage = () => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="main accent-background mt-5" id="main">
        <div className="main-name-div p-3" >
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <div className="test">
              <div className="">
                <div className="d-flex max-content mt-2 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="logo-arrow">
                      <span className="tx-color me-1" >&#60;</span>DG <span className="tx-color ms-1"> &#47;&#62;</span>
                    </div>
                    <div className="d-flex flex-column">
                      <h1>David Gelu </h1>
                      <h2 className="show-text">Software Developer</h2>
                    </div>
                  </div>
                </div>
                <div className="tx-color mt-3">
                  Full-Stack Developer focused on building fast, scalable, and maintainable web applications.{'\n'}
                  I specialize in React, Node.js, and TypeScript — creating clean architectures and high-performance user interfaces.
                </div>
                <div className="tx-color mt-3">
                  WHAT I DO:
                  <ul className="d-flex flex-column gap-2 mx-auto mt-2 p-3 accent-background" style={{ borderRadius: '8px', maxWidth: '70%' }} >
                    <li>&#8226; Build scalable frontend architectures</li>
                    <li>&#8226; Develop reusable UI components</li>
                    <li>&#8226; Optimize performance and rendering</li>
                    <li>&#8226; Integrate APIs and manage data efficiently</li>
                  </ul>
                </div>
              </div>
              <div className="left contact-data">
                <TooltipWrap desc='Download CV'>
                  <a href={"img/DavidGeluCV.pdf"} download="DavidGeluCV.pdf" aria-label='download cv' className='btn-success download-cv'>
                    DOWNLOAD CV  <i className="far fa-file-alt p-2 pe-0 w-auto" aria-hidden="true" />
                  </a>
                </TooltipWrap>
                <div className="d-flex gap-2">
                  <TooltipWrap desc='+4 0744 598 995'>
                    <a href="tel:+4 0744 598 995" aria-label='phone number' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fa fa-mobile" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                  <TooltipWrap desc='david.gelu90@gmail.com'>
                    <a href="mailto:david.gelu90@gmail.com" aria-label='email' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                  <TooltipWrap desc='https://www.linkedin.com/in/gelu-fanel-david/'>
                    <a target='_blank' href="https://www.linkedin.com/in/gelu-fanel-david/" aria-label='linkedin' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                  <TooltipWrap desc='Github repo'>
                    <a target='_blank' href="https://github.com/david-gelu?tab=repositories" aria-label='github repo' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fab fa-github" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </section>
      <TerminalCodeEditorCard />
    </motion.div>
  )
}

export default HomePage