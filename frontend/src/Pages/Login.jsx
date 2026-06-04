import '../css/Login.css'
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAdmin, LoginDataPost } from "../api/api";
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import UserDashboard from "../Pages/User/UserDashboard"
import ErrorToast from '../Components/Error';

export default function Login(){
    const navigate = useNavigate();
    const [error,setError] = React.useState("")

    async function handleSubmit(formData){
        try {
            setError("")
            const data = Object.fromEntries(formData)
            await LoginDataPost(data)

            if (isAdmin()){
                navigate("/admin")
            } else {
                navigate("/user")
            }
        } catch (error){
            setError(error.message)
        }
    }

    return(
        <>
        {error.length === 0 ? "" : <ErrorToast message={error} onClose={()=> setError("")} />}
        <div className="parent">
            <div className="login">
                <h1>Login</h1>
                <form action={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter Your UserName" 
                        required
                    />
                    <br />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Your Password" 
                    /> 
                    <br />

                    <button>Submit</button>
                </form>
                <div className="signuptext">
                    <h6 id="signupnavigate">Didn't Have Account ? <Link to="/signup">SignUp</Link></h6>
                </div>
            </div>
        </div>
        </>
    )
}