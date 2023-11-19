import React from "react";
import logo from "./images/logo.png"

const Header = ()=>{
    return(
        <>
        <div className="header">
            <img id="logo_icon" src={logo} alt="logo" width='50' height='60'/>
            <h1>Sh@nky Notes</h1>
        </div>
        </>
    );
};

export default Header;