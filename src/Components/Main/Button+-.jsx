import { IconButton, Box, Typography } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { useState } from 'react';


const ButtonDecrementIncrement = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'grow', justifyContent: 'center', backgroundColor: '#f7f8fd', border: "1px solid #ddd", borderRadius: "4px", width: '130px', gap: 1.5 }}>

            <IconButton size="small" onClick={decrement} color="warning">
                <RemoveIcon />
            </IconButton>

            <Typography sx={{ margin: '0 8px', paddingTop: '9px', fontSize: '13px' }}>
                {count}
            </Typography>

            <IconButton size="small" onClick={increment} color="warning">
                <AddIcon />
            </IconButton>

        </Box>
    )
}

export default  ButtonDecrementIncrement
