import React from 'react'
import Navbar from './Navbar'
import { Box, styled } from '@mui/material'
import Banner from './Banner'
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Actions/productsAction';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import Midsection from './Midsection';

const Component=styled(Box)`
      padding: 20px 10px;
      background: #F2F2F2;
`
//import { Fragment } from 'react'

const Home = () => {

 const {products} = useSelector(state=>state.getProducts);
   console.log(products);

  const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getProducts())
    },[dispatch])
  return (
    <>
        <Navbar/>
        <Component>
           <Banner />
           <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <Midsection/>
           <Slide products={products} title="Discounts for You" timer={false}/>
           <Slide products={products} title="Suggesting Items" timer={false}/>
           <Slide products={products} title="Top Selection" timer={false}/>
           <Slide products={products} title="Recommended Items" timer={false}/>
           <Slide products={products} title="Trending Offers" timer={false}/>
           <Slide products={products} title="Season's Top Picks" timer={false}/>
           <Slide products={products} title="Top Deals on Accessories" timer={false}/>
        </Component>
        
    </>
    
  )
}

export default Home
