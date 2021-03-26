import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" bg="white">
        <Navbar.Brand>
          <Link to={"/"}><div className="header-title text-secondary">Home</div></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to={"/collection"}><div className="header-title text-secondary">Collection</div></Link></Nav.Link>
            <Nav.Link><Link to={"/favorites"}><div className="header-title text-secondary">My selection</div></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
