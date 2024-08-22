import axios from 'axios';



const API = axios.create({ baseURL: "http://localhost:8080/" });


export const show = async () => {
    const getAll = await API.get("/getAll")
    return getAll
}

export const showById =async(id)=>{
    const getById = await API.get(`/product/${id}`)
    return getById
}


export const showId =async()=>{
    const getId = await API.get('/')
    return getId
}
