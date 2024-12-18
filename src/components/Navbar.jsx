import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavbarComponent = ({ currentPage, setPage }) => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container className="w-75 m-auto">
                <Navbar.Brand href="#home">Start Counter</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => setPage("Landing")} active={currentPage==="Landing"}>Landing Page</Nav.Link>
                        <Nav.Link onClick={() => setPage("Counter")} active={currentPage==="Counter"}>Counter Page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};