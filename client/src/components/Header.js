import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
  <header>
    <Navbar inverse collapseOnSelect>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="/">MyShop</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav>
	        <LinkContainer exact={true} to="/"><NavItem eventKey={1} href="#">Home</NavItem></LinkContainer>
	        <LinkContainer to="/products"><NavItem eventKey={2} href="#">Products</NavItem></LinkContainer>
	        <LinkContainer to="#"><NavItem eventKey={3} href="#">Item3</NavItem></LinkContainer>
	        <LinkContainer to="#"><NavItem eventKey={4} href="#">Item4</NavItem></LinkContainer>
	      </Nav>	
	    </Navbar.Collapse>
	  </Navbar>
  </header>
)




export default Header

 