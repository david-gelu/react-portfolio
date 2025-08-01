import { useState, useContext, useEffect } from 'react'
import { ProjectsContext } from '../context/ProjectsContext'

import { DataProjects } from '../types'
import { Button } from 'react-bootstrap'
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsPage = () => {
  const context = useContext(ProjectsContext)
  if (!context) {
    return <div>Error: ProjectsContext is null</div>
  }
  const { dataProjects } = context

  const [filtered, setFiltered] = useState(dataProjects)
  const [active, setActive] = useState('all')

  useEffect(() => {
    setFiltered(dataProjects)
  }, [dataProjects])

  const filterBy = (key: string) => {
    const filteredData = dataProjects.filter((k: DataProjects) => k.key.includes(key))
    setFiltered(filteredData)
    setActive(key)
  }
  const noFilterBy = () => {
    setFiltered(dataProjects); setActive('all')
  }
  const activeAll = `${active === 'all' ? 'success' : 'outline-success'}`
  const activeJs = `${active === 'js' ? 'success' : 'outline-success'}`
  const activeCss = `${active === 'css' ? 'success' : 'outline-success'}`
  const LazyImage = LazyLoadImage as unknown as React.FC<LazyLoadImageProps>

  return (
    <main className='title-text' id='projects'>
      <h2>Personal projects</h2>
      <div className='filter-btns'>
        <Button variant={`${activeAll} mw-25`} size='sm' onClick={() => noFilterBy()}>All</Button>
        <Button variant={`${activeJs} mw-25`} size='sm' onClick={() => filterBy('js')}>Ts / React / NextJs</Button>
        <Button variant={`${activeCss} mw-25`} size='sm' onClick={() => filterBy('css')}>HTML / CSS / SCSS </Button>
      </div>
      <div className='json-and-projects'>

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
                <p className='teh-title'>{d.title}</p>
                <LazyImage
                  useIntersectionObserver={true}
                  threshold={100}
                  visibleByDefault={false}
                  effect="blur"
                  src={d.imgUrl}
                  alt={d.imgDesc} />

                <div className='teh-actions-container'>
                  <a href={d.projectLink} target='_blank' className='teh-action-btn full-bg'>
                    <i className='fas fa-link' aria-hidden='true'></i>
                    <span> link </span>
                  </a>
                  <a href={d.projectGit} target='_blank' className='teh-action-btn full-bg'>
                    <i className='fab fa-github' aria-hidden='true'></i>
                    <span> github </span>
                  </a>
                  {/* {d?.teh?.map((icon: string, idx: number) => <span key={icon} className={`teh-action-btn tech-used-${idx}`}><i key={icon} className={icon} /> </span>)} */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  )
}

export default ProjectsPage