import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/Image/imgsection4.PNG'



const Customize = () => {
  return (
    <Box>


<Box>
<Grid container spacing={2}>






<Grid item xs={12} md={6} xl={7} lg={7}>

<Box sx={{marginTop:'180px'}}>
<Typography component='h3' sx={{fontSize:'20px', fontWeight:'bold',marginLeft:'90px'}}>Customize</Typography>

<Box sx={{marginLeft:'70px'}}>




<Box sx={{display:'flex', marginTop:'30px'}}>
<Box sx={{width:'8px', height:'8px', borderRadius:'50%',backgroundColor:'#54B99B'}}></Box>
<Typography component='p' sx={{fontSize:'16', marginLeft:'10px',marginTop:'-7px'}}>Create a link with the linkfly that is cool and brandable.</Typography>
</Box>

<Box sx={{display:'flex', marginTop:'20px'}}>
<Box sx={{width:'8px', height:'8px', borderRadius:'50%',backgroundColor:'#54B99B'}}></Box>
<Typography component='p' sx={{fontSize:'16', marginLeft:'10px',marginTop:'-7px'}}>Offer multiple choices to your followers when they click on your link.</Typography>
</Box>


<Box sx={{display:'flex', marginTop:'20px'}}>
<Box sx={{width:'8px', height:'8px', borderRadius:'50%',backgroundColor:'#54B99B'}}></Box>
<Typography component='p' sx={{fontSize:'16', marginLeft:'10px',marginTop:'-7px'}}>Help your followers discover all of your recent content.</Typography>
</Box>




</Box>
    
</Box>

</Grid>






<Grid item xs={12} md={6} xl={5} lg={5}>
  <Box sx={{marginTop:'40px', marginLeft:'70px'}}>
    <img src={img} alt="" srcset="" />
  </Box>
</Grid>










</Grid>
</Box>


    </Box>  )
}

export default Customize