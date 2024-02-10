import styled from '@emotion/styled'
import { Box, Typography , Menu, MenuItem} from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
     margin-top: 5px;

`;
const Logout=styled(Typography)`
       font-size:14px;
       margin-left:20px;
`

const Profile = (props) => {
    const [open,setOPen]=useState(false)
    const handleClick=(event)=>{
        setOPen(event.currentTarget);
    }
    const handleClose=()=>{
        setOPen(false);
    }
    const logoutUser=()=>{
        props.setAccount('');
    }
  return (
    <>
      <Box onClick={handleClick}><Typography style={{marginTop:3, width:135,cursor:'pointer'}}>{props.account}</Typography></Box>
      <Component
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
            <PowerSettingsNewIcon color='primary' fontSize='small'/>
            <Logout>
                 Logout
            </Logout>
        </MenuItem>
         
      </Component>
    </>
  )
}

export default Profile
