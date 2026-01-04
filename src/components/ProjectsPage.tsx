import { useState, useContext, useEffect } from 'react'
import { ProjectsContext } from '../context/ProjectsContext'
import { DataProjects } from '../types'
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from 'react-bootstrap'

const ProjectsPage = () => {
  const context = useContext(ProjectsContext)
  if (!context) return <div>Error: ProjectsContext is null</div>

  const { dataProjects } = context
  const [filtered, setFiltered] = useState(dataProjects)
  const [active, setActive] = useState('all')

  useEffect(() => setFiltered(dataProjects), [dataProjects])

  const filterBy = (key: string) => {
    setFiltered(dataProjects.filter((k) => k.key.includes(key)))
    setActive(key)
  }

  const isActive = (k: string) => (active === k ? 'success' : 'outline-success')
  const LazyImage = LazyLoadImage as unknown as React.FC<LazyLoadImageProps>

  return (
    <section id="projects" className="projects-modern title-text">
      <h2>Personal Projects</h2>

      <div className="projects-filters">
        <Button size="sm" variant={isActive("all")} onClick={() => { setFiltered(dataProjects); setActive("all") }}>All</Button>
        <Button size="sm" variant={isActive("js")} onClick={() => filterBy("js")}>Ts / React / NextJs</Button>
        <Button size="sm" variant={isActive("css")} onClick={() => filterBy("css")}>HTML / CSS / SCSS</Button>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filtered.map((p: DataProjects) => (
            <motion.div
              key={p.projectLink}
              layout
              className="project-card-modern"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <div className="project-img-wrapper">
                <LazyImage
                  src={p.imgUrl}
                  alt={p.imgDesc}
                  effect="blur"
                  className="project-img"
                />
              </div>

              <div className="project-info">
                <p className="project-title">{p.title}</p>

                <div className="project-tech">
                  {p.teh?.slice(0, 4).map((t: string, i: number) => (
                    <i key={i} className={t} />
                  ))}
                </div>

                <div className="project-buttons">
                  <a className="btn-modern" target="_blank" href={p.projectLink}>
                    <i className="fas fa-link" /> <span>Live</span>
                  </a>
                  <a className="btn-modern" target="_blank" href={p.projectGit}>
                    <i className="fab fa-github" /> <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default ProjectsPage
