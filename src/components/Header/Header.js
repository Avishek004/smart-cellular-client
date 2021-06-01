import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/">Smart Cellular</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/order">Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/admin">Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Deals</Nav.Link>
                        </Nav.Item>
                        <Button variant="primary" href="/login">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;