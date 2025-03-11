import React, { Suspense, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./assets/style.scss";
import { NavBarProvider } from "./context/NavBarContext";
import { ProjectsProvider } from "./context/ProjectsContext";
import { StudyProvider } from "./context/StudyContext";
import { WorkProvider } from "./context/WorkContext";

const HomePage = React.lazy(() => import('./components/HomePage'));
const NavBar = React.lazy(() => import('./components/NavBar'));
const ProjectsPage = React.lazy(() => import('./components/ProjectsPage'));
const AboutMePage = React.lazy(() => import('./components/AboutMePage'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));

const App = () => {
  useEffect(() => {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled' || (darkMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <NavBarProvider>
        <NavBar />
      </NavBarProvider>
      <HomePage />
      <ProjectsProvider>
        <ProjectsPage />
      </ProjectsProvider>
      <StudyProvider>
        <WorkProvider>
          <AboutMePage />
        </WorkProvider>
      </StudyProvider>
      <ContactPage />
    </Suspense>
  );
};

export default App;
