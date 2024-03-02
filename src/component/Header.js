import { LOGO_URL } from "../utils/constant";  //named import
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [btnName, setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <Link to={"/"}><img className="logo" src={LOGO_URL} alt="Logo" /></Link>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;