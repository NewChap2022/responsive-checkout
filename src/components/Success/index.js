import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Success({products}) {
    return (
        <Box sx={{marginY: "20px", textAlign: "center"}}>
            <Typography  variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                We have emailed your order confirmation, 
                and will send you an update when your order
                has shipped.
            </Typography>
        </Box>
    )
}