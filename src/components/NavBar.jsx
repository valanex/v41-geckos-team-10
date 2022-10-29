import { Link } from 'react-router-dom';
import "./NavBar.css";
import dashboard_icon from "../assets/dashboardicon.svg"
import tracker_icon from "../assets/trackericon.svg";
import profile_icon from "../assets/profileicon.svg";
import profile_picture_holder from "../assets/dwight.jpg";
import logout_icon from "../assets/logouticon.svg"
import Dashboard from './Dashboard/Dashboard';
import Tracker from './Tracker/Tracker';
import Landing from './Landing';
import ProfilePage from "./ProfilePage/ProfilePage";

const NavBar = ()=> {

 return (
    <div className="navbar navbar--div">
        <nav className="navbar navbar--nav">
            <ul className="navbar navbar--list">
                <li className="navbar navbar--logo">
                    <img className="logo" alt="app logo"/>
                </li>
                <li className="navbar navbar--profile_picture">
                    <img src={profile_picture_holder} className="" alt="profile"/>
                </li>
                <li className="navbar navbar--list_item">
                    <img src={dashboard_icon} className="navbar navbar--icon" alt="dashboard page"/>
                    <Link to={"/Dashboard"} className="navbar navbar--text">Dashboard</Link>
                </li>
                <li className="navbar navbar--list_item">
                    <img src={profile_icon} className="navbar navbar--icon" alt="profile page"/>
                    <Link to={"/profile-page"} className="navbar navbar--text">Profile</Link>
                </li>
                <li className="navbar navbar--list_item">
                    <img src={tracker_icon} className="navbar navbar--icon" alt="tracker page"/>
                    <Link to='/Tracker' className="navbar navbar--text">Tracker</Link>
                </li>
                <li className="navbar--button--div">
                    <button className="navbar navbar--button">Add Task +</button>
                </li>
                <li className="navbar navbar--logout">
                    <img src={logout_icon} className= "navbar--icon_logout" alt="logout"/>
                    <Link className="navbar--text_logout" to=''>Logout</Link>
                </li>
            </ul>
        </nav>
    </div>
    )   
};

export { NavBar };