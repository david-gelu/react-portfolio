import React, { Suspense, useCallback, useContext, useMemo, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "react-bootstrap";
import GitHubContributionsCard from "./GitHubContributionsCard";
import { ProjectsContext } from "../context/ProjectsContext";

const StudyPage = React.lazy(() => import("./StudyPage"))
const SoftSkillsPage = React.lazy(() => import("./SoftSkillsPage"))
const WorkPage = React.lazy(() => import("./WorkPage"))
const TooltipWrap = React.lazy(() => import("./TooltipWrap"))

const skills = [
  'Bootstrap', 'HTML', 'CSS', 'Sass', 'Styled components',
  'Shadcn',
  'Tailwind',
  'Styled components',
  'Javascript',
  'ReactJs',
  'React-query',
  'Typescript',
  'Framer Motion',
  'DayJs',
  'Jimp',
  'NodeJs',
  'Express',
  'NextJs',
  'Prisma',
  'NextAuth',
  'Firebase',
  'MongoDB',
  'PostgreSQL',
  'SQLite',
  'REST API design',
  'Git / GitHub / GitLab',
  'Postman',
  'Docker',
  'Agile / Jira / Confluence',
]

const skillKeyMap: Record<string, string> = {
  'HTML': 'HTML 5',
  'CSS': 'CSS 3',
  'Styled components': 'styled',
}

const AboutMePage = () => {
  const [content, setContent] = useState('skills')
  const [skillUsedIn, setSkillUsedIn] = useState('')
  const context = useContext(ProjectsContext)
  if (!context) return <div>Error: ProjectsContext is null</div>
  const { dataProjects } = context

  const updateSkillInfo = useCallback((skillName: string) => {
    const data = dataProjects?.filter((project) => project.tehUsed.includes(skillName)) ?? []

    setSkillUsedIn(data.length > 0 ? data.map((p) => p.title.trim().toLowerCase()).join(', ') : '')
  }, [dataProjects])

  return (
    <section className="section" id="about">
      <div className="header">
        <div className="header-left">
          <span className="eyebrow">// profile</span>
          <h2 className="title">About me</h2>
        </div>
        <div className="header-line" />
      </div>
      <div className="about-grid">
        <div className="about-cell">
          <span className="d-flex gap-2 align-items-center pb-3" style={{ fontSize: '0.85rem', opacity: '0.7' }}><span className="dot" /> IDENTITY</span>
          <div >
            <h3 className="d-flex gap-2 align-items-center">
              Software Developer: 4+ years</h3>
            <h4>
              I specialize in React, Node.js, and TypeScript — clean, scalable architectures and high-performance interfaces.</h4>
            <h3><strong>What I do?</strong></h3>
            <h4> Solving complex problems, optimizing applications, and turning ideas into fast, user-friendly products. I focus on reusable component patterns and optimized rendering.
            </h4>
            <h3><strong>What I'm exploring?</strong></h3>
            <h4>
              Currently expanding backend skills with Node.js, MongoDB, PostgreSQL and Express. Always eager to learn new technologies and best practices in web development.
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
          </div>
        </div>
        <div className="about-cell">
          <span className="d-flex gap-2 align-items-center pb-3" style={{ fontSize: '0.85rem', opacity: '0.7' }}><span className="dot" /> CAPABILITIES</span>
          <div className="d-flex flex-column skills-and-edu-container" style={{ gap: '3em' }}>
            <div className="btns-skills-and-edu">
              <Button onClick={() => setContent('skills')} variant={`${content === 'skills' ? '' : 'outline-'}success`}>Skills</Button>
              <Button onClick={() => setContent('softSkills')} variant={`${content === 'softSkills' ? '' : 'outline-'}success`}>Soft Skills</Button>
              <Button onClick={() => setContent('education')} variant={`${content === 'education' ? '' : 'outline-'}success`}>Education</Button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={content}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {content === 'skills' && (
                  <div className="about-tabs skills-container">
                    {skills.map((skill) => (
                      <TooltipWrap
                        key={skillKeyMap[skill] ?? skill}
                        placement="top"
                        desc={skillUsedIn ? `Used in: ${skillUsedIn}` : 'Not yet implemented in any personal projects.'}
                      >
                        <div
                          className="skill-icon-container"
                          onMouseEnter={() => updateSkillInfo(skill)}
                        >
                          {skill}
                        </div>
                      </TooltipWrap>
                    ))}
                  </div>
                )}

                {content === 'education' && (
                  <Suspense fallback={<div className="loading">Loading...</div>}>
                    <StudyPage />
                  </Suspense>
                )}

                {content === 'softSkills' && (
                  <Suspense fallback={<div className="loading">Loading...</div>}>
                    <SoftSkillsPage />
                  </Suspense>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div >
        <div className="about-cell about-cell-wide">
          <span className="d-flex gap-2 align-items-center pb-3" style={{ fontSize: '0.85rem', opacity: '0.7' }}><span className="dot" /> GITHUB CONTRIBUTIONS</span>
          <GitHubContributionsCard />
        </div>
      </div >

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <WorkPage />
      </Suspense>
    </section >
  )
}

export default AboutMePage