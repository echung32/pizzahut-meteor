import React from 'react';
import { Image, Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { ArrowRight, Cart, Person } from 'react-bootstrap-icons';

const NavBar = () => (
  <Container fluid className="px-0">
    <Navbar expand="lg" bg="light" className="shadow">
      <Container className="py-1">
        <Nav className="align-items-center">
          <Navbar.Brand className="justify-content-center" href="#">
            <Image
              src="/images/logo.webp"
              width="59px"
              height="47px"
            />
          </Navbar.Brand>
          <Nav.Link><h4 className="fw-bold">Deals</h4></Nav.Link>
          <NavDropdown title="Menu" className="h4 fw-bold">
            <NavDropdown.Item>Pizza</NavDropdown.Item>
            <NavDropdown.Item>Wings</NavDropdown.Item>
            <NavDropdown.Item>Sides</NavDropdown.Item>
            <NavDropdown.Item>Pasta</NavDropdown.Item>
            <NavDropdown.Item>Desserts</NavDropdown.Item>
            <NavDropdown.Item>Drinks</NavDropdown.Item>
            <NavDropdown.Item>Dips</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-end gap-3 align-items-center">
          <Stack direction="horizontal" className="shadow p-2 rounded" gap={2}>
            <Person className="h1 mt-1" />
            <Stack>
              <span className="fw-light red-color"><small>HUT REWARDS</small></span>
              <span>Sign In <ArrowRight /></span>
            </Stack>
          </Stack>
          <NavDropdown
            id="no-caret"
            title={(
              <Stack
                direction="horizontal"
                className="h4 fw-bold"
                gap={1}
              ><Cart />$0.00
              </Stack>
            )}
          >
            <NavDropdown.Item>Empty Cart</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  </Container>
);

export default NavBar;
