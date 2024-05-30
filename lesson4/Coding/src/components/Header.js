import { CONST_LOGO } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {

    //let btnName ="Login";
    const [btnNameReact, setBtnNameReact] = useState("Login"); //initial State of btnName
    console.log("Render Header...");

    // //if no dependencies array then ==> useEffect is called on every render of header
    // useEffect(() => {
    //     console.log("Header rendered");
    // });
    //if dependencies array is empty = [] , then ==> useEffect is called only on inital render and just once when the component is render for the first time.
    useEffect(() => {
        console.log("Header rendered");
    },[]);

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
                <button 
                    className="login" 
                    onClick={() => {
                    // btnName = "Logout";
                    // console.log("Logout");
                    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); //when btnNameReact is set to "Logout the full Header component is rendered again.
                    console.log(btnNameReact);
                }}>{btnNameReact}</button>
            </ul>
        </div>
        </div>
    );
};

export default Header;