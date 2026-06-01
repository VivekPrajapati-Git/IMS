import React from "react";
import { Link } from "react-router-dom";
import '../css/Login.css'

export default function Login(){
    function handleSubmit(formData){
        const data = Object.fromEntries(formData)
        console.log(data)
    }

    return(
        <>
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