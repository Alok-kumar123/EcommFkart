import express from 'express';
import {userLogin, userSignup} from '../controller/UserController.js'
import { getProductById, getProducts } from '../controller/ProductController.js';
 
const router=express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);
 
export default router; 

