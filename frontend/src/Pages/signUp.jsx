import React from 'react';
import validator from 'validator'
// import { SignUpDataPost } from '../api/api';
import "../css/signUp.css";

export default function SignUp(){
    // Setting Variable for validation checking for email
    const [email,setEmail] = React.useState("")
    const [isValidEmail , setIsValidEmail]  = React.useState(false)

    // Setting variable for validation checking for phone number
    const [phoneNumber , setPhoneNumber] = React.useState("")
    const [isValidNumber, setIsValidNumber] = React.useState(false)

    const [password,setPassword] = React.useState("")
    const [isValidPassword, setIsValidPassword] = React.useState(false)

    function EmailChecker(value){
        setEmail(value)  
        setIsValidEmail(validator.isEmail(value))
    }

    function PhoneNumberChecker(value){
        setPhoneNumber(value)
        setIsValidNumber(validator.isMobilePhone(value,"en-IN"))
    }

    function PasswordChecker(value){
        setPassword(value)
        setIsValidPassword(password.length >= 8 && true)
    }

    function handleSubmit(formData){
        const data = Object.fromEntries(formData)
        // SignUpDataPost(data)
    }

    return (
        <>
        <div className="parent">
            <div className="child">
                <form action={handleSubmit}>
                    <h1>Register User</h1>
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder='Enter Your Full Name' 
                        required
                    /><br />
                    <input 
                        type='text' 
                        name="userName" 
                        placeholder='Enter UserName' 
                        required 
                    /> <br />
                    <input 
                        type="email" 
                        name="Email" 
                        placeholder='Enter Your Email' 
                        required 
                        onChange={(e)=>{EmailChecker(e.target.value)}}
                        style={{
                            border : email === "" ? "none" : isValidEmail ? "2px solid green" : "2px solid red"
                        }}  
                    /> <br />    
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Enter Your Password' 
                        required 
                        onChange={(e)=>{PasswordChecker(e.target.value)}}
                        style={{
                            border : password.length === 0 ? "none" : isValidPassword ? "2px solid green" : "2px solid red"
                        }}
                    /> 
                    { password.length === 0 ? "" : isValidPassword ? "" : <h6>Password should be of atleast 8 characters</h6>} 
                    <br />
                    <input 
                        type="PhoneNumber" 
                        name="phoneNumber" 
                        placeholder='Enter Your Phone Number' 
                        required 
                        onChange={(e)=>{PhoneNumberChecker(e.target.value)}}
                        style={{
                            border : phoneNumber === "" ? "none" : isValidNumber ? "2px solid green" : "2px solid red"
                        }}
                    />
                    <br />
                    <input 
                        type="text" 
                        name="orgName" 
                        placeholder='Enter Organization Name' 
                        required 
                    /> <br />
                    <button>Register</button>
                </form> 
            </div>
        </div>
        </>
    )
}