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
  const activeAll = `${active === 'all' ? 'dark-btn' : 'outline-dark-btn'}`
  const activeJs = `${active === 'js' ? 'dark-btn' : 'outline-dark-btn'}`
  const activeCss = `${active === 'css' ? 'dark-btn' : 'outline-dark-btn'}`

  return (
    <main className='title-text' id='projects'>
      <h2>Projects</h2>
      <div className='filter-btns'>
        <Button className={activeAll} size='sm' onClick={() => noFilterBy()}>All</Button>
        <Button className={activeJs} size='sm' onClick={() => filterBy('js')}>JavaScript / React</Button>
        <Button className={activeCss} size='sm' onClick={() => filterBy('css')}>HTML / CSS / Bootstrap</Button>
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
          <div className='teh-title-container'>
            {d.teh.map((title: string) => <span key={title} className='teh-title'>{title}</span>)}
          </div>
        </div>
        )}
      </div>
    </main>
  )
}

export default ProjectsPage