import React from 'react'
import {Dialog, Box, TextField,Typography,Button, styled} from '@mui/material'
import { useState, useContext } from 'react'
import { authenticateSignup, authenticateLogin} from '../../service/Api.js';
import { DataContext } from '../../context/Dataprovider.jsx';

const Component=styled(Box)`
      height: 80vh;
      width: 90vh;
`;
const Image=styled(Box)`
     background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
     height: 100%;
     width: 30%;
     padding: 45px 35px;
     &>p, &>h5{
        color:#ffffff;
        font-weight: 600;
     }
`;
const Wrapper= styled(Box)`
      display: flex;
      flex-direction: column;
      padding: 45px 35px;
      flex: 1;
      & > div, & > button, & > p {
        margin-top: 20px;
      }
`;
const LoginButton=styled(Button)`
      text-transform: none;
      background: #fb641b;
      color: #fff;
      height: 48px;
      border-radius: 2px;
`;
const RequestOtp=styled(Box)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 58px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
text-align: center
`;
const Text=styled(Typography)`
      font-size: 12px;
      color: #878787
`;
const CreateAccount=styled(Typography)`
       font-size:14px;
       text-align: center;
       color: #2874f0;
       font-weight:600;
       cursor: pointer;
`;

const Eror=styled(Typography)`
     font-size: 10px;
     color: #ff6161;
     line-height: 0;
     margin-top: 10px;
     font-weight: 600;
`
const LoginDialogue = (props) => {
    
    
    const SignupInitialValues={
          firstname:" ",
          lastname:" ",
          username:" ",
          email:" ",
          password:" ",
          phone:" "
    };

    const LoginInit={
      username:" ",
      password:" "
    };

    const accountInitialvalues={
      login: {
        view: 'login',
        heading: 'Login',
        subHeading:'Get access to your orders, wishlist and Recommendations'
      },
      signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Signup with your mobile to get started"
      }
    }
    const [account, toggleAccount]=useState(accountInitialvalues.login);
    const {setAccount}=useContext(DataContext);
    const [Error,setError]=useState(false);
    const handleOnclose=()=>{
        props.setOpen(false);
        toggleAccount(accountInitialvalues.login);
        setError(false);
    }

    const [Signup,setSignup]=useState(SignupInitialValues);
    const [login,setLogin]=useState(LoginInit)
    const toggleSignup=()=>{
       toggleAccount(accountInitialvalues.signup)
    };
    const handleOnChange=(e)=>{
      //setSignup(e.target.value);
      setSignup({...Signup,[e.target.name]:e.target.value})
      //console.log(Signup);
};

const SignupUser=async()=>{
  let response= await authenticateSignup(Signup);
  if(!response){
    return;
  }
  handleOnclose();
  setAccount(Signup.firstname);
}

const onValuechange=(e)=>{
       setLogin({...login,[e.target.name]:e.target.value})
}

const loginUser=async()=>{
   let res=await authenticateLogin(login);
   console.log(res);
   if(res.status===200){
    handleOnclose();
    setAccount(res.data.data.firstname)
   } else{
      setError(true);
   }
}
  return (
     <Dialog open={props.Open} onClose={handleOnclose} PaperProps={{sx:{maxWidth:'unset'}}}>
          <Component>
            <Box style={{display: 'flex', height:'100%'}}>
            <Image>
              <Typography variant='h5'>{account.heading}</Typography>
              <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
            </Image>
            { account.view==='login'?
              <Wrapper>
              <TextField variant='standard' label='Enter Username' onChange={(e)=>onValuechange(e)} id='user'name='username'  />
               {Error&&<Eror>Please Enter a valid username or Password</Eror>}
              <TextField variant='standard' label='Enter Password' id='password' onChange={(e)=>onValuechange(e)} name='password' />  
              <Text>By continuing, you agree to Flipkart's Terms of Use and privacy policy.</Text>
              <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
              <Typography style={{textAlign: 'center'}}>OR</Typography>
              <RequestOtp>Request OTP</RequestOtp>
              <Typography>SignUp</Typography>
              <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant='standard' label='Enter Firstname' id='fname' name="firstname"  onChange={(e)=>handleOnChange(e)}  />
              <TextField variant='standard' label='Enter Lastname' id='lname' name='lastname' onChange={(e)=>handleOnChange(e)}   />  
              <TextField variant='standard' label='Enter Username' id='uname' name='username' onChange={(e)=>handleOnChange(e)}   />
              <TextField variant='standard' label='Enter Email' id='email' name='email' onChange={(e)=>handleOnChange(e)}   />
              <TextField variant='standard' label='Enter Password' id='pass' name='password'  onChange={(e)=>handleOnChange(e)}  />  
              <TextField variant='standard' label='Enter Phone' id='phone' name='phone' onChange={(e)=>handleOnChange(e)}   />
              <LoginButton onClick={SignupUser}>Continue</LoginButton>
            </Wrapper>
             }     
            </Box>
          </Component>
     </Dialog>
  )
}

export default LoginDialogue
