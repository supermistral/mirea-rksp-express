import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


const Header = () => {
    const setActiveClassName = ({ isActive }) => isActive ? 'active' : '';

    return (
        <header id="header">
            <div className="header-content">
                <div className="header-item">
                    <NavLink to="/books" className={setActiveClassName}>books</NavLink>
                </div>
                <div className="header-item">
                    <NavLink to="/" className={setActiveClassName}>home</NavLink>
                </div>
                <div className="header-item">
                    <NavLink to="/about" className={setActiveClassName}>what is it</NavLink>
                </div>
                <div className="header-item">
                    <NavLink to="/admin" className={setActiveClassName}>admin</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;
