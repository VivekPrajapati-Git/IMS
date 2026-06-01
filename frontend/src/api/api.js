import axios from 'axios'

const BASE_URL = import.meta.env.BASE_URL || "http://localhost:3000/"

const api = axios.create({
    baseURL : BASE_URL,
});

export const SignUpDataPost = async (Data) => {
    console.log(Data)
}