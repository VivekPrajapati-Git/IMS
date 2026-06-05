import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import icon from "../assets/navbar-icon.png";

export default function Navbar({ values }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(true);

    function toggleNavbar() {
        setIsOpen(prev => !prev);
    }

    function LogOut() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <div className={`nav-bar ${isOpen ? "expanded" : "collapsed"}`}>
            <div className="icon-nav">
                <button id="icon-btn" onClick={toggleNavbar}>
                    <img src={icon} alt="menu" />
                </button>
            </div>

            <ul className="nav-list">
                {values.map((item) => (
                    <li key={item.route}>
                        <button
                            className="nav-btn"
                            onClick={() => navigate(item.route)}
                            disabled = {isOpen ? false : true}
                        >
                            {isOpen && item.name}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="logout">
                <button className="nav-btn" onClick={LogOut}>
                    {isOpen && "Logout"}
                </button>
            </div>
        </div>
    );
}