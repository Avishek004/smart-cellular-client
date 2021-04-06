import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div style={{ margin: '20px' }}>
            <header className="float-left" style={{ fontSize: '25px', marginLeft: '100px' }}>Smart Cellular</header>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" style={{ marginRight: '100px' }}>
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
        </div>
    );
};

export default Header;