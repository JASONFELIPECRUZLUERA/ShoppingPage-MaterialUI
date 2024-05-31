import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import ButtonDecrementIncrement from './Button+-'
import ButtonAddCart from './ButtonAddCart'



const ProductDescription = () => {
    return (
        <Card sx={{ width: '500px', height: '400px', marginTop:'10px' }}>

            <CardContent sx={{marginTop:'20px', marginLeft:'20px'}}>

                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>SNEAKER COMPANY</Typography>

                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Fall Limited Edition Sneakers</Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</Typography>

                <Box sx={{ display: 'flex', alignItems: 'column', gap: 1, textAlign: 'center', alignItems: 'center' }}>

                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 30 }}>$125.00</Typography>

                    <Box sx={{ width: '40px', height: '25px', backgroundColor: 'black', borderRadius: '5px' }}>
                        <Typography variant="body1" color='white' sx={{ paddingLeft: '4px' }}>50%</Typography>
                    </Box>


                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>$250.00</Typography>


            </CardContent>

            <Box sx={{display: 'flex', alignItems: 'column', gap: 1, marginLeft:'30px'}}>

                <ButtonDecrementIncrement></ButtonDecrementIncrement>
                <ButtonAddCart></ButtonAddCart>
                
            </Box>  

    
            


        </Card>
    )
}

export default ProductDescription
