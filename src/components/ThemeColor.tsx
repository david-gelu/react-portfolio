import React, { useEffect, useState } from 'react'
const TooltipWrap = React.lazy(() => import('./TooltipWrap'))

const ThemeColor = () => {
  const [theme, setTheme] = useState(true)

  useEffect(() => {
    const darkMode = localStorage.getItem('dark-mode')

    if (darkMode === null) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = prefersDarkScheme ? 'enabled' : 'disabled'
      localStorage.setItem('dark-mode', initialTheme)
      setTheme(initialTheme === 'enabled')
    } else {
      setTheme(darkMode === 'enabled')
    }
  }, [])

  useEffect(() => {
    const themeData = document.querySelector('[data-theme]') as HTMLElement
    themeData.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = !prevTheme
      localStorage.setItem('dark-mode', newTheme ? 'enabled' : 'disabled')
      return newTheme
    })
  }

  return (
    <TooltipWrap placement="right" desc={`Set ${theme ? 'light' : 'dark'} theme color`}>
      <div className='d-flex flex-column text-center nav-link'>
        <i onClick={() => toggleTheme()} className={`fas ${theme ? 'fa-moon' : 'fa-lightbulb'}`} />
        <span className='nav-text'>Theme</span>
      </div>
    </TooltipWrap>
  )
}

export default ThemeColor
