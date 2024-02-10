import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState, useCallback } from 'react'
 


const Heading=styled(Box)`
     padding: 15px 24px;
     background: #fff;
     border-bottom: 1px solid #f0f0f0
`;

const Header=styled(Typography)`
     color: #878787;
`;

const Container=styled(Box)`
    padding: 15px 24px;
    background:#fff;
    &>p {
      margin-bottom: 20px;
      font-size: 14px;
    }
    &>h6 {
      margin-bottom: 20px;
    }
`;

const Price=styled(Box)`
   float: right;
   
`;
const Discount=styled(Typography)`
    color:green;
    font-weight:500;

`
const TotalView = ({cartItems}) => {

  const [price,SetPrice]=useState(0);
  const [discount,Setdiscount]=useState(0);
  
  const totalAmt = useCallback(() => {
    let price = 0, discount = 0;
    cartItems.map(item => {
      price += item.price.mrp;
      discount += (item.price.mrp - item.price.cost);
      return null;
    });
    SetPrice(price);
    Setdiscount(discount);
  }, [cartItems, SetPrice, Setdiscount]);
  
  useEffect(()=>{
    totalAmt();
  },[totalAmt])

   
  return (
     <Box>
      <Heading>
        <Header>PRICE DETAILS</Header>
      </Heading>
      <Container >
        <Typography>Price({cartItems?.length})
           <Price component='span'>₹{price}</Price>
        </Typography>
        <Typography>Discount 
           <Price component='span'>-₹{discount}</Price>
        </Typography>
        <Typography>Delivery Charges
           <Price component='span'>₹40</Price>
        </Typography>
        <Typography variant='h6'>Total Amount
           <Price component='span'>₹{price-discount+40}</Price>
        </Typography>
        <Discount>You Will Save ₹{discount-40} on this order</Discount>
      </Container>
     </Box>
  )
}

export default TotalView
