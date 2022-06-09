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
    console.log('light')
  }
  const toggleDarkTheme = () => {
    localStorage.setItem('dark-mode', 'enabled')
    setTheme(false)
    console.log('dark');
  }

  const toggleTheme = () => {
    darkMode = localStorage.getItem('dark-mode')
    if (darkMode !== 'enabled') toggleDarkTheme()
    else toggleLightTheme()
  }

  return (
    <Form>
      <Form.Check type='switch' id='theme-switch' onClick={() => toggleTheme()} />
    </Form>
  )
}

export default ThemeColor