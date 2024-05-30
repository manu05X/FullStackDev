import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";   
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

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

//createBrowserRouter takes list of objects each object defines a specific path
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);