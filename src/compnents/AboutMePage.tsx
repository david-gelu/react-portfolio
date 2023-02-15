import React, { Suspense } from "react"
const StudyPage = React.lazy(() => import("./StudyPage"))
const WorkPage = React.lazy(() => import("./WorkPage"))

const AboutMePage = () => {
  return (
    <main className="about" id="about"><h2 className="title-text">About me</h2>
      <div className="professional fancy-border">
        <h3 className="bio-desc ">
          <p>
            &emsp;&emsp; Greetings!
            <br />
            <br />
            &emsp;&emsp; I am excited to introduce myself as a hardworking and passionate individual with a desire to learn and contribute to the field of web development.
            My skillset includes expertise in React, JavaScript, TypeScript, HTML, CSS/SASS, Styled-components, Bootstrap, and Git.
            I am always looking for new opportunities to expand my knowledge and improve upon my skills.
            If you're interested in seeing my work, please feel free to visit my GitHub repository at
            <a style={{ color: 'var(--nav-color)', fontWeight: 700 }}
              href='https://github.com/david-gelu?tab=repositories'
              alt='https://github.com/david-gelu?tab=repositories'
            >
              https://github.com/david-gelu?tab=repositories</a>
            <br />
            I am always open to learning from others and working together to achieve great results.
            <br />
            <br />
            Thank you for your time and consideration.
          </p>
        </h3>
        <div className="skills left">
          <div className="professional-title left">
            <h3>Professional Skills</h3>
          </div>
          <ul className="d-flex flex-column">
            <li>
              <span>H</span><span>T</span><span>M</span><span>L</span><span>5</span><span></span><span></span><span></span><span
                className="max"></span><span className="no-color"></span>
            </li>
            <li>
              <span>C</span><span>S</span><span>S</span><span>3</span><span></span><span></span><span></span><span></span><span
                className="max"></span><span className="no-color"></span>
            </li>
            <li>
              <span>B</span><span>o</span><span>o</span><span>t</span><span>s</span><span>t</span><span>r</span><span>a</span><span
                className="max">p</span><span className="no-color"></span>
            </li>
            <li> <span>J</span><span>a</span><span>v</span><span>a</span><span>S</span><span className="max">c</span><span
              className="no-color">r</span><span className="no-color">i</span><span className="no-color">p</span><span
                className="no-color">t</span></li>
            <li> <span>S</span><span>a</span><span>s</span><span>s</span><span>/</span><span className="max">S</span><span
              className="no-color">c</span><span className="no-color">s</span><span className="no-color">s</span><span
                className="no-color"></span></li>
            <li> <span>S</span><span>t</span><span>y</span><span>l</span><span>e</span><span className="max"
            >d</span><span className="no-color">C</span><span className="no-color">o</span><span
              className="no-color">m</span><span className="no-color">p.</span>
            </li>
            <li> <span>R</span><span>e</span><span>a</span><span>c</span><span className="max">t</span><span
              className="no-color">.</span><span className="no-color">J</span><span className="no-color">s</span><span
                className="no-color"></span><span className="no-color"></span>
            </li>
            <li> <span>T</span><span>y</span><span>p</span><span>e</span><span className="max">S</span><span
              className="no-color">c</span><span className="no-color">r</span><span className="no-color">i</span><span
                className="no-color">p</span><span className="no-color">t</span>
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