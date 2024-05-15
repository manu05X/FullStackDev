import React from "react";
import ReactDOM from "react-dom";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search 
 *  - Resturant container
 *      - ResturantCards
 *          - Name, Rating, cuisine, delivery Time
 * Footer
 *  -copyright
 *  - Address
 *  - Contact
 */


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const ResturantCards = () => {
    return (
        <div className="resturant-Card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1qE0S9a0rv_GfFBRS59c_iDR230yW6i5fQ&s."
            />
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4> 4.5 Stars </h4>
            <h4> 38 minuts</h4>

        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="resturant-Container">
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
                <ResturantCards/>
            </div>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);