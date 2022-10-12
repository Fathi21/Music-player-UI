import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function SideNav() {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <i className="fas fa-line-columns"></i>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body></Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}

export default SideNav;
