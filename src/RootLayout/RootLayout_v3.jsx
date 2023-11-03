
// ========================settingbar=======================

import { Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Settingbar from '../components/Settingbar'
import { Outlet } from 'react-router-dom'

const RootLayout_v3 = () => {
    return (
        <>
      
  <Settingbar>
  <Outlet/>
  </Settingbar>
  </>
        
      
    )
}

export default RootLayout_v3
