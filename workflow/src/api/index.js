import axios from "axios"
import { URL } from "../config"

const instance = axios.create({
    baseURL:URL
})

const get = async (url) => {
    return await instance.get(url,{
        withCredentials: true
    })
}

const post = async (url, data) => {
    return await instance.post(url, data, {
        withCredentials: true
    })
}

const del = async (url, data) => {
    return await instance.delete(url,data, {
        withCredentials: true
    })
}

const del_ = async (url) => {
    return await instance.delete(url, {
        withCredentials: true
    })
}

const put = async (url,data) =>{
    return await instance.put(url,data, {
        withCredentials: true
    })
}
export default instance
export {get, post, del, put, del_}