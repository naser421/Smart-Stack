import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Toolbar(props) {
    return (
        <Navbar bg="light">
            <Container>
            <Navbar.Brand href="#home">
                <img
                        alt=""
                        // Linking image to the .js code
                src="/backgroundImg.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Smart Stack
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}