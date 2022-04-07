import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./style.css";
import Logo from '../../assets/codexLogoSM.jpg'

function CustomNavbar() {
    return (
        <Navbar className="customNavbar" expand="lg" variant="dark">
            <Navbar.Brand href="#home">
                <Link to="/">
                    <img
                        alt="Codex Logo"
                        src={Logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top navbarLogo"
                    />{' '}
                </Link>
            </Navbar.Brand>
            <NavDropdown title="Menu" id="nav-dropdown" className='dropdown'>
                <Link to="/About" className="navbarItem">
                    About
                </Link>
                <br></br>
                <Link to="/Contact" className="navbarItem">
                    Contact
                </Link>
            </NavDropdown>
        </Navbar>
    )
}

export default CustomNavbar;