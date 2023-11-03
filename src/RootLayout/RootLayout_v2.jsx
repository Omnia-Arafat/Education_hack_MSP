
// =====================sidebar=========================

import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'

const RootLayout_v2 = () => {
  return (
    <>
        <div >
        </div>
        <div >
          <Sidebar>
          <Outlet />
          </Sidebar>
        </div>
    </>


  )
}

export default RootLayout_v2
