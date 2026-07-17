import { useState, useContext, useEffect, useRef, forwardRef } from 'react'
import { ProjectsContext } from '../context/ProjectsContext'
import { DataProjects } from '../types'
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from 'react-bootstrap'
import TooltipWrap from './TooltipWrap'

const FILTERS = [
  { label: 'All', key: 'all' },
  { label: 'Ts / React / Nextjs', key: 'js' },
  { label: 'HTML / CSS / SCSS', key: 'css' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
}

const LazyImage = LazyLoadImage as unknown as React.FC<LazyLoadImageProps>

const TechIcon = ({ cls }: { cls: string }) => {
  const iconMap: Record<string, string> = {
    'fab fa-react': 'React',
    'fab fa-js-square': 'TS',
    'fab fa-sass': 'Sass',
    'fab fa-html5': 'HTML',
    'fab fa-css3-alt': 'CSS',
    'fab fa-bootstrap': 'BS',
    'fab fa-node-js': 'Node',
  }
  return (
    <span className="badge-container d-flex align-items-center">
      <i className={cls} />
      <span>{iconMap[cls] ?? ''}</span>
    </span>
  )
}
const ProjectCard = forwardRef<HTMLDivElement, { project: DataProjects; index: number }>(
  ({ project, index }, ref) => {

    // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    //   const card = cardRef.current
    //   if (!card) return
    //   const rect = card.getBoundingClientRect()
    //   const x = ((e.clientX - rect.left) / rect.width) * 100
    //   const y = ((e.clientY - rect.top) / rect.height) * 100
    //   card.style.setProperty('--mx', `${x}%`)
    //   card.style.setProperty('--my', `${y}%`)
    // }

    // const handleMouseLeave = () => {
    //   const card = cardRef.current
    //   if (!card) return
    //   card.style.setProperty('--mx', '50%')
    //   card.style.setProperty('--my', '50%')
    // }

    return (
      <motion.div
        layout
        className="proj-card"
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={index}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      >
        <div className="card-bar" />

        <div className="card-preview">
          <div className="card-num">
            {String(index + 1).padStart(2, '0')}
          </div>
          <LazyImage
            src={project.imgUrl}
            alt={project.imgDesc}
            effect="blur"
            className="card-img"
            wrapperClassName="card-img-wrap"
          />
          <div className="card-overlay" />
        </div>

        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <TooltipWrap desc={project.desc}>
            <p className="card-desc">{project.desc}</p>
          </TooltipWrap>
          <div className="card-tech">
            {project.teh?.slice(0, 4).map((t: string, i: number) => (
              <TechIcon key={i} cls={t} />
            ))}
          </div>

          <div className="card-actions">
            <a
              className="btn-proj btn-live"
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              <span className="btn-dot" />
              <i className="fas fa-link" />
              <span>Live</span>
            </a>
            <a
              className="btn-proj btn-code"
              href={project.projectGit}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
              <span>Code</span>
            </a>
          </div>
        </div>

        <div className="corner corner-tl" />
        <div className="corner corner-br" />
        <div className="card-glow" />
      </motion.div>
    )
  })

const ProjectsPage = () => {
  const context = useContext(ProjectsContext)
  if (!context) return <div>Error: ProjectsContext is null</div>

  const { dataProjects } = context
  const [filtered, setFiltered] = useState(dataProjects)
  const [active, setActive] = useState('all')

  useEffect(() => setFiltered(dataProjects), [dataProjects])

  const handleFilter = (key: string) => {
    setActive(key)
    setFiltered(key === 'all' ? dataProjects : dataProjects.filter(p => p.key === key))
  }

  return (
    <section id="projects" className="section">
      <div aria-hidden="true" />

      <div className="header">
        <div className="header-left">
          <span className="eyebrow">// selected work</span>
          <h2 className="title">Projects</h2>
        </div>
        <div className="header-line" />
        <span className="projects-count">
          {filtered.length} / {dataProjects.length}
        </span>
      </div>

      <div className="projects-filters" role="group" aria-label="Filter projects">
        {FILTERS.map(f => (
          <Button
            key={f.key}
            variant={active === f.key ? 'success' : 'outline-success'}
            onClick={() => handleFilter(f.key)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((p: DataProjects, i: number) => (
            <ProjectCard key={p.projectLink} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default ProjectsPage