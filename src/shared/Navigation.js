import React from "react";
import NavLinks from './NavLinks';
import './Navigation.css';

const Navigation = () => {
    return (
    <header className="nav_header">
        <button className="nav_btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <h1 className="nav_h1">
            Your Places
        </h1>
        <nav className="nav_nav">
            <NavLinks/>
        </nav>

    </header>
    );
}

export default Navigation;