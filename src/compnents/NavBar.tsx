import React, { useEffect, useState } from 'react'
import { Alert, Button, Nav, Offcanvas } from "react-bootstrap"

import { linkData } from '../data'
import { LinkData } from 'src/types.js'
import ThemeColor from './ThemeColor'
import TooltipWrap from './TooltipWrap'

const NavBar = () => {
  const [activeId, setActiveId] = useState('')
  const [show, setShow] = useState(true);

  const setId = (id: string) => setActiveId(id)
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);


  let beforeInstallPrompt: any
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", eventHandler)
  }, [])

  const eventHandler = (event: Event) => {
    try {
      beforeInstallPrompt = event
    }
    catch (e) { console.error(`Error ${e}`) }
  }

  const install = () => {
    if (beforeInstallPrompt) {
      beforeInstallPrompt.prompt()
      // beforeInstallPrompt.userChoice.then((choiceResult: any) => {
      //   if (choiceResult.outcome === 'accepted') do something
      //   if (choiceResult.outcome === 'dismissed') do something
      //   beforeInstallPrompt = null;
      // })
    }
  }
  const checkIfInstaled = window.matchMedia('(display-mode: standalone)').matches
  return (
    <>
      <Button variant="primary" size='sm' onClick={toggleShow} className="mt-3 fixed-top w-auto theme-color-name btn-name">
        David Gelu
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll backdrop={false} autoFocus={true}>
        <Offcanvas.Header>
          <Button variant="primary" className='btn-name' size='sm' onClick={toggleShow}>
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
          {!checkIfInstaled &&
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