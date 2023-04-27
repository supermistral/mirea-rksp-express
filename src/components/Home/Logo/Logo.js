import React from "react";
import { ReactComponent as SvgLogo } from "../../../media/logo.svg";
import "./Logo.css";


const Logo = () => {
    return (
        <div className="logo">
            <SvgLogo />
        </div>
    )
}

export default Logo;
