import React, { Suspense } from "react"
import _ from '../../package.json';
const StudyPage = React.lazy(() => import("./StudyPage"))
const WorkPage = React.lazy(() => import("./WorkPage"))

const AboutMePage = () => {
  return (
    <main className="about" id="about"><h2 className="title-text">About me</h2>
      <div className="professional">
        <div>
          <h3 className=" "> Greetings!</h3>
          <h4>
            I am excited to introduce myself as a hardworking and passionate individual with a desire to learn and contribute to the field of web development. My skillset includes expertise in React, JavaScript, TypeScript, HTML, CSS/SASS, Styled-components, Bootstrap, and Git.
            I am always looking for new opportunities to expand my knowledge, improve upon my skills and working together to achieve great results.
          </h4>
          <h3><strong>Technical Skills:</strong></h3>
          <h4> Frontend Development: Html5, Css3, Scss, Bootstrap, Javascript, React, Typescript, Styled Components</h4>
          <h3><strong>Current Learning:</strong></h3>
          <h4>
            &#8226; MongoDB: Actively pursuing knowledge in MongoDB to expand database management skills and enhance backend development capabilities.
          </h4>
          <h4>
            If you're interested in seeing my work, please feel free to visit my GitHub repository at
            <a style={{ marginLeft: '0.2rem', color: 'var(--link-color)', fontWeight: 700 }}
              href='https://github.com/david-gelu?tab=repositories'
              rel='https://github.com/david-gelu?tab=repositories'
            >
              https://github.com/david-gelu?tab=repositories</a>
          </h4>
          <h4>Thank you for your time and consideration. </h4>
        </div>
        <div className="professional-title">
          <h3>Professional Skills</h3>
        </div>
        <div className="json-and-projects fancy-border">

          <div className="d-flex flex-column gap-2 obj-info">
            <span>&#123;</span>
            <div>
              <div><span className='key'>"author"</span> : <span className="property">"{_.author}"</span></div>
              <div><span className='key'>"description"</span> : <span className="property">"Web Developer",</span></div>
              <div><span className='key'>"homepage"</span> : <span className="property">"davidgelu.netlify.com",</span></div>
              <div><span className='key'>"version"</span> : <span className="property">"{_.version}",</span></div>
              <div><span className='key'>"repository"</span> : <span className="ms-2">&#123; </span></div>
              <div><span className="ms-3 key">"type"</span> : <span className="property">"{_.repository.type}",</span></div>
              <div><span className="ms-3 key">"url"</span> : <span className="property">"{_.repository.url}"</span></div>
              <span>&#125;,</span>
            </div>
            <div>
              <span className='key'>"engines"</span> :<span> &#91;</span>
              <span className="property ms-2 ">"html"</span>,
              <span className="ms-2 property">"css"</span>,
              <span className="mx-2 property">"js"</span>
              <span>&#x5d;,</span>
            </div>
            <div>
              <div><span className='key'>"dependencies"</span> : <span className="ms-2">&#123;</span></div>
              <div><span className="ms-3 key">"react"</span> : <span className="property">"{_.dependencies.react}",</span></div>
              <div><span className="ms-3 key">"react-bootstrap"</span> : <span className="property">"{_.dependencies["react-bootstrap"]}",</span></div>
              <div> <span className="ms-3 key">"typescript"</span> : <span className="property">"{_.dependencies.typescript}",</span></div>
              <div><span className="ms-3 key">"bootstrap"</span> : <span className="property">"{_.dependencies.bootstrap}",</span></div>
              <div><span className="ms-3 key">"sass"</span> : <span className="property">"{_.dependencies.sass}",</span></div>
              {/* <div><span className="ms-3 key">"styled-components"</span> : <span className="property">"^5.3.6",</span></div> */}
              <div><span className="ms-3 key">"framer-motion"</span> : <span className="property">"{_.dependencies["framer-motion"]}",</span></div>
              <div><span className="ms-3 key">"react-lazy-load-image-component"</span> : <span className="property">"{_.dependencies["react-lazy-load-image-component"]}",</span></div>
              <div><span className="ms-3 key">"@fortawesome/fontawesome-free"</span> : <span className="property">"^5.15.4",</span></div>
              <div><span className="ms-3"> &#125;, </span></div>
            </div>
            <div>
              <div><span className='key'>"devDependencies"</span> : <span className="ms-2">  &#123;</span></div>
              <div><span className="ms-3 key">"coffee"</span> : <span className="property">"^1.0.0",</span></div>
              <div><span className="ms-3 key">"music"</span> : <span className="property">in headseat,</span></div>
              <div><span className="ms-3 key">"internet"</span> : <span className="property">"500mbps",</span></div>
              <div><span className="ms-3 key">"editor"</span> : <span className="property">"vscode"</span></div>
              <div><span className="ms-3"> &#125;,</span></div>
            </div>
            <span>&#125;</span>
          </div>
          <div className="skills left">
            <ul className="d-flex flex-column">
              <li>
                <span>H</span><span>T</span><span>M</span><span>L</span><span>5</span><span></span><span></span><span></span>
                <span className="max"></span><span className="no-color"></span>
              </li>
              <li>
                <span>C</span><span>S</span><span>S</span><span>3</span><span></span><span></span><span></span><span></span>
                <span className="max"></span><span className="no-color"></span>
              </li>
              <li>
                <span>B</span><span>o</span><span>o</span><span>t</span><span>s</span><span>t</span><span>r</span><span>a</span>
                <span className="max">p</span><span className="no-color"></span>
              </li>
              <li>
                <span>S</span><span>a</span><span>s</span><span>s</span><span>/</span><span>S</span><span>c</span>
                <span >s</span><span className="max">s</span><span className="no-color"></span>
              </li>
              <li>
                <span>J</span><span>a</span><span>v</span><span>a</span><span>S</span><span>c</span>
                <span className="max">r</span><span className="no-color">i</span><span className="no-color">p</span>
                <span className="no-color">t</span>
              </li>
              <li>
                <span>R</span><span>e</span><span>a</span><span>c</span><span>t</span><span>.</span>
                <span className="max">J</span><span className="no-color">s</span>
                <span className="no-color"></span><span className="no-color"></span>
              </li>
              <li>
                <span>T</span><span>y</span><span>p</span><span>e</span><span>S</span>
                <span>c</span><span className="max">r</span><span className="no-color">i</span>
                <span className="no-color">p</span><span className="no-color">t</span>
              </li>
              <li>
                <span>S</span><span>t</span><span>y</span><span>l</span><span>e</span><span className="max">d</span>
                <span className="no-color">C</span><span className="no-color">o</span>
                <span className="no-color">m</span><span className="no-color">p.</span>
              </li>
              <li>
                <span>N</span><span>o</span><span>d</span><span className="max">e</span><span className="no-color">.</span><span className="no-color">J</span>
                <span className="no-color">s</span><span className="no-color"></span>
                <span className="no-color"></span><span className="no-color"></span>
              </li>
              <li>
                <span>M</span><span>o</span><span>n</span><span className="max">g</span><span className="no-color">o</span><span className="no-color">D</span>
                <span className="no-color">B</span><span className="no-color"></span>
                <span className="no-color"></span><span className="no-color"></span>
              </li>
            </ul>
          </div>
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