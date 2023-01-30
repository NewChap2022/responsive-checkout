import * as React from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function Home({ products }) {
    const currentCategory = useSelector(state => state.currentCategory);
    const filterProducts = () => {
        if (!currentCategory) {
          return products;
        }
        return products.filter(
          (product) => product.category === currentCategory
        );
      };
    return (
        <div style={{margin: "30px"}}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
            >
                {filterProducts().map((product) => (
                    <Grid xs={12} sm={6} md={4} lg={2} item sx={{marginY: "5px"}} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Cart products={products} />
        </div>
    )
}