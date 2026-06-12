import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout(){
    const navbarList = [
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
                route: "/allUsers"
            },
            {
                name:"sales",
                route: "/saleslog"
            }
    ]

    return(
        <div className="outer">
            <Navbar values={navbarList}/>

            <div className="main">
                <Outlet />
            </div>
        </div>
    )
}