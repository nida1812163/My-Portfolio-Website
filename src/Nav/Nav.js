import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavStyles.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import OffcanvasTitle from "react-bootstrap/esm/OffcanvasTitle";
import OffcanvasHeader from "react-bootstrap/esm/OffcanvasHeader";
import OffcanvasBody from "react-bootstrap/esm/OffcanvasBody";
import { Link as ScrollLink } from 'react-scroll';

function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  // Enhanced click handler for nav links
  const handleNavClick = (to) => {
    return () => {
      handleClose();
      setTimeout(() => {
        document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Small delay to allow offcanvas to close
    };
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className={styles.navBrand} href="#home">
          Nida N. Fazal
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar"
          className={styles.elementOpen}
          onClick={handleShow}
        />
        <NavbarOffcanvas 
          className={styles.offcanvasCustom}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={handleClose}
        >
          <OffcanvasHeader closeButton>
            <OffcanvasTitle id="offcanvasNavbarLabel" className="border-bottom">
              Nida N. Fazal
            </OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
              <ScrollLink 
                to="Home" 
                smooth={true} 
                className="nav-link" 
                onClick={handleNavClick('Home')}
              >
                Home
              </ScrollLink>
              <ScrollLink 
                to="About" 
                smooth={true} 
                className="nav-link" 
                onClick={handleNavClick('About')}
              >
                About Me
              </ScrollLink>
              <ScrollLink 
                to="Tech" 
                smooth={true} 
                className="nav-link" 
                onClick={handleNavClick('Tech')}
              >
                My Tech Stack
              </ScrollLink>
              <ScrollLink 
                to="Contact" 
                smooth={true} 
                className="nav-link" 
                onClick={handleNavClick('Contact')}
              >
                Contact Me
              </ScrollLink>
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;