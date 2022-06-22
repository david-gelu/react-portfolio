import React, { useState } from 'react'
import { dataProjects } from '../data'
import { DataProjects } from '../types'
import { Button } from 'react-bootstrap'
const ProjectsPage = () => {
  const [filtered, setFiltered] = useState(dataProjects)
  const [active, setActive] = useState('all')
  let activeBy = ''
  const filterBy = (key: string) => {
    const filteredData = dataProjects.filter((k) => k.key.includes(key))
    setFiltered(filteredData)
    setActive(key)
  }
  const noFilterBy = () => {
    setFiltered(dataProjects); setActive('all')
  }
  const activeAll = `${active === 'all' ? 'success' : 'outline-success'}`
  const activeJs = `${active === 'js' ? 'success' : 'outline-success'}`
  const activeCss = `${active === 'css' ? 'success' : 'outline-success'}`

  return (
    <main className='projects' id='projects'>
      <h2 className='projects-title'>Projects</h2>
      <div className='filter-btns'>
        <Button variant={activeAll} size='sm' onClick={() => noFilterBy()}>All</Button>
        <Button variant={activeJs} size='sm' onClick={() => filterBy('js')}>JavaScript / React</Button>
        <Button variant={activeCss} size='sm' onClick={() => filterBy('css')}>HTML / CSS / Bootstrap</Button>
      </div>
      <div className='projects__items'>
        {filtered.map((d: DataProjects) => <div key={d.projectLink} className='projects__item'>
          <img width='auto' height='auto' src={d.imgUrl} alt={d.imgDesc} />
          <div className='projects__btns'>
            <a href={d.projectLink} target='_blank' className='projects__btn'>
              <i className='fas fa-eye' aria-hidden='true'></i>
              <span className='d-block'>link</span>
            </a>
            <a href={d.projectGit} target='_blank' className='projects__btn'>
              <i className='fab fa-github' aria-hidden='true'></i>
              <span className='d-block'>git</span>
            </a>
          </div>
          <div>
            {d.teh.map((title: string) => <span key={title} className='teh-title'>{title}</span>)}
          </div>
        </div>
        )}
      </div>
    </main>
  )
}

export default ProjectsPage