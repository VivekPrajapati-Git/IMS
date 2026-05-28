import React from 'react';
import "../css/signUp.css";

export default function SignUp(){

    function handleSubmit(formData){
        const data = Object.entries(formData)
        console.log(data)
    }

    return (
        <>
        <div className="parent">
            <div className="child">
                <form action={handleSubmit}>
                    <h1>Register User</h1>
                    <input type="text" name="fullName" placeholder='Enter Your Full Name' required /><br />
                    <input type='text' name="userName" placeholder='Enter UserName' required /> <br />
                    <input type="email" name="Email" placeholder='Enter Your Email' required /> <br />    
                    <input type="password" name="password" placeholder='Enter Your Password' required /> <br />
                    <input type="PhoneNumber" name="phoneNumber" placeholder='Enter Your Phone Number' required /> <br />
                    <input type="text" name="orgName" placeholder='Enter Organization Name' required /> <br />
                    <button>Register</button>
                </form> 
            </div>
        </div>
        </>
    )
}