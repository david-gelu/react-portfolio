import React, { useEffect, useState } from 'react'
import TooltipWrap from './TooltipWrap'

const ThemeColor = () => {
  let darkMode = localStorage.getItem('dark-mode')

  const [theme, setTheme] = useState(darkMode === 'enabled' ? false : true)
  const themeData = document.querySelector('[data-theme') as HTMLElement
  themeData.dataset.theme = `${!theme ? 'dark' : 'light'}`
  const toggleLightTheme = () => {
    localStorage.setItem('dark-mode', 'disabled')
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

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('dark-mode', 'enabled')
        setTheme(false)
      } else {
        localStorage.setItem('dark-mode', 'disabled')
        setTheme(true)
      }
    }
  }, [])

  return (
    <TooltipWrap desc={`Theme color ${theme ? 'light' : 'dark'}`}>
      <i onClick={() => toggleTheme()} className={`nav-link fas ${theme ? 'fa-moon' : 'fa-sun'}`}></i>
    </TooltipWrap>
  )
}

export default ThemeColor