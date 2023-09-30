import React, { useContext } from "react";
import './NavLinks.css';
import { NavLink } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

const NavLinks = () => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav_links">
            <h3>
                <li><NavLink to="/" exact>All Users</NavLink></li>
            </h3>
            {auth.isLoggedIn && <h3>
                <li><NavLink to="/u1/places">My Places</NavLink></li>
            </h3>}
            {auth.isLoggedIn && <h3>
                <li><NavLink to="/places/new">Add a Place</NavLink></li>
            </h3>}
            {!auth.isLoggedIn && <h3>
                <li><NavLink to="/auth">Authenticate</NavLink></li>
            </h3>}
            {auth.isLoggedIn && <h3>
                <li><button className="b" onClick={auth.logout}>Logout</button></li>
            </h3>}
        </ul>
    );
}

export default NavLinks;