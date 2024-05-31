import React from "react"


class UserClass extends React.Component {

    //define class constructor to recieve props with keyword super(props)
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        return(
            <div className="user-card">
                <h2>Name : {this.props.name}</h2>
                <h3>Location : Banglore</h3>
                <h4>Contact : @manish</h4>
            </div>
        )
    }
}


export default UserClass;

/*
The use of super(props) within the constructor of a React class component significantly impacts the entire component lifecycle. It sets the stage for how the component will interact with its props throughout its lifecycle, from mounting to unmounting.
*/