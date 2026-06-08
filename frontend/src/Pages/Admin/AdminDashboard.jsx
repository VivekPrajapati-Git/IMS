import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import {useNavigate} from "react-router-dom"
import { GetStock } from "../../api/api";
import "../../css/AdminDashboard.css"

export default function AdminDashboard(){
    // Used For Storing Stock Data
    const [stockData , setStockData] = React.useState([])
    
    // Used for Pagination Process
    const [page , setPage] = React.useState(1)
    const itemsPerPage = 10

    // used for filtering
    const [nameFilter, setNameFilter] = React.useState("")
    const [quantityFilter , setQuantityFilter] = React.useState("")
    const [priceFilter, setPriceFilter] = React.useState("")

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
    
    // For Fetching the stock data
    useEffect(()=>{
        async function fetchStock() {
            try {
                const data = await GetStock();
                setStockData(data)
            } catch(error){
                console.log(error)
            }
        }
        fetchStock();
    },[])
    
    const filteredStocks = stockData.filter((item)=>{
        const matchNames = item.name.toLowerCase().includes(nameFilter.toLowerCase())
        const priceMatch = priceFilter === "" | item.price === Number(priceFilter)
        const quantityMatch = quantityFilter === "" | item.quantity === Number(quantityFilter)

        return(
            matchNames && priceMatch && quantityMatch
        )
    })

    // Pagination Process
    const startIndex = (page-1) * itemsPerPage
    const currentStocks = filteredStocks.slice(
        startIndex,
        startIndex+itemsPerPage
    )

    const totalPages = Math.ceil(
        filteredStocks.length / itemsPerPage
    )

    return (
        <>
        <div className="outer">
            <Navbar 
                values = {navbarList}
            />
            <div className="main">
                <h2>List of Available Stock</h2>
                <div className="search">
                    <input 
                        type="text" 
                        onChange={(e)=>{setNameFilter(e.target.value)}} 
                        value={nameFilter} 
                        name="name" 
                        placeholder="Filter By Name"
                    />
                    <input 
                        type="text" 
                        onChange={(e)=>{setQuantityFilter(e.target.value)}}
                        value={quantityFilter}  
                        name="quantity" 
                        placeholder="Filter By Quantity"
                    />
                    <input 
                        type="text" 
                        onChange={(e)=>{setPriceFilter(e.target.value)}} 
                        value={priceFilter} 
                        name="price" 
                        placeholder="Filter By Price"
                    />
                </div>
                <div className="listcard">
                    <table className="stock-table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentStocks.map((item)=>{
                            return <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.quantity}</td><td>{item.price}</td></tr>
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <button
                        disabled = {page === 1}
                        onClick={()=>{setPage(prev => prev-1)}}
                    >Previous</button>
                    <span>Page {page} of {totalPages}</span>
                    <button
                        disabled = {page === totalPages}
                        onClick={()=>setPage(prev=>prev+1)}
                    >Next</button>
                </div>
            </div>
        </div>
        </>
    )
}