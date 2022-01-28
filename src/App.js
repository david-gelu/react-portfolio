
import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.scss";
import HomePage from './compnents/HomePage';
import NavBar from './compnents/NavBar';
import ProjectsPage from './compnents/ProjectsPage';
import AboutMePage from './compnents/AboutMePage';
import ContactPage from './compnents/ContactPage';

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <ProjectsPage />
      <AboutMePage />
      <ContactPage />
    </>
  );
}

export default App;
