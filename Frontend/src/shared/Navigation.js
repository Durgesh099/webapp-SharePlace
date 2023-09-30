import React, { useContext } from "react";
import NavLinks from './NavLinks';
import Sidedraw from "./Sidedraw";
import Backdrop from "../shared/components/Backdrop.js";
import { useState } from "react";
import './Navigation.css';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

const Navigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    
    const openDrawer= () =>{
        setDrawerIsOpen(true);
    }
    const closeDrawer=() =>{
        setDrawerIsOpen(false);
    }

    const auth = useContext(AuthContext);

    let yourPlace;
    if(auth.isLoggedIn){
        yourPlace = (
        <h1 className="nav_h1">
            <Link to="/u1/places">Your Places</Link>
        </h1>)
    } else {
        yourPlace = (
        <h1 className="nav_h1">
            <Link to="/auth">Your Places</Link>
        </h1>)
    }

    return (
    <React.Fragment>
    {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
    {drawerIsOpen && 
    <Sidedraw>
    <ul className="sd_link">
            <h3>
                <li><NavLink to="/" exact onClick={closeDrawer}>All Users</NavLink></li>
            </h3>
            {auth.isLoggedIn && <h3>
                <li><NavLink to="/u1/places" onClick={closeDrawer}>My Places</NavLink></li>
            </h3>}
            {auth.isLoggedIn && <h3>
                <li><NavLink to="/places/new" onClick={closeDrawer}>Add a Place</NavLink></li>
            </h3>}
            {!auth.isLoggedIn && <h3>
                <li><NavLink to="/auth" onClick={closeDrawer}>Authenticate</NavLink></li>
            </h3>}
            {auth.isLoggedIn && <h3>
                <li><button className="b" onClick={auth.logout}>Logout</button></li>
            </h3>}
        </ul>
    </Sidedraw>}
    <header className="nav_header">
        <button className="nav_btn" onClick={openDrawer}>
            <span></span>
            <span></span>
            <span></span>
        </button>

        {yourPlace}

        <nav className="nav_nav">
            <NavLinks/>
        </nav>

    </header>
    </React.Fragment>
    );
}

export default Navigation;