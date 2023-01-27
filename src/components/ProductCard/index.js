import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { addItem, updateItem } from '../../utils/helpers';
import './style.css';


export default function ProductCard({ product }) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem.id === product.id);
        if (itemInCart) {
            const purchaseQuantity = parseInt(itemInCart.purchaseQuantity) + 1
            dispatch({
                type: UPDATE_CART_QUANTITY,
                id: product.id,
                purchaseQuantity: purchaseQuantity
            })
            updateItem(product, purchaseQuantity)
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...product, purchaseQuantity: 1 }
            })
            addItem(product)
        };


    }

    return (
        <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={product.image}
                sx={{ objectFit: "contain" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography style={{ padding: "0 5px" }}>${product.price}</Typography>
                <Button
                    id='cart-button'
                    size="small"
                    onClick={addToCart}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}