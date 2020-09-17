import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Image/Logo.png'
import '../Navbare/Navbare.css'

const Navbare = () => {
    return (
        <div className="backgraund-img">
            <div className="container">
            <Navbar bg="Info" expand="lg">
           <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav.Link href="#home">News</Nav.Link>
    <Nav.Link href="#link">Destination</Nav.Link>
    <Nav.Link href="#link">Blog</Nav.Link>
    <Nav.Link href="#link">Contact</Nav.Link>
    <Button variant="outline-info">Login</Button>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            </div>
        </div>
    );
};

export default Navbare;

