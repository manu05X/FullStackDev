import React from "react";
import ReactDOM from "react-dom";

//React.createElement => Object => whenever we render it to the DOM it will become html element 

// const heading = React.createElement("h1",{id:"heading"},"Hello world");
//JSX => babel transpile it to React.createElement => ReactElement -> JS Object => HTMLElement(render)

/*
const jsxHeading = (
    <h1 className="head" tabIndex="5">
        React using JSX
    </h1>
)
*/

const number = 1000;

//React element, so this behave like normal JS variable so we can put this inside {} of a component
const title = (
    <h1 className="head" tabIndex="5">
        This is title element.
        
    </h1>
)

//react component
const Title = () => (
    <h1 className="head" tabIndex="5">
        This is title component
    </h1>                       
);

const HeadingComponent = () => (
    <div id="container">
        {/* <Title/> */}
        {number} {/* We can put any expression of JS using {} inside JSX */} 
        {title}
        <h1 className="heading">Hey this is a Functional component</h1>
    </div>
);

//
// const title = (
//     <h1 className="head" tabIndex="5">
//         This is title element.
//         <HeadingComponent/>
//     </h1>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
//root.render(heading);
root.render(<HeadingComponent/>);