import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";   
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";

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
            <Outlet/>
        </div>
    )
};

//createBrowserRouter takes list of objects each object defines a specific path
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            //path: "/restaurants/:resId" -> here everything after : is dynamic
            {
                path: "/resturants/:resId",
                element: <ResturantMenu/>,  
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);