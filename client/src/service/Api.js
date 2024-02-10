import axios from 'axios';

 

const URL="https://ecomm-fkart-server.vercel.app";
export const authenticateSignup = async(data) => {
    try {
       return await axios.post(`${URL}/signup`,data)
    } catch (error) {
       console.log("error while calling signup Api", error) 
    }
  
}

export const authenticateLogin = async(data) => {
   try {
      return await axios.post(`${URL}/login`,data)
   } catch (error) {
      console.log("error while calling login Api", error);
      return error.response;
   }
 
}

 

 
