import React, { Suspense } from "react"
const StudyPage = React.lazy(() => import("./StudyPage"))
const WorkPage = React.lazy(() => import("./WorkPage"))

const AboutMePage = () => {
  return (
    <main className="about" id="about"><h2 className="title-text">About me</h2>
      <div className="professional ">
        <h3 className="bio-desc ">
          <span>Task-driven, hard worker and very passionate about all the new things I can discover.
            Having a high desire to contribute and work among people from whom I can learn, helps me to gain more skills,
            improve and build the foundation of my career.
          </span>
        </h3>
        <div className="skills left">
          <div className="professional-title left">
            <h3>Professional Skills</h3>
          </div>
          <ul className="d-flex flex-column">
            <li>
              <span>H</span><span>T</span><span>M</span><span>L</span><span>5</span><span></span><span></span><span></span><span
                className="max"></span><span className="no-color"></span> <i className="fab fa-html5" aria-hidden="true"> </i>
            </li>
            <li>
              <span>C</span><span>S</span><span>S</span><span>3</span><span></span><span></span><span></span><span></span><span
                className="max"></span><span className="no-color"></span> <i className="fab fa-css3-alt" aria-hidden="true"> </i>
            </li>
            <li>
              <span>B</span><span>o</span><span>o</span><span>t</span><span>s</span><span>t</span><span>r</span><span>a</span><span
                className="max">p</span><span className="no-color"></span><i className="fab fa-bootstrap" aria-hidden="true"> </i>
            </li>
            <li> <span>J</span><span>a</span><span>v</span><span>a</span><span>S</span><span className="max">c</span><span
              className="no-color">r</span><span className="no-color">i</span><span className="no-color">p</span><span
                className="no-color">t</span> <i className="fab fa-js-square" aria-hidden="true"> </i></li>
            <li> <span>S</span><span>a</span><span>s</span><span>s</span><span>/</span><span className="max">S</span><span
              className="no-color">c</span><span className="no-color">s</span><span className="no-color">s</span><span
                className="no-color"></span> <i className="fab fa-sass" aria-hidden="true"> </i></li>
            <li> <span>R</span><span>e</span><span>a</span><span>c</span><span className="max">t</span><span
              className="no-color">.</span><span className="no-color">J</span><span className="no-color">s</span><span
                className="no-color"></span><span className="no-color"></span> <i className="fab fa-react" aria-hidden="true"> </i>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <WorkPage />
      </Suspense>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <StudyPage />
      </Suspense>

    </main>
  )
}

export default AboutMePage