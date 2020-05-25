import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Sorting from './Components/Sorting/Sorting'
import Header from './Components/header/header'
import Searching from './Components/Searching/Searching'

function App() {  
  return (
    <Router>
    <div className="App">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Algo Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/sorting">Sorting Algorithms</Nav.Link>
            <Nav.Link href="/searching">Searching Algorithms</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#ourteam">Our Team</Nav.Link>
            <Nav.Link eventKey={2} href="#contactus">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/"exact component={Header}/>
      <Route path="/sorting"exact component={Sorting}/>
      <Route path="/searching"exact component={Searching}/>
    </div>
    </Router>
  );
}

export default App;
 