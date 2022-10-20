import React, { useState } from 'react'
import { Button, Nav, Offcanvas } from "react-bootstrap"

import { linkData } from '../data'
import { LinkData } from 'src/types.js'
import ThemeColor from './ThemeColor'
import TooltipWrap from './TooltipWrap'


const NavBar = () => {
  const [activeId, setActiveId] = useState('')
  const setId = (id: string) => setActiveId(id)
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

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
        <Offcanvas.Body >
          <ThemeColor />
          {linkData.map((l: LinkData) =>
            <TooltipWrap placement="right" key={l.id} desc={l.id.charAt(0).toUpperCase() + l.id.slice(1)}>
              <Nav.Link key={`${l.id}-id`} onClick={() => setId(l.id)}
                className={`${activeId === l.id ? 'active' : ''} d-flex flex-column text-center`} href={`#${l.id}`}>
                <i className={`fas ${l.icon}`}></i>
                <span style={{ transform: 'scale(0.1)', visibility: 'hidden', lineHeight: 0.3 }}>
                  {l.id.charAt(0).toUpperCase() + l.id.slice(1)}
                </span>
              </Nav.Link>
            </TooltipWrap>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavBar