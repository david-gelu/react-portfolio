import React, { Suspense, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { SiStyledcomponents } from "react-icons/si"
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { IoLogoSass, IoLogoReact, IoLogoNodejs, IoLogoGithub } from "react-icons/io5";
import { RiNextjsFill, RiBootstrapFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import GitHubContributionsCard from "./GitHubContributionsCard";

const StudyPage = React.lazy(() => import("./StudyPage"))
const WorkPage = React.lazy(() => import("./WorkPage"))
const TooltipWrap = React.lazy(() => import("./TooltipWrap"))

const AboutMePage = () => {
  const [content, setContent] = useState('skills')
  return (
    <main className="about title-text" id="about">
      <h2 >About me</h2>
      <div className="professional">
        <div >
          <h3 className=" "> Greetings!</h3>
          <h4>
            I'm a passionate web developer who loves building beautiful and functional user interfaces. I'm always eager to learn new technologies and collaborate with talented people to create exceptional digital experiences.
          </h4>
          <h3><strong>What I do?</strong></h3>
          <h4> &#8226;
            I'm a full-stack developer with strong expertise in frontend technologies like React, TypeScript, and modern CSS (SCSS, Styled Components). I'm comfortable working with HTML5, JavaScript, Bootstrap, TailWind and everything in between. On the backend, I work with Node.js, Express, and MongoDB to build complete applications. My focus is on writing clean, maintainable code that actually works — from database to UI.</h4>
          <h3><strong>What I'm exploring?</strong></h3>
          <h4>
            &#8226; Backend Development: Actively learning MongoDB, Next.js, Node.js, and Express to enhance my backend development capabilities and improve my full-stack expertise.</h4>
          <h4>
            Want to see my work?
            Head over to
            <a style={{ marginLeft: '0.2rem', color: 'var(--link-color)', fontWeight: 700 }}
              href='https://github.com/david-gelu?tab=repositories'
              rel='https://github.com/david-gelu?tab=repositories'
              target="_blank"
            >my GitHub</a>
            — there's plenty of projects that showcase what I'm capable of. Hit me up if you want to chat about code, opportunities, or just tech in general!
          </h4>
          <h4>Thank you for your time and consideration.</h4>
        </div>
      </div>
      <div>
        <GitHubContributionsCard />
      </div>
      <div className="professional-title">
        <div className="d-flex skills-and-edu-container mt-5" style={{ gap: '3em' }}>
          <div className="btns-skills-and-edu">
            <Button onClick={() => setContent('skills')} variant={`${content === 'skills' ? '' : 'outline-'}success`}>Skills</Button>
            <Button onClick={() => setContent('education')} variant={`${content === 'education' ? '' : 'outline-'}success`}>Education</Button>
          </div>
          <div className="w-100">
            {content === 'skills' &&
              <AnimatePresence>
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="about-tabs skills-container">
                  <TooltipWrap placement="top" key='HTML 5' desc={'HTML 5'}><div className="skill-icon-container"><FaHtml5 /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='CSS 3' desc={'CSS 3'}><div className="skill-icon-container"><FaCss3 /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='Sass' desc={'Sass'}><div className="skill-icon-container"><IoLogoSass /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='Bootstrap' desc={'Bootstrap'}><div className="skill-icon-container"><RiBootstrapFill /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='styled' desc={'Styled components'}><div className="skill-icon-container"><SiStyledcomponents /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='JavaScript' desc={'JavaScript'}><div className="skill-icon-container"><BiLogoJavascript /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='TypeScript' desc={'TypeScript'}><div className="skill-icon-container"><BiLogoTypescript /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='ReactJs' desc={'ReactJs'}><div className="skill-icon-container"> <IoLogoReact /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='NextJs' desc={'NextJs'}><div className="skill-icon-container"><RiNextjsFill /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='NodeJs' desc={'NodeJs'}><div className="skill-icon-container"> <IoLogoNodejs /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='MongoDb' desc={'MongoDb'}><div className="skill-icon-container"><BiLogoMongodb /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='GitHub' desc={'GitHub'}><div className="skill-icon-container"><IoLogoGithub /></div></TooltipWrap>
                </motion.div>
              </AnimatePresence>}
            {content === 'education' &&
              <AnimatePresence>
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  className="study title-text">
                  <Suspense fallback={<div className="loading">Loading...</div>}>
                    <StudyPage />
                  </Suspense>
                </motion.div>
              </AnimatePresence>}
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <WorkPage />
      </Suspense>
    </main >
  )
}

export default AboutMePage