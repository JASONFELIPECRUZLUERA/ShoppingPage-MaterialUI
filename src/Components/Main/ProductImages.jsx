import { Box, Dialog, DialogContent, Grid, IconButton} from '@mui/material';
import React, { useState } from 'react'

const ProductImages = () => {

    const images = [
        'image-product-1.jpg',
        'image-product-2.jpg',
        'image-product-3.jpg',
        'image-product-4.jpg',
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [open, setOpen] = useState(false);

    const modalOpen = () => {
        setOpen(true);
    };

    const modalClose = () => {
        setOpen(false);
    };


    return (

        <Box sx={{ width: '50%' }}>

            <Box component="img" src={selectedImage} sx={{ width: '80%', height: 'auto', borderRadius: '8px', mb: 2 , cursor: 'pointer'}} onClick={modalOpen}  >
            </Box>

            <Grid container sx={{ width: '80%', height: 'auto' }}>

                {images.map((img, index) => (

                    <Grid item xs={3} key={index}>

                        <IconButton onClick={() => setSelectedImage(img)} >
                            <Box component="img" src={img} sx={{ width: '100%', height: 'auto', border: selectedImage === img ? '2px solid orange' : '2px solid transparent', borderRadius: '4px', cursor: 'pointer' }} />
                        </IconButton>

                    </Grid>
                ))}

            </Grid>


            <Dialog open={open} onClose={modalClose} PaperProps={{sx: {backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none', backdropFilter: 'blur(2px)'}}}>

                <DialogContent sx={{width:'80%' ,padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                    <Box component="img" src={selectedImage} sx={{ width: '80%', height: 'auto', borderRadius: '8px', mb: 2 }} />

                    <Grid container sx={{ width: '80%', height: 'auto' }}>

                        {images.map((img, index) => (

                            <Grid item xs={3} key={index}>

                                <IconButton onClick={() => setSelectedImage(img)} >
                                    <Box component="img" src={img} sx={{ width: '100%', height: 'auto', border: selectedImage === img ? '2px solid orange' : '2px solid transparent', borderRadius: '4px', cursor: 'pointer' }} />
                                </IconButton>

                            </Grid>
                        ))}

                    </Grid>
                </DialogContent>
            </Dialog>

            
        </Box>
    )
}

export default ProductImages
