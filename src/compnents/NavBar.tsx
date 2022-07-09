import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap"

import { linkData } from '../data'
import { LinkData } from 'src/types.js'
import ThemeColor from './ThemeColor'


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
            <Nav.Link key={l.id} onClick={() => setId(l.id)} title={l.id}
              className={`${activeId === l.id ? 'active' : ''}`} href={`#${l.id}`}>
              <i className={`fas ${l.icon}`}></i>
            </Nav.Link>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavBar