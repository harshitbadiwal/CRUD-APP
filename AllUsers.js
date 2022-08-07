import {Table, TableBody, TableCell, TableHead, TableRow,styled, Button, variant} from "@mui/material";

import React from "react";
import { useEffect } from "react";

import { getUsers,deleteuser } from "../Event/api";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)
`width:90%;
margin:25px auto 0 auto
`
const Thead = styled(TableRow)`
background:#000;
& > th{
    color:#fff;
    font-size:20px;
}`

const Tbody =styled(TableRow)`
&>td{
    font-size:20px
}`

const AllUsers=()=>{
    const [user, setUser]= useState([])

    useEffect(()=>{
        getUsersDetails()
 
    },[])
 
    const getUsersDetails =async()=>{
        let response= await getUsers()
      
        setUser(response.data)
    }

    const deleteuserdata = async(id)=>{
        await deleteuser(id)
        getUsersDetails()
    }

    return<>
       <StyledTable>
        <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </Thead>
        </TableHead>
        <TableBody>
            {
                user.map(user=>(
                    <Tbody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>

                            <Button variant="contained" color="secondary" onClick={()=>deleteuserdata(user.id)} >Delete</Button>
                        </TableCell>
                    </Tbody>
                ))
            }
        </TableBody>
       </StyledTable>
    </>
}

export default AllUsers