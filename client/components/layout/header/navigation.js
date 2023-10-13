import React from "react";
import styled from "styled-components";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function NavigationBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutUser());
  }
  return (
    <div>
      <StyledNavbar expand="lg">
        <Navbar.Brand as={Link} to="/dashboard"><h1>Pick Up Pulse</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
            <Nav.Link as={Link} to=''></Nav.Link>
            <NavDropdown title='Manage Games'>
              <NavDropdown.Item as={Link} to="/creategames">Create</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hostedgames">Hosted</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/attendinggames'>Attending</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/hostedgames/edit">Edit Games</NavDropdown.Item> */}
            </NavDropdown>
            {isLoggedIn && (<Nav.Link as={Link} to="/" onClick={handlelogout}>Logout</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.header};

  &&& .navbar-brand,
  &&& .nav-link,
  &&& .navdropdown {
    color: ${({ theme }) => theme.colors.darkText};
  }
`;

export default NavigationBar;






