import React from "react";
import Navbar from "../../Components/Navbar";
import {useNavigate} from "react-router-dom"
import "../../css/AdminDashboard.css"

export default function AdminDashboard(){
    const [navbarList , setNavbarList] = React.useState([
        {
            name:"Inventory",
            route: "/admin"
        },         
        {
            name:"Add Stock",
            route: "/addstock"
        },
        {
            name:"Update Stock",
            route: "/updatestock"
        },
        {
            name:"Users",
            route: "/user"
        },

        {
            name:"sales",
            route: "/saleslog"
        },
    ])
    
    return (
        <>
        <div className="outer">
            <Navbar 
                values = {navbarList}
            />
            <div className="main">
                <h1 style={{color:"black"}}>This is an admin page</h1>
            </div>
        </div>
        </>
    )
}