import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";   
import Body from "./src/components/Body";

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