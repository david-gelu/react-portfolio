
import React, { Suspense } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.scss";
import { NavBarProvider } from "./context/NavBarContext";
const HomePage = React.lazy(() => import('./compnents/HomePage'));
const NavBar = React.lazy(() => import('./compnents/NavBar'));
const ProjectsPage = React.lazy(() => import('./compnents/ProjectsPage'));
const AboutMePage = React.lazy(() => import('./compnents/AboutMePage'));

const App = () => {
  return (
    <Suspense fallback={<div className="loading" > Loading...</div>}>
      <NavBarProvider>
        < NavBar />
      </NavBarProvider>
      < HomePage />
      <ProjectsPage />
      < AboutMePage />
    </Suspense>
  )
}


export default App;
