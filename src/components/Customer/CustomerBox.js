import { Box, Typography } from '@mui/material'
import React from 'react'

const CustomerBox = ({img, name, title}) => {
  return (
    <Box>
    <Box sx={{display:'flex', marginLeft:'20px', marginTop:'10px'}}>
      <img src={img} alt="" srcset="" style={{width:'70px', marginTop:'10px'}}/>
      <Typography components='h2' sx={{fontSize:'30px', color:'balck', marginTop:'25px', marginLeft:'5px'}}> {name}</Typography>
    </Box>
    
    <Box sx={{width:'414px', height:'141px'}}>
    <Typography components='h2' sx={{fontSize:'18px', color:'balck', marginTop:'-5px', marginLeft:'94px'}}> {title}</Typography>
    
    </Box>
    
    </Box>
  )
}

export default CustomerBox
