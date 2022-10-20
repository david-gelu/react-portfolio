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
    <TooltipWrap placement="right" desc={`Set ${theme ? 'light' : 'dark'} theme color`}>
      <div className='d-flex flex-column text-center'>
        <i onClick={() => toggleTheme()} className={`nav-link fas ${theme ? 'fa-moon' : 'fa-lightbulb'}`} />
        <span style={{ transform: 'scale(0.01)', visibility: 'hidden', lineHeight: 0.3 }}>i</span>
      </div>
    </TooltipWrap>
  )
}

export default ThemeColor