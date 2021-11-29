import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {

    return (
        <div>
            <Navbar collapseOnSelect className="navbarBg p-0" variant=" dark" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-brand me-5">
                        <NavLink to="/home">
                            <img src="https://i.ibb.co/dgtMkCQ/nbk2-removebg-preview.png" alt="" width="50%" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#dae2e273' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" to="/home">Home</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" to="/about">About</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" to="/contact">Contact</NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavigationBar;