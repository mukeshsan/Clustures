import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from './../assets/logo.svg';

const CovidHeader = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} className="App-logo" alt="logo" />
                COVID-19 Clusters
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="justify-content-end">
                    <Nav.Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance" target="blank">WHO Guidelines</Nav.Link>
                    <NavDropdown title="Districts" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Ananthapur</NavDropdown.Item>
                        <NavDropdown.Item href="#">Chittoor</NavDropdown.Item>
                        <NavDropdown.Item href="#">East Godavari</NavDropdown.Item>
                        <NavDropdown.Item href="#">Guntur</NavDropdown.Item>
                        <NavDropdown.Item href="#">YSR Kadapa</NavDropdown.Item>
                        <NavDropdown.Item href="#">Visakhapatanam</NavDropdown.Item>
                    </NavDropdown>                
                    <Nav.Link target='blank' href='https://www.linkedin.com/in/mukeshsan/'>About Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CovidHeader;
