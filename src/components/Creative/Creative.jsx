import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/Image/section3.PNG'


const Creative = () => {
  return (

    <Box>


<Box>
<Grid container spacing={2}>



<Grid item xs={12} md={6} xl={5} lg={5}>
  <Box sx={{marginTop:'40px', marginLeft:'70px'}}>
    <img src={img} alt="" srcset="" />
  </Box>
</Grid>




<Grid item xs={12} md={6} xl={7} lg={7}>

<Box sx={{marginTop:'180px'}}>
<Typography component='h3' sx={{fontSize:'20px', fontWeight:'bold',marginLeft:'60px'}}>Create</Typography>

<Box sx={{marginLeft:'30px'}}>




<Box sx={{display:'flex', marginTop:'30px'}}>
<Box sx={{width:'8px', height:'8px', borderRadius:'50%',backgroundColor:'#54B99B'}}></Box>
<Typography component='p' sx={{fontSize:'16', marginLeft:'10px',marginTop:'-7px'}}>Customize your page to fit your brand with your logo.</Typography>
</Box>

<Box sx={{display:'flex', marginTop:'20px'}}>
<Box sx={{width:'8px', height:'8px', borderRadius:'50%',backgroundColor:'#54B99B'}}></Box>
<Typography component='p' sx={{fontSize:'16', marginLeft:'10px',marginTop:'-7px'}}>Beautiful page filled with links to all your online content.</Typography>
</Box>


<Box sx={{display:'flex', marginTop:'20px'}}>
<Box sx={{width:'8px', height:'8px', borderRadius:'50%',backgroundColor:'#54B99B'}}></Box>
<Typography component='p' sx={{fontSize:'16', marginLeft:'10px',marginTop:'-7px'}}>Look great at every screen size.</Typography>
</Box>




</Box>
    
</Box>

</Grid>






</Grid>
</Box>


    </Box>

    )
}

export default Creative