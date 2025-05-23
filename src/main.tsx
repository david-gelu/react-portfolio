import { StrictMode } from 'react'
import './index.css'
import App from './App'
import { createRoot } from "react-dom/client"


const rootElement = document.getElementById("root")
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  console.error("Failed to find the root element.")
}
