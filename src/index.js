import React, { StrictMode } from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorkerRegistration'
// import reportWebVitals from './reportWebVitals'
import { createRoot } from "react-dom/client"


const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

window.navigator.onLine ? serviceWorker.unregister() : serviceWorker.register()
// reportWebVitals(console.log)