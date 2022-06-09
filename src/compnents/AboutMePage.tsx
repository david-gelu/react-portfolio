import React from "react"
import StudyPage from "./StudyPage"
import WorkPage from "./WorkPage"

const AboutMePage = () => {
  return (
    <main className="about" id="about">
      <div className="professional ">
        <div className="bio">
          <h2 className="about-me">About me</h2>
          <h4 className="bio-desc ">
            <span>Task-driven, hard worker and very passionate about all the new things I can discover.
              Having a high desire to contribute and work among people from whom I can learn, helps me to gain more skills,
              improve and build the foundation of my career.
            </span>
          </h4>
        </div>
        <div className="professional-title left">
          <h3>Professional Skills</h3>
        </div>
        <div className="skills left">
          <ul>
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
      <WorkPage />
      <StudyPage />
    </main>
  )
}

export default AboutMePage