import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './NavigationBar.css';

const NavigationBar = () => {

    return (
        <div>
            <Navbar collapseOnSelect className="navbarBg" variant=" dark" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-brand me-5">
                        <HashLink to="/">
                            <img src="https://i.ibb.co/dgtMkCQ/nbk2-removebg-preview.png" alt="" width="50%" />
                        </HashLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <HashLink className="mx-2 text-decoration-none text-white fs-5" to="/home#home">Home</HashLink>
                            <HashLink className="mx-2 text-decoration-none text-white fs-5" to="/home#about">About</HashLink>
                            <HashLink className="mx-2 text-decoration-none text-white fs-5" to="/home#education">Education</HashLink>
                            <HashLink className="mx-2 text-decoration-none text-white fs-5" to="/home#skills">Skills</HashLink>
                            <HashLink className="mx-2 text-decoration-none text-white fs-5" to="/home#projects">Projects</HashLink>
                            <HashLink className="mx-2 text-decoration-none text-white fs-5" to="/home#contact">Contact</HashLink>
                            <HashLink className="mx-2 text-decoration-none text-white fs-5" to="/blogs">Blogs</HashLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavigationBar;