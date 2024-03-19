import React, { useState, useContext, useEffect } from 'react'
import { Button, Nav, Offcanvas } from "react-bootstrap"
import { NavBarContext } from '../context/NavBarContext'

import { LinkData } from 'src/types.js'
import ThemeColor from './ThemeColor'
import TooltipWrap from './TooltipWrap'

let installPrompt: any
export const eventHandler = (event: Event) => installPrompt = event

const NavBar = () => {
  const [activeId, setActiveId] = useState('')
  const { linkData } = useContext(NavBarContext)

  const setId = (id: string) => setActiveId(id)
  const [width, setWidth] = useState(0);

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth
    setWidth(newWidth);
  }
  useEffect(() => {
    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)
    return () =>
      window.removeEventListener("resize", updateWindowDimensions)

  }, [])

  const install = () => {
    if (installPrompt) {
      installPrompt.prompt()
      installPrompt.userChoice.then((choice: any) => {
        if (choice.outcome === 'accepted') installPrompt = null
      })
    }
  }

  const showDownloadBtn = () => {
    const checkIfInstaled = window.matchMedia('(display-mode: standalone)').matches
    if (navigator.userAgent.indexOf('Chrome') != -1 && checkIfInstaled === false && installPrompt) return true
    else return false
  }

  return (
    <>
      <Offcanvas show={true} placement={width > 1000 ? 'start' : 'bottom'} scroll backdrop={false} aria-labelledby="navbar">
        <Offcanvas.Header>
          <div className='btn-name' >
            David Gelu
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className={`${width > 1000 ? '' : 'bottom-navbar'}`}>
          <ThemeColor />
          {linkData.map((l: LinkData) =>
            <Nav.Link key={`${l.id}-id`} onClick={() => setId(l.id)}
              className={`${activeId === l.id ? 'active' : ''} d-flex flex-column text-center`} href={`#${l.id}`}>
              <i className={`fas ${l.icon}`}></i>
              <span className={`${activeId === l.id ? 'active' : ''} nav-text`}>
                {l.id.charAt(0).toUpperCase() + l.id.slice(1)}
              </span>
            </Nav.Link>
          )}
          {width > 1000 && !showDownloadBtn() ? <></> :
            <TooltipWrap placement="right" key='download' desc={'Download on device'}>
              <Button variant='success' className='mt-auto d-none d-lg-inline-block' size='sm' onClick={install} >
                <i className="fas fa-download"></i>
                <span className='d-block nav-text'>PWA</span>
              </Button>
            </TooltipWrap>
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavBar