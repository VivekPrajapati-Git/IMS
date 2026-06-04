import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/"

const api = axios.create({
    baseURL : BASE_URL,
});

export const SignUpDataPost = async (data) => {
    const response = await api.post('/auth/sign_up',{ FullName:data.fullName, UserName: data.userName, Password: data.password, Role: "Admin", Phone_Number: data.phoneNumber})
    return response.data
}

export const LoginDataPost = async (Data) =>{
    try {
        const response = await api.post('/auth/login',{userName : Data.username , password : Data.password})
        const {message,role,token} = response.data
        
        if(response.data.token){
            localStorage.setItem('role',role)
            localStorage.setItem('token',token)
            localStorage.setItem('username',Data.username)
        }
    } catch (err){
        throw new Error(
            err.response?.data?.message  ||
            "Login Falied ! Try Again."
        )
    }
}

export const isAdmin = ()=>{
    const role = localStorage.getItem('role')
    return role.toLowerCase() === 'admin';
}