import * as React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home({products}) {
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}