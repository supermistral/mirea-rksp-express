import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isAuthenticated, isModerator, userLogout } from "../../redux/slices/auth";
import "./Header.css";


const Header = () => {
    const dispatch = useDispatch();
    const isUserAuthenticated = useSelector(isAuthenticated);
    const isUserModerator = useSelector(isModerator);

    console.log(isUserAuthenticated)

    const handleLogout = () => dispatch(userLogout());

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
                {isUserAuthenticated ? (
                    <>
                        {isUserModerator && (
                            <div className="header-item">
                                <NavLink to="/admin" className={setActiveClassName}>admin</NavLink>
                            </div>
                        )}
                        <div className="header-item">
                            <NavLink to="#" onClick={handleLogout} className={setActiveClassName}>logout</NavLink>
                        </div>
                    </>
                ) : (
                    <div className="header-item">
                        <NavLink to="/auth/login" className={setActiveClassName}>signin</NavLink>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;
