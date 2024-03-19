
import React, { Suspense, useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/style.scss"
import { NavBarProvider } from "./context/NavBarContext"
import { ProjectsProvider } from "./context/ProjectsContext"
import { StudyProvider } from "./context/StudyContext"
import { WorkProvider } from "./context/WorkContext"
import { eventHandler } from "./components/NavBar"

const HomePage = React.lazy(() => import('./components/HomePage'))
const NavBar = React.lazy(() => import('./components/NavBar'))
const ProjectsPage = React.lazy(() => import('./components/ProjectsPage'))
const AboutMePage = React.lazy(() => import('./components/AboutMePage'))

const App = () => {

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", eventHandler)
  }, [])

  useEffect(() => {
    console.log(window.scrollY)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Suspense fallback={<div className="loading" > Loading...</div>}>
      <NavBarProvider>
        < NavBar />
      </NavBarProvider>
      < HomePage />
      <ProjectsProvider>
        <ProjectsPage />
      </ProjectsProvider>
      <StudyProvider>
        <WorkProvider>
          < AboutMePage />
        </WorkProvider>
      </StudyProvider>
    </Suspense>
  )
}


export default App
