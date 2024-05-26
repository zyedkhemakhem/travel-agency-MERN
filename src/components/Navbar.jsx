import React from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-2">
            <div className="brand">
                <img src={Logo} alt="logo" style={{ width: "150px", height: "50px" }} />
            </div>
            <ul className="flex flex-row items-center gap-6">
                <li><a href="#services" className="text-black hover:text-orange-400">Home</a></li>
                <li><a href="#destination" className="text-black hover:text-orange-400">Destination</a></li>
                <li><a href="#offer" className="text-black hover:text-orange-400">Offer</a></li>
                <li><a href="#tour" className="text-black hover:text-orange-400">Tour</a></li>
                <li><Button text="Sign up" link="/signup" /></li>
                <li><Button text="Login" link="/login" /></li>
            </ul>
        </nav>
    );
}
