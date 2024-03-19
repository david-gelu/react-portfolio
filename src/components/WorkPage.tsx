import React, { useContext } from "react"
import { WorkContext } from "../context/WorkContext"
import { Work } from "../types"

const WorkPage = () => {
  const { work } = useContext(WorkContext)

  const workMap = work.map((w: Work) => w.everseen)
  return (
    <div className="title-text jobs" id="jobs">
      <h3>Work</h3>
      <div className="projects-image">
        <h4 className="projects-title ">Web Developer Everseen</h4>
        <div className="left">
          {/* {workMap[0].map((responsability: string, idx: number) => <h4 key={idx}>{responsability}</h4>)} */}
          {/* to do: get from config */}
          <h5>Employed React, TypeScript, SCSS, Bootstrap, and Styled Components within Node.js to create new reusable components and implement innovative functionalities, ensuring cross-browser compatibility.</h5>
          <h5>UI/UX Collaboration: Successfully collaborated with UX/UI designers to translate design concepts into functional and user-friendly interfaces, driving iterative improvements.</h5>
          <h5>Agile Development: Adept in Agile workflows using Jira and Confluence, enabling efficient collaboration and project management within fast-paced environments. Proficient in Gitlab for version control, ensuring code maintainability and streamlined development processes.</h5>
          <h5>Scalable Interface Development: Possesses the expertise to build and enhance scalable interfaces for optimal user experience, catering to diverse user needs and growth demands.</h5>
          <h5>Teamwork: Collaborative and results-oriented, thrives in team settings to achieve high-quality deliverables by leveraging collective expertise.</h5>

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