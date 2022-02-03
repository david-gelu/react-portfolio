import React, { useState } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"

import { linkData } from '../data.js'
import { LinkData } from 'src/types.js'
const NavBar = () => {
  const [activeId, setActiveId] = useState('')
  const setId = (id: string) => setActiveId(id)
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#main">David Gelu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end flex-grow-0">
          <Nav className="me-auto">
            {linkData.map((l: LinkData) =>
              <Nav.Link key={l.id} onClick={() => setId(l.id)}
                className={`${activeId === l.id ? 'active' : ''}`} href={`#${l.id}`}>
                {l.link}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar