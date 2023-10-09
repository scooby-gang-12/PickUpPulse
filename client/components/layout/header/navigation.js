import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import styled from "styled-components"; // Import styled-components

function NavigationBar() {
  return (
    <div>
      <StyledNavbar expand="lg">
        <Navbar.Brand href="/dashboard"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link href=''>Profile</Nav.Link>
              <Nav.Link href=''></Nav.Link>
            <NavDropdown title='Manage Games'>
              <NavDropdown.Item href="">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="">Item 2</NavDropdown.Item>
              <NavDropdown.Item href="">Item 3</NavDropdown.Item>
              <NavDropdown.Item href="">Item 4</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </StyledNavbar>
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.header};

  &&& .nav-link,
  &&& .navdropdown.item {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;




export default NavigationBar;
