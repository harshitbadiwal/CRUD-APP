import React, { useState } from "react";
import { FormGroup,FormControl,Input,InputLabel,Typography,variant,Button,styled } from "@mui/material";
import { addUser } from "../Event/api";
import { useNavigate} from "react-router-dom"

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

const Add_Users=()=>{

    const [user , setuser] = useState(intialvalue)
    const navigate = useNavigate()
    const onValueChange=(e)=>{ 
    
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user)

     }

     const  addUserDetails=async()=>{
        await addUser(user)
        navigate('/AllUsers')

    }

    return<>
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" />

            </FormControl>

            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" />
                
            </FormControl>
            
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
                
            </FormControl>

            <FormControl>
                <InputLabel>phone No.</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" />
                
            </FormControl>
            
            <FormControl>
                <Button onClick={()=> addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>
    </>
}

export default Add_Users