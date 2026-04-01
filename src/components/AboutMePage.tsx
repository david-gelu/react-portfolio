import React, { Suspense, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { SiStyledcomponents, SiShadcnui } from "react-icons/si"
import { FaHtml5, FaCss3, FaGitlab } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { IoLogoSass, IoLogoReact, IoLogoNodejs, IoLogoGithub } from "react-icons/io5";
import { RiNextjsFill, RiBootstrapFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import GitHubContributionsCard from "./GitHubContributionsCard";

const StudyPage = React.lazy(() => import("./StudyPage"))
const SoftSkillsPage = React.lazy(() => import("./SoftSkillsPage"))
const WorkPage = React.lazy(() => import("./WorkPage"))
const TooltipWrap = React.lazy(() => import("./TooltipWrap"))

const AboutMePage = () => {
  const [content, setContent] = useState('skills')
  return (
    <section className="about title-text" id="about">
      <h2 >About me</h2>
      <div className="professional">
        <div >
          <h3 className=" "> Greetings!</h3>
          <h4>
            I'm a Full-Stack Developer with 4+ years of experience building modern web applications.</h4>
          <h3><strong>What I do?</strong></h3>
          <h4> <ul>
            <li>&#8226; I specialize in React, Node.js, and TypeScript, focusing on clean, scalable architectures and high-performance interfaces.</li>
            <li>&#8226; I enjoy solving complex problems, optimizing applications, and turning ideas into fast, user-friendly products.
            </li>
          </ul>
          </h4>
          <h3><strong>What I'm exploring?</strong></h3>
          <h4>
            &#8226; Currently, I'm expanding my backend skills with Node.js, MongoDB, and Express.
          </h4>
          <h4>
            Want to see my work? Head over to
            <a style={{ marginInline: '0.5rem', color: 'var(--link-color)', fontWeight: 700 }}
              href='https://github.com/david-gelu?tab=repositories'
              rel='https://github.com/david-gelu?tab=repositories'
              target="_blank"
            > my GitHub</a>
            — there's plenty of projects that showcase what I'm capable of. Contact me up if you want to chat about code, opportunities, or just tech in general!
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
            <Button onClick={() => setContent('softSkills')} variant={`${content === 'softSkills' ? '' : 'outline-'}success`}>Soft Skills</Button>
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
                  <TooltipWrap placement="top" key='JavaScript' desc={'JavaScript'}><div className="skill-icon-container"><BiLogoJavascript /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='TypeScript' desc={'TypeScript'}><div className="skill-icon-container"><BiLogoTypescript /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='ReactJs' desc={'ReactJs'}><div className="skill-icon-container"> <IoLogoReact /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='NodeJs' desc={'NodeJs'}><div className="skill-icon-container"> <IoLogoNodejs /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='MongoDb' desc={'MongoDb'}><div className="skill-icon-container"><BiLogoMongodb /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='GitHub' desc={'GitHub'}><div className="skill-icon-container"><IoLogoGithub /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='Gitlab' desc={'Gitlab'}><div className="skill-icon-container"><FaGitlab /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='Shadcn' desc={'Shadcn'}><div className="skill-icon-container"><SiShadcnui /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='Sass' desc={'Sass'}><div className="skill-icon-container"><IoLogoSass /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='Bootstrap' desc={'Bootstrap'}><div className="skill-icon-container"><RiBootstrapFill /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='HTML 5' desc={'HTML 5'}><div className="skill-icon-container"><FaHtml5 /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='CSS 3' desc={'CSS 3'}><div className="skill-icon-container"><FaCss3 /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='styled' desc={'Styled components'}><div className="skill-icon-container"><SiStyledcomponents /></div></TooltipWrap>
                  <TooltipWrap placement="top" key='NextJs' desc={'NextJs'}><div className="skill-icon-container"><RiNextjsFill /></div></TooltipWrap>
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
            {content === 'softSkills' &&
              <AnimatePresence>
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  className="study title-text">
                  <Suspense fallback={<div className="loading">Loading...</div>}>
                    <SoftSkillsPage />
                  </Suspense>
                </motion.div>
              </AnimatePresence>}
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <WorkPage />
      </Suspense>
    </section >
  )
}

export default AboutMePage