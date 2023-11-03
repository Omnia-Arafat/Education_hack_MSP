import styled from '@emotion/styled';
import { Backdrop, Box, Button, Modal, Typography } from '@mui/material'
// import img1 from "../../assets/icons/Vector (14).png"
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import styles from './Reset.module.css'

const ResetPassword = ({setShow}) => {


  const handleClose = () => setShow(false);


  return (

    <StyledModal
    aria-labelledby="unstyled-modal-title"
    aria-describedby="unstyled-modal-description"
    open={setShow}
    onClose={handleClose}
    slots={{ backdrop: StyledBackdrop }}
    >
    <Box sx={style}>
    <Box sx={{display:'flex',marginTop:'10px' , justifyContent:'end', alignItems:'end'}}>

    <Button onClick={handleClose} sx={{width:'24px', height:'24px'}}><CloseIcon sx={{fontSize:'20px'}}/></Button>
    
    </Box>
    
    
    
    <Box sx={{marginTop:'15px', width:'300px', height:'20px'}}>
    
    <Typography variant='h5' sx={{fontSize:'11px', fontWeight:'400', lineHeight:'24,39px', color:'rgba(69, 94, 116, 1)', marginLeft:"40px"}}>Enter your email address and we'll send a password <span style={{marginLeft:'30px'}}>reset to it associated to your account.</span>
</Typography>
    
    </Box>
    
  
    <Box sx={{maxWidth:'280px', height:'30px', marginTop:'20px', marginLeft:'15px'}}>
<input type="text" name="email" autocomplete="off" className={styles.register} placeholder="Email Address"/>
</Box>
 
    
    

<Box sx={{maxWidth:'280px', height:'45px', marginTop:'15px', marginLeft:'17px'}}>
<button style={{backgroundColor:'#19609C', width:"100%", height:'100%', border:'none', borderRadius:'7px', color:'white', fontSize:'20px', fontWeight:'600px'}}>
Reset password</button>
</Box>
    
    
    
    
    
    
    
    
    </Box>
    </StyledModal>

    )
}

export default ResetPassword












const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: "320px",
  height:"200px",
  borderRadius: '8px',
  // padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  // boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});