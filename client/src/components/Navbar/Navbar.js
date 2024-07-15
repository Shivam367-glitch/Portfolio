import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { paths } from "../../utility";

function Header() {
  const navigate = useNavigate();

  const common = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "#65c0e7",
      marginRight: 25,
      fontSize: 18,
      marginTop: isActive ? 0 : 2,
      textDecoration: "none",
    };
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="fixed-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mt-2" onClick={handleLogoClick}>
            <h2>
              <img src="favicon-32x32.png" alt="logo" />
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mt-2">
              {paths.map((path, index) => (
                <NavLink to={path.to} style={common} key={index} as={Link}>
                  {path.name}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
