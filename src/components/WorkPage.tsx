import { useContext } from "react"
import { WorkContext } from "../context/WorkContext"
import { Work } from "../types"
import { IoMdCheckboxOutline } from "react-icons/io";

const WorkPage = () => {
  const work = useContext(WorkContext)

  const workMap = work.map((w: Work) => w.everseen)
  return (
    <div className="section" id="jobs">
      <div aria-hidden="true" />

      <div className="header">
        <div className="header-left">
          <span className="eyebrow">// experience</span>
          <h2 className="title">Work</h2>
        </div>
        <div className="header-line" />

      </div>
      <div className="work-content">
        <div className="d-flex justify-content-between align-items-start">
          <h3 className="d-flex flex-column" style={{ color: 'var(--text-color)' }}>
            <strong>Software Developer </strong>
            <p style={{ color: 'var(--link-color)' }}>Everseen Limited</p>
          </h3>
          <div className="badge-container">
            <span className="dot" />
            <span>09.2020 — present</span>
          </div>

        </div>
        <div className="d-flex gap-1 flex-wrap align-items-center">
          <span className="badge-container">React</span>
          <span className="badge-container">TypeScript</span>
          <span className="badge-container">Node.js</span>
          <span className="badge-container">MongoDB</span>
          <span className="badge-container">Jira</span>
          <span className="badge-container">Confluence</span>
          <span className="badge-container">GitLab</span>
          <span className="badge-container">Agile</span>
        </div>
        <div className="left">

          {workMap[0].map((responsability: string, idx: number) =>
            <h4 className="work-responsability" key={idx}>
              <IoMdCheckboxOutline />
              <span>{responsability}</span>
            </h4>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkPage