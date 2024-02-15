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
  const [show, setShow] = useState(true)
  const { linkData } = useContext(NavBarContext)

  const setId = (id: string) => setActiveId(id)
  const handleClose = () => setShow(!show)
  const toggleShow = () => setShow((s) => !s)


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
      <Button variant="primary" size='sm' onClick={toggleShow} className="mt-3 fixed-top w-auto theme-color-name btn-name">
        David Gelu
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll backdrop={false}>
        <Offcanvas.Header>
          <Button variant="primary" className='btn-name w-75 d-flex flex-wrap' size='sm' onClick={toggleShow}>
            David Gelu
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ThemeColor />
          {linkData.map((l: LinkData) =>
            <TooltipWrap placement="right" key={l.id} desc={l.id.charAt(0).toUpperCase() + l.id.slice(1)}>
              <Nav.Link key={`${l.id}-id`} onClick={() => setId(l.id)}
                className={`${activeId === l.id ? 'active' : ''} d-flex flex-column text-center`} href={`#${l.id}`}>
                <i className={`fas ${l.icon}`}></i>
                <span className={`${activeId === l.id ? 'active' : ''} nav-text`}>
                  {l.id.charAt(0).toUpperCase() + l.id.slice(1)}
                </span>
              </Nav.Link>
            </TooltipWrap>
          )}
          {!showDownloadBtn() ? <></> :
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