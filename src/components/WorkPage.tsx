import React, { useContext } from "react"
import { WorkContext } from "../context/WorkContext"
import { Work } from "../types"

const WorkPage = () => {
  const { work } = useContext(WorkContext)

  const workMap = work.map((w: Work) => w.everseen)
  return (
    <div className="title-text jobs" id="jobs">
      <h2 className='title-text'>Work</h2>
      <div className="projects-image">
        <h4 className="projects-title ">Web Developer Everseen</h4>
        <div className="left">
          {workMap[0].map((responsability: string, idx: number) => <h5 key={idx}>{responsability}</h5>)}
        </div>
      </div>
    </div>
  )
}

export default WorkPage