import React, { useEffect, useState } from 'react'
import { InputBase,Box, List, ListItem } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/productsAction';
import { Link } from 'react-router-dom';

const SearchContainer= styled(Box)`
        background:  #fff;
        width: 38%;
        border-radius: 2px;
        margin-left: 10px;
        display: flex;
`;
const InputSearchBase=styled(InputBase)`
      padding-left: 20px;
      width: 100%;
      font-size: unset;
`;
const Searchiconwrapper=styled(Box)`
        color: blue;
        padding: 5px;
        display: flex;
`;

const ListWrapper=styled(List)`
        position:absolute;
        background:#ffffff;
        color:#000;
        margin-top: 36px;

`;
const Search = () => {

   const [text,setText]=useState('');

   const {products}=useSelector(state => state.getProducts);
   const dispatch=useDispatch();

   useEffect(()=>{
    dispatch(getProducts())
   },[dispatch])

   const getText=(text)=>{
        setText(text);
   }
  return (
     <SearchContainer >
        <InputSearchBase
           placeholder='Search for products, brands and more' id='abcd'
            onChange={(e)=>getText(e.target.value)} value={text}/>
            
        <Searchiconwrapper>
          <SearchIcon/>  
        </Searchiconwrapper>
        {
         text &&
         <ListWrapper>
            {
               products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                 <ListItem>
                  <Link to={`/product/${product.id}`}
                  onClick={()=>setText('')}
                  style={{textDecoration:'none',color:'inherit'}}> 
                  {product.title.longTitle}
                  </Link>
                 </ListItem> 
               ))
            }
         </ListWrapper>
        }
     </SearchContainer>
  )
}

export default Search
