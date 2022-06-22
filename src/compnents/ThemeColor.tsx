import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const ThemeColor = () => {
  let darkMode = localStorage.getItem('dark-mode')
  const [theme, setTheme] = useState(darkMode === 'enabled' ? false : true)
  const themeData = document.querySelector('[data-theme') as HTMLElement
  themeData.dataset.theme = `${theme ? 'dark' : 'light'}`

  const toggleLightTheme = () => {
    localStorage.setItem('dark-mode', '')
    setTheme(true)
  }
  const toggleDarkTheme = () => {
    localStorage.setItem('dark-mode', 'enabled')
    setTheme(false)
  }

  const toggleTheme = () => {
    darkMode = localStorage.getItem('dark-mode')
    if (darkMode !== 'enabled') toggleDarkTheme()
    else toggleLightTheme()
  }

  return (
    <i onClick={() => toggleTheme()} className={`nav-link fas ${theme ? 'fa-moon' : 'fa-sun'}`}></i>
  )
}

export default ThemeColor