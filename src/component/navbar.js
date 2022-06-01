import React from "react";
import logo from "../img/logo.png"
export default function Navbar(){
    return(
        <header className="App-header">
            <div className="container">
                <img src={logo} className="logo-img" alt="logo"></img>
            </div>
        </header>
    )
}