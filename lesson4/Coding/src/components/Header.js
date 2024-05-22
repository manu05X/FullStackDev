import { CONST_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CONST_LOGO}/>
            </div>
            <div className="nav-items">
            <ul className="ul-text">
                <li className="active">Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}

export default Header;