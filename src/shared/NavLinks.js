import React from "react";
import './NavLinks.css';
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="nav_links">
            <h3>
                <li><NavLink to="/" exact>All Users</NavLink></li>
            </h3>
            <h3>
                <li><NavLink to="/u1/places">My Places</NavLink></li>
            </h3>
            <h3>
                <li><NavLink to="/places/new">Add a Place</NavLink></li>
            </h3>
            <h3>
                <li><NavLink to="/any">Authenticate</NavLink></li>
            </h3>
        </ul>
    );
}

export default NavLinks;