import { CONST_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    //let btnName ="Login";
    const [btnNameReact, setBtnNameReact] = useState("Login"); //initial State of btnName
    console.log("Render Header...");


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CONST_LOGO}/>
            </div>
            <div className="nav-items">
            <ul className="ul-text">
                <li className="active">Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li className="login" onClick={() => {
                    // btnName = "Logout";
                    // console.log("Logout");
                    setBtnNameReact("Logout"); //when btnNameReact is set to "Logout the full Header component is rendered again.
                    console.log(btnNameReact);
                }}>{btnNameReact}</li>
            </ul>
        </div>
        </div>
    )
}

export default Header;