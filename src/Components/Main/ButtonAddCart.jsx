import { Box, Button } from '@mui/material'
import React from 'react'

const ButtonAddCart = () => {
  return (
    <Button variant="contained" color="warning" sx={{width:'200px',display: 'flex', alignItems: 'center' }}>
        <Box>
            <img src='icon-cart.svg'></img>
            <span>Add to cart</span>
        </Box>

    </Button>
  )
}

export default ButtonAddCart
