import React, {Component} from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import NavLink from "react-bootstrap/NavLink";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = ()=>
{
    return (
      <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Container>
              <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
              <Navbar.Collapse aid='responsive-navbar-nav'>
                  <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/horsensrental'>Plan drawing</Nav.Link>
                      <NavDropdown title="Attached houses" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/siteplan">Site plan</NavDropdown.Item>
                          <NavDropdown.Item href="/plandrawing">Plan drawing</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href='/contact'>Contact</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
          </>
    );
}
export default Navigation;

