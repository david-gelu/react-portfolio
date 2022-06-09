import React from "react"
import { dataJsProjects, dataHtmlCssProjects } from '../data'
import { DataProjects } from "src/types"
const ProjectsPage = () => {
  return (
    <main className="projects" id="projects">
      <div className="projects-image">
        <h2 className="projects-title">Projects</h2>
        <h4 className="projects-title">Projects</h4>
      </div>
      <div className="projects-image">
        <h3 className="projects-title">JavaScript / React</h3>
      </div>
      <div className="projects__items">
        {dataJsProjects.map((d: DataProjects) => <div key={d.projectLink} className="projects__item">
          <img src={d.imgUrl} alt={d.imgDesc} />
          <div className="projects__btns">
            <a href={d.projectLink} target="_blank" className="projects__btn">
              <i className="fas fa-eye" aria-hidden="true"></i>
            </a>
            <a href={d.projectGit} target="_blank" className="projects__btn">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        )}
      </div>
      <div className="projects-image" style={{ marginTop: '1.5em' }}>
        <h3 className="projects-title ">HTML / CSS / Bootstrap</h3>
      </div>
      <div className="projects__items">
        {dataHtmlCssProjects.map((d: DataProjects) => <div key={d.projectLink} className="projects__item">
          <img src={d.imgUrl} alt={d.imgDesc} />
          <div className="projects__btns">
            <a href={d.projectLink} target="_blank" className="projects__btn">
              <i className="fas fa-eye" aria-hidden="true"></i>
            </a>
            <a href={d.projectGit} target="_blank" className="projects__btn">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        )}
      </div>
    </main>
  )
}

export default ProjectsPage