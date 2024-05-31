import React from "react"
import { useState } from "react";


class UserClass extends React.Component {

    //define class constructor to recieve props with keyword super(props)
    constructor(props) {
        super(props);
        //console.log(props);

        //state variable

        this.state = {
            count : 0,
            count2 : 0,
        };
    }

    render() {
        const {name, location} = this.props; //destructure
        const {count, count2} = this.state;
        


        return(
            <div className="user-card">
                <h1> Count : {count}</h1>
                <h2>Count2 : {count2}</h2>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                        count2 : this.state.count2 + 1,
                    });
                    //console.log("render on click " + count)
                }}
                >
                    Count Increase
                </button>
                {/* <h1>Count : {this.state.count}</h1> */}
                {/* <h2>Name : {this.props.name}</h2> */}
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
*/