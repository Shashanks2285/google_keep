import React from "react";

const Footer = ()=>{
    const year = new Date().getFullYear();
    return (
        <>
    <footer>
        <p>copyright ©️ {year} under <span> [Shashank Shekhar]</span></p>
    </footer>
        </>
    );
};

export default Footer;