import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";
import Logo from '../../assets/codexLogoSM.jpg'

function CustomNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
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
        </Navbar>
    )
}

export default CustomNavbar;