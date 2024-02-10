import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import Dataprovider from './context/Dataprovider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Dataprovider className="App">
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop: 54}}>
        <Routes>
          <Route path='/'
           element={<Home/>}/>
          <Route path='/product/:id' element={<DetailView/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Box> 
      
      </BrowserRouter>
    </Dataprovider>
  );
}

export default App;