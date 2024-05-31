import React from "react"
import { useState } from "react";


class UserClass extends React.Component {

    //define class constructor to recieve props with keyword super(props)
    constructor(props) {
        super(props);
        //console.log("Child class constructor called " + this.props.name);

        //state variable

        this.state = {};
    }

    async componentDidMount() {
        //console.log("Child ComponentDidMounted called " + this.props.name);
        //API call
        const data = await fetch("https://api.github.com/users/manu05X");
        const json = data.json();

        console.log(json);
    }

    render() {
        const {name, location} = this.props; //destructure

        //console.log("Child class Render is called " + this.props.name);

        return(
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @manish</h4>
            </div>
        )
    }
}


export default UserClass;

/*
The use of super(props) within the constructor of a React class component significantly impacts the entire component lifecycle. It sets the stage for how the component will interact with its props throughout its lifecycle, from mounting to unmounting.


Order of Constructor and Render method loading

Render Header...
    AboutClass.js:11 AboutClass -> parent class Constructor called
        AboutClass.js:15 AboutClass -> parent Rendeder Method is called
        UserClass.js:10 Child class constructor called
    UserClass.js:24 Child class Render is called
Header.js:21 Header rendered

*** Interview Question Life Cycle Methods ****

AboutClass.js:11 AboutClass -> parent class Constructor called
    AboutClass.js:19 AboutClass -> parent Rendeder Method is called
        UserClass.js:10 Child class constructor called
            UserClass.js:28 Child class Render is called
                UserClass.js:21 Child ComponentDidMounted called
                    AboutClass.js:15 Parent ComponentDidMounted called


-> What is the use of ComponentDidMounted? 
Ans -> ComponentDidMounted is use to make API calls.

->Why is the use of ComponentDidMount to make API calls.
Ans -> ComponentDidMount is use to make API calls because React wants to quickly render the component them make API calls and then 
        the data received from API call is fill the data in relevent place.



How child classes sre called in case of multiple child classes
Ans - > Now if we have two children the the order of call will be





Render Header...
AboutClass.js:11 AboutClass -> parent class Constructor called
    AboutClass.js:19 AboutClass -> parent Rendeder Method is called
        UserClass.js:10 Child class constructor called Manish (class)
            UserClass.js:28 Child class Render is called
                UserClass.js:10 Child class constructor called Akshay (class)
                    UserClass.js:28 Child class Render is called
                        UserClass.js:21 Child ComponentDidMounted called Manish (class)
                            UserClass.js:21 Child ComponentDidMounted called Akshay (class)
                                AboutClass.js:15 Parent ComponentDidMounted called
                                    Header.js:21 Header rendered



- Parent Class Construct
- Parent Rendeder Method is called
    
    - Child-1 Class Construct
    - Child-1 Rendeder

    - Child-2 Class Constructor
    - Child-2 Render


        - ComponentDidMounted Child-1 is called
        - ComponentDidMounted Child-2 is called


    -Mounting Phase
    - SO the child-1 and Child-2 class constructor and render methods are called together or patched together as this rendering 
        phase we need to manupuilate the DOM which is expensive process the reconciliation algorithm is triggered by react. 
        So for making react fast react need to patch both the child component render phase together.
        fast. 
    - Then the React Updates the DOM. And this is very expensive work to manupuilate the DOM because of rendering 
        the reconciliation algorithm is triggered by react i.e finding the difference between the rael DOM and virtual DOM

    -Commit Phase 
    - Then ComponentDidMounted of Child-1 and Child-2 is called or patched together as api calls happen and data is fetched
        this takes time then the component is updated with the data and rerender happenes.



*/