import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <div>
                            <img src={logo}  alt='eShop'></img> eShop
                        </div>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <LinkContainer to=''>
                            <Nav.Link>
                                <div>
                                    <FaShoppingCart /> Cart
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to=''>
                            <Nav.Link>
                                <div>
                                    <FaUser /> Sign In
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header