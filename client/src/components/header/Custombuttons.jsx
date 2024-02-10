import { Button, Typography, styled, Box, Badge } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom';
//components
import LoginDialogue from '../login/LoginDialogue';
import Profile from './Profile';
import { useSelector } from 'react-redux';



const theme=createTheme();
const Wrapper=styled(Box)(({theme})=>({
  display: 'flex',
  margin: '0 3% 0 auto',
  marginLeft:20,
  '&> *':{
    marginRight: '40px !important',
    
    fontSize: 16,
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))


const Container=styled(Link)(({theme})=>({
  display: 'flex',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));
 

const LoginButton=styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const Custombuttons = () => {

  const [Open,setOpen]=useState(false);
  const {account, setAccount}=useContext(DataContext);
  const {cartItems}=useSelector(state=>state.cart);
  const handleOnclick=()=>{
    setOpen(true);
  }

  return (
    <ThemeProvider theme={theme}>
     <Wrapper>
      {
        account?<Profile account={account} setAccount={setAccount}/>:
        <LoginButton variant="contained" onClick={handleOnclick}>Login</LoginButton>
      }
        
        <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>
        <Container to='/cart'> 
          <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon/>
          </Badge>
          <Typography style={{marginLeft:5}}>Cart</Typography>
        </Container>
        <LoginDialogue Open={Open} setOpen={setOpen}/>
     </Wrapper>
     </ThemeProvider>
  )
}

export default Custombuttons
