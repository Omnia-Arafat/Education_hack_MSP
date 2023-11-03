import { Box, Typography } from '@mui/material'
import face from '../../../assets/Image/Facebook.PNG'
import google from '../../../assets/Image/google.PNG'
import style from './Login.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import ResetPassword from '../ResetPassword/ResetPassword';


const Login = () => {


  const [visible,setVisible]=useState(false)
  const[show,setShow]=useState(false)


  const handleVisible=()=>{
      setVisible((visible)=> !visible)
  }

  
  return (


    <Box sx={{maxWidth:'20%', alignContent:'center', margin:'0 auto', padding:'0', justifyContent:'center', marginY:'40px',}}>
<Typography component='h3' sx={{fontSize:'28px', fontWeight:'400', marginLeft:'10px'}}>Log in to your account</Typography>
<Box sx={{maxWidth:'300px', height:'50px', backgroundColor:'transparent', border:'1px solid #4192DE', borderRadius:'10px', marginTop:'20PX'}}>
<Box sx={{display:'flex'}}>
<img src={face} alt="" srcset="" style={{width:'40px', marginLeft:'10px', marginTop:'7px'}}/>
<Typography component='p' sx={{fontSize:'19px', color:'#4192DE', marginTop:'9px', marginLeft:'10px'}}>Login With Facebook</Typography>
</Box>
</Box>


<Box sx={{maxWidth:'300px', height:'50px', backgroundColor:'transparent', border:'1px solid #E54B4B', borderRadius:'10px', marginTop:'20PX'}}>
<Box sx={{display:'flex'}}>
<img src={google} alt="" srcset="" style={{width:'60px', marginLeft:'10px', marginTop:'10px'}}/>
<Typography component='p' sx={{fontSize:'19px', color:'#E54B4B', marginTop:'9px', marginLeft:'2px'}}>***********</Typography>
</Box>
</Box>


<Typography component='h3' sx={{fontSize:'16px', fontWeight:'300',  alignItems:'center', margin:'15px 130px'}}>XOR</Typography>

<form>

<Box sx={{maxWidth:'300px', height:'50px'}}>
<input type="text" name="email" autocomplete="off" className={style.register} placeholder="Email Address"/>
</Box>



<Box sx={{maxWidth:'300px', height:'50px', marginTop:'20px', display:'flex', justifyContent:'space-between', position:'relative'}}>
<input type={visible?"text":"password"} name="password"  className={style.register} placeholder="Password"/>
<Box sx={{backgroundColor:'transparent', border:'none', position:'absolute', right:'10px', marginY:'14px', fontSize:'12px', color:'#4192DE', cursor:'pointer'}} onClick={handleVisible}>{visible? <VisibilityIcon/>:<VisibilityOffIcon/>}</Box>
</Box>

<Box sx={{marginTop:'15px'}}>
<Link style={{  fontSize:'15px', color:'#4192DE', marginLeft:'160px'}} onClick={()=>setShow(true)} > Forgotten password</Link>

</Box>

<Box sx={{maxWidth:'300px', height:'55px', marginTop:'30px'}}>
<button style={{backgroundColor:'#19609C', width:"100%", height:'100%', border:'none', borderRadius:'10px', color:'white', fontSize:'20px', fontWeight:'600px'}}>
Sign In
</button>
</Box>

</form>


<Box sx={{display:'flex', marginTop:'40px'}}>
<Typography component='h3' sx={{fontSize:'14px', fontWeight:'400', marginX:'5px'}}>Don't have an account? Click here to</Typography>
<Link style={{ marginTop:'1px', fontSize:'13px', color:'#4192DE'}} to='/register'> Sign Up</Link>
</Box>


{show&& <ResetPassword show={show} setShow={setShow}/>}
</Box>


  )
}

export default Login