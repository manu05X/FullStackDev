//React.createElement("tagName",{Obj},"Content to be put in side h1");//-> syntax

/*

const heading = React.createElement(
    "h1",
    {id:"heading", xyz:"abc"},
    "Hello world from React!"
);
console.log(heading); //h1 in not html element but an object. Here heading is a object created by React.createElement and the root.render(heading) method convert this into html 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

/*
<div id="root">
    <h1 id="title" class="title" style="background: red;">heading</h1>
</div>

*/
const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement("div",{id:"children1"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
        ]),
        React.createElement("div",{id:"children2"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
        ])
    ]
);
  

console.log(parent); //h1 in not html element but an object. Here heading is a object created by React.createElement and the root.render(heading) method convert this into html 

//create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

//pass react element inside root
root.render(parent);