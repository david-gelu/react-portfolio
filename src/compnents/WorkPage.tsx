import React from "react"

import { work } from '../data'
import { Work } from "src/types"

const WorkPage = () => {
  const workMap = work.map((w: Work) => w.everseen)
  return (
    <div className="title-text jobs" id="jobs">
      <h2>Work</h2>
      <div className="projects-image">
        <h3 className="projects-title ">Web Developer Everseen</h3>
        <div className="left">
          {workMap[0].map((responsability: string, idx: number) => <h4 key={idx}>{responsability}</h4>)}
        </div>
      </div>
      <br />
      <br />
      <br />
      <h4 className="left">My background in retail has given me valuable experience and taught me:</h4>
      <div className="left">
        <h5> The importance of organizing and planning my work time to increase effectiveness, efficiency, and productivity.</h5>
        <h5> I am a team player and enjoy working collaboratively with others, utilizing my personal skills and competencies to achieve high-quality results.</h5>
        <h5> I am also able to work effectively despite disruptive factors.</h5>
        {/* <h5> I am ready to join a development team and make meaningful contributions to achieve great results.</h5> */}
      </div>
    </div>
  )
}

export default WorkPage