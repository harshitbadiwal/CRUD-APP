import React, { useState , useEffect} from "react";
import { FormGroup,FormControl,Input,InputLabel,Typography,variant,Button,styled } from "@mui/material";
import { getuser,edituser } from "../Event/api";
import { useNavigate,useParams} from "react-router-dom"

const Container = styled(FormGroup)`
width: 60%;
margin: 5% auto 0 auto;
&> div{
    margin:15px
}`

const intialvalue={
    name:'', 
    username:'',
    email:'',
    phone:'',
}

const EditUsers=()=>{

    const [user , setuser] = useState(intialvalue)
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        getUserData()
    },[])

    const getUserData = async()=>{
        let response =  await getuser(id)
        setuser(response.data)
    }
    const onValueChange=(e)=>{ 
    
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user)

     }

     const  addUserDetails=async()=>{
        await edituser(user,id)
        navigate('/AllUsers')

    }

    return<>
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>

            </FormControl>

            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}  />
                
            </FormControl>
            
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
                
            </FormControl>

            <FormControl>
                <InputLabel>phone No.</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone} />
                
            </FormControl>
            
            <FormControl>
                <Button onClick={()=> addUserDetails()} variant="contained">Edit User</Button>
            </FormControl>
        </Container>
    </>
}

export default EditUsers