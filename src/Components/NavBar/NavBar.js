import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

class NavBar extends Component {

render(){

console.log('Rendering Navbar');

// change href to / /portfolio etc for use with Router
// make this dynamic and reusable component
return( 
<div>
  <Navbar bg="blue" variant="dark" fixed="top">
    <Navbar.Brand style={{fontSize: 30}} href="/">John Cook</Navbar.Brand>
    <Nav style={{fontSize: 25}} className="mr-auto">
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      <Nav.Link href={`mailto:${this.props.email}`}>Contact</Nav.Link>
    </Nav>
  </Navbar>
  <br></br>
  </div>
);

}

}
export default NavBar;
