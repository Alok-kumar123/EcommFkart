import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
 

const app= express();
dotenv.config();
const PORT= process.env.port || 8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const URL= process.env.MONGODB_URI||`mongodb://${USERNAME}:${PASSWORD}@ac-jpdynfb-shard-00-00.xlvron0.mongodb.net:27017,ac-jpdynfb-shard-00-01.xlvron0.mongodb.net:27017,ac-jpdynfb-shard-00-02.xlvron0.mongodb.net:27017/?ssl=true&replicaSet=atlas-n3a1ua-shard-0&authSource=admin&retryWrites=true&w=majority`;

app.use(cors(
 {
  origin:["https://ecomm-fkart-client.vercel.app"],
  methods:["POST","GET","PUT"],
  credentials:true
 }
));  //Cross origin resource sharing
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Router);

Connection(URL);
 
app.listen(PORT,()=>console.log(`server is live on port ${PORT}`))
DefaultData();  

 
