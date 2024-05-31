import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";


class AboutClass extends Component {

    constructor(props) {
        super(props);

        //console.log("AboutClass -> parent class Constructor called")
    }

    componentDidMount() {
        //console.log("Parent ComponentDidMounted called");
    }

    render() {
        //console.log("AboutClass -> parent Rendeder Method is called");
        return (
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series.</h2>
            {/* <User name={"Manish (Functional Component)"}/> */}
            <UserClass name={"Akshay (class)"} location={"Banglore"}/>
        </div>

        )
    };
};

export default AboutClass;

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series.</h2>
//             {/* <User name={"Manish (Functional Component)"}/> */}
//             <UserClass name={"Manish (class)"} location={"Banglore"}/>
//         </div>
//     );
// };

// export default About;