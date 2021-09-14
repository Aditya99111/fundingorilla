import React from "react";

function Navbar() {
    return (
        <header>
            <a href="#" className="logo">
                <span>Funding</span>orilla
            </a>
            <input type="checkbox" id="menu-bar" />
            <label htmlFor="menu-bar" className="fas fa-bars"></label>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#review">FAQ</a>
                <a href="#feedback">Contact</a>
                <a href="#signup">
                    {" "}
                    <button className="btn sign">Signup</button>
                </a>
                <a href="#login">
                    {" "}
                    <button className="btn log">Login</button>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
