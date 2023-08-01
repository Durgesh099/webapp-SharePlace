import React from "react";
import './NavLinks.css';
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="nav_links">
            <h3>
                <li><NavLink to="/">All Users</NavLink></li>
            </h3>
            <h3>
            <li><NavLink to="/">My Places</NavLink></li>
            </h3>
            <h3>
            <li><NavLink to="/">Add a Place</NavLink></li>
            </h3>
            <h3>
            <li><NavLink to="/">Authenticate</NavLink>
            </li>
            </h3>
        </ul>
    );
}

export default NavLinks;