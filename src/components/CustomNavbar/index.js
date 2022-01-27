import React from "react";
import { Navbar } from "react-bootstrap";
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
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/About" className="navbarItem">
                            About
                        </Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to="/Contact" className="navbarItem">
                            Contact
                        </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            
        </Navbar>
    )
}

export default CustomNavbar;