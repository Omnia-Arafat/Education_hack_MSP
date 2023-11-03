import { Box, Typography } from '@mui/material'
import face from '../../../assets/Image/Facebook.PNG'
import google from '../../../assets/Image/google.PNG'
import style from './Register.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Register = () => {

    const [visible,setVisible]=useState(false)

    const handleVisible=()=>{
        setVisible((visible)=> !visible)
    }


    // let navigate=useNavigate()

    // const formik = useFormik({
    //     initialValues:{
    //        email:"",
    //       password:""
    //     },
    
    //     validationSchema: Yup.object({
    //       email: Yup.string().email('Invalid email format').required("Email is required"),
    //       password: Yup.string().required("Password is required"),
    //     }),
    
    //     onSubmit:(values)=>{
    //       Base_Url.post("login", values).then((res)=>{     
    //         if(res.data){
    //           localStorage.setItem('token', res.data.token.accessToken)
    //           saveUser()
    //           swal("Login Successfully!", "", "success");
    //           navigate('/home', {replace:true})          
    //         }
    //      }).catch((error)=>{
    //     //  console.log(error.response.data.message);
    //     toast.error('Failed Email or Paaword')
    //      })
    //              }
    //   })
    
    




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
<input type="text" name="email" autocomplete="off" className={style.register} placeholder="Verification code"/>
<button style={{backgroundColor:'transparent', border:'none', position:'absolute', right:'10px', marginTop:'19px', fontSize:'12px', color:'#4192DE', cursor:'pointer'}}>Send Code</button>
</Box>

<Box sx={{maxWidth:'300px', height:'50px', marginTop:'20px', display:'flex', justifyContent:'space-between', position:'relative'}}>
<input type={visible?"text":"password"} name="password"  className={style.register} placeholder="Password"/>
<Box sx={{backgroundColor:'transparent', border:'none', position:'absolute', right:'10px', marginTop:'14px', fontSize:'12px', color:'#4192DE', cursor:'pointer'}} onClick={handleVisible}>{visible? <VisibilityIcon/>:<VisibilityOffIcon/>}</Box>
</Box>

<Box sx={{maxWidth:'300px', height:'50px', marginTop:'20px', display:'flex', justifyContent:'space-between', position:'relative'}}>
<input type={visible?"text":"password"} name="password"  className={style.register} placeholder="Confirm Password"/>
<Box sx={{backgroundColor:'transparent', border:'none', position:'absolute', right:'10px', marginTop:'14px', fontSize:'12px', color:'#4192DE', cursor:'pointer'}} onClick={handleVisible}>{visible? <VisibilityIcon/>:<VisibilityOffIcon/>}</Box>
</Box>

<Box sx={{maxWidth:'300px', height:'55px', marginTop:'30px'}}>
<button style={{backgroundColor:'#19609C', width:"100%", height:'100%', border:'none', borderRadius:'10px', color:'white', fontSize:'20px', fontWeight:'600px'}}>
Sign up
</button>
</Box>

</form>


<Box sx={{display:'flex', marginTop:'40px'}}>
<Typography component='h3' sx={{fontSize:'18px', fontWeight:'400', marginX:'5px'}}>Already have an account?</Typography>
<Link style={{ marginTop:'1px', fontSize:'17px', color:'#4192DE'}} to='/login'>  Log in.</Link>
</Box>

</Box>
    )
}

export default Register