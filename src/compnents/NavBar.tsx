import React, { useEffect, useState } from 'react'
import { Alert, Button, Nav, Offcanvas } from "react-bootstrap"

import { linkData } from '../data'
import { LinkData } from 'src/types.js'
import ThemeColor from './ThemeColor'
import TooltipWrap from './TooltipWrap'


const NavBar = () => {
  const [activeId, setActiveId] = useState('')
  const [show, setShow] = useState(true);
  const [showBtn, setShowBtn] = useState(true);
  const [size, setSize] = useState(0)
  const setId = (id: string) => setActiveId(id)

  useEffect(() => {
    const resize = () => setSize(window.innerWidth)
    window.addEventListener('resize', resize)
    resize()
  }, [])

  useEffect(() => {
    if (size < 900) setShowBtn(false)
    else setShowBtn(true)
  }, [size])

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
    catch (e) { console.log(`Error ${e}`) }
  }


  const install = () => {
    if (beforeInstallPrompt) {
      beforeInstallPrompt.prompt()
      beforeInstallPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          return <Alert key='success' variant='success'>
            Thank you for installing this PWA
          </Alert>
        } else {
          return <Alert key='info' variant='info'>
            No problem, maybe next time you will install it
          </Alert>
        }
        beforeInstallPrompt = null;
      });
    }
  }
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
          {showBtn &&
            <TooltipWrap placement="right" key='download' desc={'Download on device'}>
              <Button variant='success' className='mt-auto' size='sm' onClick={install} >
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