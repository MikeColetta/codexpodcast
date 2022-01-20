import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./style.css";
import Logo from '../../assets/codexLogoSM.jpg'

function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand href="#home">
                    <img
                        alt="Codex Logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top navbarLogo"
                    />{' '}
                    Codex: History of Video Games
                </Navbar.Brand>
            </Link>
            <Link to="/About">
                <Nav.Item>About</Nav.Item>
            </Link>
            <Link to="/Contact">
                <Nav.Item>Contact</Nav.Item>
            </Link>
        </Navbar>
    )
}

export default CustomNavbar;