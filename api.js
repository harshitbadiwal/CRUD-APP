import axios from "axios";


const Api_Url = "http://localhost:3002/users"

export const addUser = async (data)=>{
    try{
     return   await axios.post(Api_Url,data  )
        
    }
    catch (error){
        console.log ('error while calling adduser api', error.message)
    }
}
export const getUsers =async()=>{
    try{
            return await axios.get(Api_Url)
    }
    catch(error){
            console.log("error while calling getUser api",error.message)
    }
}

export const getuser =async(data)=>{
    try{
            return await axios.get(`${Api_Url}/${data}`)
    }
    catch(error){
            console.log("error while calling getUser api",error.message)
    }
}

export const edituser =async(data,id)=>{
    try{
            return await axios.put(`${Api_Url}/${id}`,data)
    }catch(error){
        console.log("error while calling edituser api",error.message)
    }
}


export const deleteuser = async(id)=>{
    try{
            return await axios.delete(`${Api_Url}/${id}`)
    }catch(error){
            console.log("errror while calling delete api",error.message)
    }
}