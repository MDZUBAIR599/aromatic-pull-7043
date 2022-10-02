import React from 'react';
import { Box, Button, HStack, Input, InputGroup, PinInput, PinInputField } from '@chakra-ui/react'
import { useState } from 'react';
import {GrFacebook,GrTwitter,} from 'react-icons/gr';
import {FaWhatsappSquare} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const navigate = useNavigate()
  const [signIn, setSignIn] = useState(true);
  const [otp,setOtp] = useState(false);
  const [register,setRegister] = useState(false);
  const [loginSuc,setLoginSuc] = useState(false);
  const [mobile,setMobile] = useState("");
  const [pin,setPin]=useState(-1)
 
 const handlePin = (e)=>{
   setPin(e.target.value)
 }
  const handleOtp = ()=>{
      if(mobile.length==10){
        setSignIn(false);
      setOtp(true)
      }
  }
  const handleRegister=()=>{
    if(pin>=0){
      setSignIn(false);
      setOtp(false);
    }
    setTimeout(()=>{
      setRegister(true);
      setLoginSuc(false);
    },3000)
    setLoginSuc(true)
  }
  const handleLoginSuccess = ()=>{
      navigate("/")
      setRegister(true)
      setSignIn(false);
  }
  return (
    
      <div style={{marginTop:"90px"}} >
      {signIn?<div style={{width:"100px",height:"100px",margin:"auto",marginBottom:"px"}} >
        <img style={{width:"100%",height:"100%"}} src="https://www.cricket.com/svgs/images/icon-128x128.png" alt="" />
      </div>:otp?<div style={{width:"100px",height:"100px",margin:"auto",marginBottom:"10px"}} >
      <img style={{width:"100%",height:"100%"}} src="https://www.cricket.com/svgs/images/icon-128x128.png" alt="" />
     
    </div>:null
    
      }
      {signIn?<div style={{padding:"5px 0",width:"550px",margin:"auto",height:"fitContent",borderRadius:"5px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",backgroundColor:"white"}} >
    <h5 style={{marginLeft:"15px",color:"rgb(119,119,119)"}} >Login/Register to Cricket.com</h5>
    <Box p={4}  >
       
       <InputGroup>
       
       <Input variant='flushed' type='tel' onChange={(e)=>setMobile(e.target.value)}  placeholder='+91 Mobile number' />
       </InputGroup>
       <div style={{margin:"auto",width:"250px",marginTop:"50px"}}>
       <Button bg='rgb(119,119,119)' color="white" width='250px' height='35px' onClick={handleOtp} >Get OTP</Button>
       </div>
       <span style={{margin:'0 0 0 250px',color:"rgb(119,119,119)"}} >or</span>
       <div style={{marginTop:"30px", marginLeft:"130px"}} >
         <span style={{color:"rgb(119,119,119)"}} >Loggin in from outside India? <a href='#d' style={{color:"red"}} >Click Here</a></span>
       </div>
       
    </Box>
   </div>: otp?
   <div style={{padding:"5px 0",width:"550px",margin:"auto",height:"fitContent",borderRadius:"5px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",backgroundColor:"white"}} >
    <Box p={4} >
    <h5 style={{marginLeft:"15px",color:"rgb(119,119,119)"}} >Enter OTP</h5>
       
    <HStack style={{ padding:"0 0 0 120px "}} >
         <PinInput placeholder='' focusBorderColor='none' >
            <PinInputField border='none' borderBottom='2px solid gray' borderRadius="none"  />
            <PinInputField border='none' borderBottom='2px solid gray' borderRadius="none"  />
            <PinInputField border='none' borderBottom='2px solid gray' borderRadius="none" />
            <PinInputField border='none' borderBottom='2px solid gray' borderRadius="none" />
            <PinInputField border='none' borderBottom='2px solid gray' borderRadius="none" />
            <PinInputField border='none' borderBottom='2px solid gray' borderRadius="none"onChange={(e)=>handlePin(e)} />
          </PinInput>
    </HStack>
    <div style={{marginTop:"30px", marginLeft:"130px"}} >
         <span style={{color:"rgb(119,119,119)"}} >Didn't receive otp? <a href='#d' style={{color:"red"}} >Resend otp</a></span>
       </div>
      
       <div style={{margin:"auto",width:"250px",marginTop:"50px"}}>
       <Button bg='rgb(119,119,119)' color="white" width='250px' height='35px' onClick={handleRegister}>Confirm</Button>
       </div>
    </Box>
   </div>:loginSuc?
    <div style={{padding:"50px 30px",width:"550px",margin:"auto",height:"fitContent",borderRadius:"5px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",backgroundColor:"white"}} >
         <div style={{width:"180px",margin:"auto",padding:"20px 0"}} >
         <p style={{fontSize:"x-large",fontWeight:"bold",color:"red"}} >Login Success</p>
         </div>
         <div style={{width:"150px",margin:"auto"}} >

          <img src="https://www.cricket.com/pngs/tick.png" alt="" />
         </div>
         <div style={{width:"100%", padding:"10px"}}>
           <div style={{border:"7px solid red",width:"70%",margin:"auto",marginTop:"10px",borderRadius:"5px",backgroundColor:"red"}} ></div>
           <div style={{border:"5px solid red",width:"50%",margin:"auto",marginTop:"10px",borderRadius:"5px",backgroundColor:'red'}} ></div>
           <div style={{border:"3px solid red",width:"25%",margin:"auto",marginTop:"10px",borderRadius:"5px",backgroundColor:'red'}} ></div>

         </div>
    </div>
   
   :<div style={{padding:"5px 10px",width:"550px",margin:"auto",height:"fitContent",borderRadius:"5px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",backgroundColor:"white"}} >
           <div style={{padding:"0 0 0 200px"}} >
        <img src="https://www.cricket.com/svgs/loginteam.svg" alt="" />
           </div>
          <Box p={4}  >
        <div style={{width:"80%",margin:"auto"}}>
        <InputGroup>
       <Input variant='flushed' type='text'  placeholder='Enter Your Name' />
       </InputGroup>
       <br/>
       <InputGroup>
       <Input variant='flushed' type='tel'  placeholder='+91 Mobile number' />
       </InputGroup>
       <br/>
       <InputGroup>
       <Input variant='flushed' type='email'  placeholder='Enter Your Email' />
       </InputGroup>
       <br/>
        </div>
       <div style={{margin:"auto",width:"150px",margin:"auto",marginTop:"50px"}}>
       <Button bg='rgb(119,119,119)' color="white" width='150px'height='35px' onClick={handleLoginSuccess} >Done</Button>
       </div>
       <div>
        <p style={{fontSize:"x-small",fontWeight:"bold",padding:"10px 0 10px 150px"}} >Love CRICKET.COM? Share With Friends</p>
        <div style={{display:"flex",width:"80%",margin:"auto", justifyContent:"space-around"}} >
        <GrFacebook fontSize='xx-large' color='royalblue' />
        <GrTwitter fontSize='xx-large' color='skyblue' />
        <FaWhatsappSquare fontSize='xx-large' color='lightgreen' />
        </div>
       </div>
       <div style={{margin:"auto",width:"80px",padding:"10px 0 0 10px"}} >
        <a href='#5' style={{color:"tomato",fontWeight:"bold"}} >Sign Out</a>
       </div>
    </Box>
   </div>
    }
    </div>
  )
}

export default LoginPage