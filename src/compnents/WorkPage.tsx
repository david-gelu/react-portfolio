import React from "react"

import { work } from '../data'
import { Work } from "src/types"

const WorkPage = () => {
  const workMap = work.map((w: Work) => w.everseen)
  return (
    <div className="title-text jobs" id="jobs">
      <h2>Work</h2>
      <div className="projects-image">
        <h3 className="projects-title ">Junior web-developer Everseen</h3>
        <div className="left">
          {workMap[0].map((responsability: string, idx: number) => <h4 key={idx}>{responsability}</h4>)}
        </div>
      </div>
      <h4 className="left">My sales experience from 2009 until today has taught me about:</h4>
      <div className="left">
        <h5> Organizing and planning my work time for specific tasks in order to increase effectiveness, efficiency, and
          productivity </h5>
        <h5> Working collaboratively with a group of people using personal skills and competencies</h5>
        <h5> Ability to work regardless of disruptive factors</h5>
      </div>
    </div>
  )
}

export default WorkPage