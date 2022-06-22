import React from "react"

const HomePage = () => {
  return (
    <main className="main" id="main">
      <div className="main-name-div">
        <h1><span>I'm</span> Gelu</h1>
        <br />
        <h2 className="d-flex fsize-minus">
          <i className="bi bi-chevron-left tx-color"></i>
          <div className="show-text">WebDeveloper</div>
          <i className="bi bi-slash-lg tx-color ms-1"></i>
          <i className="bi bi-chevron-right tx-color"></i>
        </h2>
      </div>
      <div className="d-flex flex-column obj-info">
        <span>&#123;</span>
        <div>
          <div><span className='key'>"author"</span> : <span className="property">"Gelu David",</span></div>
          <div><span className='key'>"description"</span> : <span className="property">"Web Developer",</span></div>
          <div><span className='key'>"homepage"</span> : <span className="property">"davidgelu.netlify.com",</span></div>
          <div><span className='key'>"version"</span> : <span className="property">"2.0.0",</span></div>
          <div><span className='key'>"repository"</span> : <span className="">  &#123; </span></div>
          <div><span className="ms-3 key">"type"</span> : <span className="property">"Public"</span></div>
          <div><span className="ms-3 key">"url"</span> : <span className="property">"github.com/david-gelu"</span></div>
        </div>
        <span className="ms-3">&#125;,</span>
        <div>
          <span className='key'>"engines"</span> :<span> &#91;</span>
          <span className="property">"html"</span>,
          <span className="ms-2 property">"css"</span>,
          <span className="ms-2 property"> "js"</span>
          <span>&#x5d;,</span>
        </div>
        <div>
          <div><span className='key'>"dependencies"</span> : <span className="">  &#123;</span></div>
          <div><span className="ms-3 key">"react"</span> : <span className="property"> "^17.0.2",</span></div>
          <div><span className="ms-3 key">"react-bootstrap"</span> : <span className="property"> "^2.4.0",</span></div>
          <div> <span className="ms-3 key">"typescript"</span> : <span className="property"> "^4.5.5",</span></div>
          <div><span className="ms-3 key">"bootstrap"</span> : <span className="property"> "^5.1.3",</span></div>
          <div><span className="ms-3 key">"sass"</span> : <span className="property"> "^1.49.0",</span></div>
          <div><span className="ms-3 key">"@fortawesome/fontawesome-free"</span> : <span className="property"> "^5.15.4",</span></div>
          <div><span className="ms-3"> &#125;, </span></div>
        </div>
        <span> &#125;,</span>
        <div>
          <div><span className='key'>"devDependencies"</span> : <span className="">  &#123;</span></div>
          <div><span className="ms-3 key">"coffee"</span> : <span className="property">"^1.0.0",</span></div>
          <div><span className="ms-3 key">"music"</span> : <span className="property">in headseat,</span></div>
          <div><span className="ms-3 key">"internet"</span> : <span className="property">"500mbps",</span></div>
          <div><span className="ms-3 key">"editor"</span> : <span className="property">"vscode"</span></div>
          <div><span className="ms-3"> &#125;,</span></div>
        </div>
        <span> &#125;,</span>
      </div>
    </main>
  )
}

export default HomePage