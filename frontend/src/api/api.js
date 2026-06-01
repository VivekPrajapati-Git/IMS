import axios from 'axios'

BaseURL = import.meta.env.BaseURL

const api = axios.create({
    baseURL : BaseURL
})

export const SignUpDataPost = async ({Data}) => {
    const response = await api.post('/auth/login')
}