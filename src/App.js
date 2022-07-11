
import React, { Suspense } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/style.scss";
const HomePage = React.lazy(() => import('./compnents/HomePage'));
const NavBar = React.lazy(() => import('./compnents/NavBar'));
const ProjectsPage = React.lazy(() => import('./compnents/ProjectsPage'));
const AboutMePage = React.lazy(() => import('./compnents/AboutMePage'));
const ContactPage = React.lazy(() => import('./compnents/ContactPage'));

const App = () => {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <NavBar />
      <HomePage />
      <ProjectsPage />
      <AboutMePage />
      <ContactPage />
    </Suspense>
  );
}

export default App;
