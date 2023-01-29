import * as React from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import Grid from '@mui/material/Grid';

export default function Home({ products }) {
    return (
        <div style={{margin: "30px"}}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
            >
                {products.map((product) => (
                    <Grid xs={12} sm={6} md={4} lg={2} item sx={{marginY: "5px"}} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Cart products={products} />
        </div>
    )
}