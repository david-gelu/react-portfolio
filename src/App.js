
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
  return (
    <Suspense fallback={<div className="loading" > Loading...</div>}>
      < NavBar />
      < HomePage />
      <ProjectsPage />
      < AboutMePage />
    </Suspense>
  )
}


export default App;
