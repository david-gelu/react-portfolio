import React, { Suspense, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./assets/style.scss";
import { NavBarProvider } from "./context/NavBarContext";
import { ProjectsProvider } from "./context/ProjectsContext";
import { StudyProvider } from "./context/StudyContext";
import { WorkProvider } from "./context/WorkContext";
import { AppProvider, AppContext } from "./context/AppContext";

const HomePage = React.lazy(() => import('./components/HomePage'));
const NavBar = React.lazy(() => import('./components/NavBar'));
const ProjectsPage = React.lazy(() => import('./components/ProjectsPage'));
const AboutMePage = React.lazy(() => import('./components/AboutMePage'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));

const AppContent = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used inside AppProvider');
  }

  const { shouldShowOtherComponents } = context;

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <HomePage />
      <NavBarProvider>
        <NavBar />
      </NavBarProvider>

      <AnimatePresence>
        {shouldShowOtherComponents && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <ProjectsProvider>
              <ProjectsPage />
            </ProjectsProvider>
            <StudyProvider>
              <WorkProvider>
                <AboutMePage />
              </WorkProvider>
            </StudyProvider>
            <ContactPage />
          </motion.div>
        )}
      </AnimatePresence>
    </Suspense>
  );
};

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
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;