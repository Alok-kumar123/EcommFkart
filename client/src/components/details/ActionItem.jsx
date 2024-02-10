import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../Redux/Actions/CartAction';
 

const theme=createTheme();

const LeftContainer=styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding: '20px 40px'
    }
}));

const Image=styled('img')({
     
    width: '95%',
    padding: '15px'
});

const StyledButton=styled(Button)(({theme})=>({
    width: '46%',
    height: 50,
    borderRadius:2,
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
})) 
     
 

const ActionItem = ({product}) => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {id}=product;

  const [quant,setQuant]=useState(1);
  const addItem=()=>{
        dispatch(addTocart(id,quant))
        navigate('/cart');
  }

   
  return (
    <ThemeProvider theme={theme}>
    <LeftContainer>
      <Box style={{padding: '15px 20px',border: '1px solid #f0f0f0'}}>
      <Image src={product.detailUrl} alt='dimage'/>
      </Box>
      <StyledButton variant='contained' style={{marginRight:10, background:'#ff9f00'}} onClick={()=>addItem()}><ShoppingCartIcon/>Add to Cart</StyledButton>
      <StyledButton variant='contained' style={{background:'#fb541b' }}  ><FlashOnIcon/>Buy Now</StyledButton>
    </LeftContainer>
    </ThemeProvider>
  )
}

export default ActionItem
