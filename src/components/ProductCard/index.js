import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { addItem, updateItem } from '../../utils/helpers';


export default function ProductCard({ product }) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem.id === product.id);
        if (itemInCart) {
            if (itemInCart.purchaseQuantity === product.stock) {               
                return;
            }

            const purchaseQuantity = parseInt(itemInCart.purchaseQuantity) + 1;
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
        <Card sx={{ maxWidth: 345, height: "100%"}}>
            <Link to={`/products/${product.id}`} style={{textDecoration: "none", color: "inherit"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={product.image}
                    sx={{ objectFit: "contain" }}
                />
                <CardContent
                    sx={{height:"100px", wordWrap: "break-word", overflow: "hidden"}}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions>
                <Typography style={{ padding: "0 5px" }}>${product.price}</Typography>
                <button
                    className="cart-button"
                    size="small"
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            </CardActions>
        </Card>

    );
}