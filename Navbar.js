
import { AppBar, Toolbar ,Typography, styled, FormGroup} from "@mui/material";
import {NavLink} from "react-router-dom"

const Header = styled(AppBar)`
background: #111111;
`
const Tabs = styled(NavLink)`
margin-right: 20px;
font-size: 20px;
color: inherit;
text-decoration: none`



const Navbar =()=>{
  
    return<>
    <Header position="static">
        <Toolbar>
        <Tabs to='/'>Home</Tabs>
        <Tabs to='/AllUsers'>All User</Tabs>
        <Tabs to='/Add_Users'>Add User</Tabs>

        </Toolbar>
    </Header>
    </>
       
}
export default Navbar