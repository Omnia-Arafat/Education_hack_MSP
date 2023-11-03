import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../assets/Image/img1.PNG'
import img2 from '../../assets/Image/img2.PNG'
import img3 from '../../assets/Image/img3.PNG'
import img4 from '../../assets/Image/img4.PNG'
import CustomerBox from './CustomerBox'

const Customer = () => {
  return (
  <Box>
    <Box sx={{textAlign:'center'}}>
<Typography component='h1' sx={{fontSize:'35px', fontWeight:'600', color:'black'}}> Customer Spotlight</Typography>
<Typography component='p' sx={{fontSize:'20px', color:'#707070', marginTop:'5px'}}> You’ll be in Good Company</Typography>
 
    </Box>



    <Grid container spacing={4}>
<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{width:'552px' , height:'252px',  boxShadow:"1px 1px 1px 1px #B9B8B8", borderRadius:'10px', marginLeft:'200px', marginTop:'50px'}}>
<CustomerBox img={img1} name='Robort' title="It's a very good app to easily add links anywhere It is very useful to be able to link several social media accounts in one link on one website Very reliable.Great!"/>

  </Box>
</Grid>



<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{width:'552px' , height:'252px',  boxShadow:"1px 1px 1px 1px #B9B8B8", borderRadius:'10px', marginLeft:'0px', marginTop:'50px'}}>

  <CustomerBox img={img2} name='Roy Molata' title="This application is very helpful for my business, hopefully with the help of this application my efforts can go further, and hopefully this application can continue to develop."/>

  </Box>
</Grid>



<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{width:'552px' , height:'252px',  boxShadow:"1px 1px 1px 1px #B9B8B8", borderRadius:'10px', marginLeft:'200px', marginTop:'20px'}}>
  <CustomerBox img={img3} name='Terri Jacobs' title="This is amazing! You get everything you need in the free version to get started and then to tweak the look of your page"/>


  </Box>
</Grid>



<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{width:'552px' , height:'252px',  boxShadow:"1px 1px 1px 1px #B9B8B8", borderRadius:'10px', marginLeft:'0px', marginTop:'20px'}}>
  <CustomerBox img={img4} name='Leticia' title="Exactly what I needed! I loved it! Everything is very cool and mega convenient! Great respect to the developers for this application."/>


  </Box>
</Grid>

    </Grid>



    <Box sx={{ marginTop:'90px', textAlign:'center'}}>
    <Typography component='p' sx={{fontSize:'35px',  color:'black', }}> Link to everywhere</Typography>

<Box sx={{marginTop:'30px'}}>
<TextField  className='datePickerEditStyle'sx={{marginTop:"10px"}}  placeholder="yournamehere" id="name" name='name'   />
<Button variant='contained' sx={{fontSize:'12px', backgroundColor:'#19609C', color:'white', width:'141px', height:'48px', textTransform:'capitalize', marginLeft:'20px', marginTop:'10px', border:'2px solid #54B99B'}}>Create Your Page</Button>
</Box>
</Box>
  </Box>
  )
}

export default Customer
