import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Sorting from './Components/Sorting/Sorting'

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Algo Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown  title="Sorting Algorithms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bubble Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Selection Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Insertion Sort</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Searching Algorithms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Linear Search</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Binary Search</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jump Search</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#ourteam">Our Team</Nav.Link>
            <Nav.Link eventKey={2} href="#contactus">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <svg xmlns="http://www.w3.org/2000/svg" class="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68"><path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#282c34" transform="translate(0-1977)"></path></svg>
        </div>
        <br/>
        <br/>
        <p>
          Learn with <code>Algorithmic Visualizer</code> and see how algortihms work.
        </p> 
      </header>
    </div>
  );
}

export default App;
