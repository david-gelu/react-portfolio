
import React, { Suspense, useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.scss";
import { Button } from "react-bootstrap";
const HomePage = React.lazy(() => import('./compnents/HomePage'));
const NavBar = React.lazy(() => import('./compnents/NavBar'));
const ProjectsPage = React.lazy(() => import('./compnents/ProjectsPage'));
const AboutMePage = React.lazy(() => import('./compnents/AboutMePage'));

const App = () => {
  let beforeInstallPrompt
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", eventHandler, errorHandler)
  }, [])

  const eventHandler = (event) => {
    beforeInstallPrompt = event
  }

  const errorHandler = (e) => { console.log('error: ' + e) }

  const install = () => {
    if (beforeInstallPrompt) beforeInstallPrompt.prompt()
  }

  const checkIfInstaled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
  console.log(checkIfInstaled)

  return (
    <Suspense fallback={<div className="loading" > Loading...</div>}>
      < NavBar />
      {!checkIfInstaled && <Button className='dark-btn' size='sm' style={{ position: 'fixed', bottom: 0, right: 0 }} onClick={install} > Install PWA </Button>}
      < HomePage />
      <ProjectsPage />
      < AboutMePage />
    </Suspense>
  )
}


export default App;
