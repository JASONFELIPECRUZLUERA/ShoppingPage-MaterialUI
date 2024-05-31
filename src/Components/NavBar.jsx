import { Box, Card, Container } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (

      <Card sx={{width: '100%', display: 'flex',textAlign: 'center'}}>

      <Container sx={{ display: 'flex', alignItems: 'column', gap: 10, textAlign: 'center' }}>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src='logo.svg'></img>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', width: '850px' }}>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <img src='icon-cart.svg'></img>
            <Box component="img" src='image-avatar.png' sx={{ width: '60px' }} />
          </Box>

        </Box>

      </Container>

      </Card>

  )
}

export default NavBar
