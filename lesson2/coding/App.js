import React from "react";
import ReactDOM from "react-dom";

//React.createElement => Object => whenever we render it to the DOM it will become html element 

const heading = React.createElement("h1",{id:"heading"},"Hello world");

const jsxHeading = <h1>Hey from JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
//root.render(heading);