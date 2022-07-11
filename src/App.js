
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
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromotion();
    console.log(`'beforeinstallprompt' event was fired.`);
  })

  const btnAdd = async () => {
    hideInstallPromotion();
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
  }
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <NavBar />
      <button style={{ marginLeft: '5rem' }} onClick={btnAdd}>sdfdf</button>
      <HomePage />
      <ProjectsPage />
      <AboutMePage />
      <ContactPage />
    </Suspense>
  );
}

export default App;
