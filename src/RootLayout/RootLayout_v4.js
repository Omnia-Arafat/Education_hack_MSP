
// ========================Insightbar=======================

import { Stack } from '@mui/material'
import React from 'react'
import Insightbar from '../components/Insight/Insightbar'
import { Outlet } from 'react-router-dom'

const RootLayout_v4 = () => {
    return (
        <>
    
  <Insightbar>
  <Outlet/>
</Insightbar>  
  </>
        
      
    )
}

export default RootLayout_v4
