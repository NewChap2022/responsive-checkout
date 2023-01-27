import * as React from 'react';
import ProductCard from '../components/ProductCard';
import Grid from '@mui/material/Grid';

export default function Home({products}) {
    return (
        <Grid 
            container   
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            {products.map((product) => (
                <Grid xs={12} sm={6} md={4} lg={2} sx={{marginY: "10px"}} item key={product.id}>
                <ProductCard  product={product} />
                </Grid>
            ))}
        </Grid>
    )
}