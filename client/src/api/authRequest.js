import axios from "axios";


const APP = axios.create({ baseURL: "http://localhost:8080/" })


export const signIn = async (formdata) => {
    const signinData = await APP.post('/signin', formdata)
    return signinData
}


export const registerUser = async (formdata) => {
    const register = await APP.post('register', formdata)
    return register
}