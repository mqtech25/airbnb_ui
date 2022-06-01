import React from "react";
import Img from "../img/banner.png"
export default function Herosection(){
    return(
        <div className="App-banner">
        <img src={Img} className="hero-img" alt="banner"></img>
        </div>
    )
}