import React from 'react'
import ProductDescription from './ProductDescription'
import ProductImages from './ProductImages'
import { Box } from '@mui/material'


const MainPage = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop:'60px'}}>

      <ProductImages></ProductImages>
      <ProductDescription></ProductDescription>

    </Box>

  )
}

export default MainPage
