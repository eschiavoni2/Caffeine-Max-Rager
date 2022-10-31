import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/Home';
import Tracker from '../pages/Tracker';

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <Router>
        <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
            <Navbar.Brand as={Link} to={'/'}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/tracker'}>Caffeine Tracker</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/eschiavoni2" target="_blank">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/erika-zibelnik/" target="_blank">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
