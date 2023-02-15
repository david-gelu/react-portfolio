import React, { useState, useContext } from 'react'
import { ProjectsContext } from '../context/ProjectsContext'

import { DataProjects } from '../types'
import { Button } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsPage = () => {
  const { dataProjects } = useContext(ProjectsContext)

  const [filtered, setFiltered] = useState(dataProjects)
  const [active, setActive] = useState('all')

  const filterBy = (key: string) => {
    const filteredData = dataProjects.filter((k: DataProjects) => k.key.includes(key))
    setFiltered(filteredData)
    setActive(key)
  }
  const noFilterBy = () => {
    setFiltered(dataProjects); setActive('all')
  }
  const activeAll = `${active === 'all' ? 'dark-btn' : 'outline-dark-btn'}`
  const activeJs = `${active === 'js' ? 'dark-btn' : 'outline-dark-btn'}`
  const activeCss = `${active === 'css' ? 'dark-btn' : 'outline-dark-btn'}`

  return (
    <main className='title-text' id='projects'>
      <h2>Projects</h2>
      <div className='filter-btns'>
        <Button className={activeAll} size='sm' onClick={() => noFilterBy()}>All</Button>
        <Button className={activeJs} size='sm' onClick={() => filterBy('js')}>Js / Ts / React</Button>
        <Button className={activeCss} size='sm' onClick={() => filterBy('css')}>HTML / CSS </Button>
      </div>
      <motion.div layout className='projects__items'>
        <AnimatePresence>
          {filtered.map((d: DataProjects) =>
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              key={d.projectLink}
              className='projects__item'>
              <LazyLoadImage
                useIntersectionObserver={true}
                threshold={100}
                visibleByDefault={false}
                effect="blur"
                src={d.imgUrl}
                alt={d.imgDesc} />
              <div className='teh-title-container'>
                <a href={d.projectLink} target='_blank' className='teh-title full-bg'>
                  <i className='fas fa-link' aria-hidden='true'></i>
                  <span >
                    link
                  </span>
                </a>
                <a href={d.projectGit} target='_blank' className='teh-title full-bg'>
                  <i className='fab fa-github' aria-hidden='true'></i>
                  <span >
                    github
                  </span>
                </a>
                {d.teh.map((icon: string, idx: number) => <span key={icon} className={`teh-title tech-used-${idx}`}><i key={icon} className={icon} /> </span>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}

export default ProjectsPage