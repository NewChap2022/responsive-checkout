import * as React from 'react';
import { useParams, Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Cart from '../components/Cart';

import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_CART_QUANTITY, ADD_TO_CART } from '../utils/actions';
import { updateItem, addItem } from '../utils/helpers';

export default function Detail({ products }) {
    const cart = useSelector(state => state.cart);
    const [quantity, setQuantity] = React.useState();
    const dispatch = useDispatch();
    const { id } = useParams();
    const item = products.find(product => product.id === parseInt(id));


    const onChange = (e) => {
        setQuantity(e.target.value);
    }

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                id: item.id,
                purchaseQuantity: quantity
            })
            updateItem(item, quantity)
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: quantity }
            })
            addItem(item)
        };
    }
    return (
        <div style={{ textAlign: "center" }}>
            <Grid container
                sx={{
                    boxShadow: "0px 2px 4px -1px",
                    marginY: "20px",
                    textAlign: "start"
                }}>
                <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
                    <img src={item.image} style={{ width: "300px", objectFit: "contain" }} alt="product" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div>
                        <p style={{ fontStyle: "italic", margin: "10px 0" }}>{item.category.toUpperCase()}</p>
                        <h1 style={{ margin: "0px" }}>
                            {item.name.toUpperCase()}
                        </h1>
                        <h4>Description:</h4>
                        <p>{item.description}</p>
                        <h3>${item.price}</h3>
                        <Grid
                            container
                            sx={{ marginBottom: "10px" }}
                        >
                            <Grid item>
                                <input
                                    type="number"
                                    defaultValue={1}
                                    max={item.stock}
                                    style={{ width: "50px", height: "25px" }}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item>
                                <button
                                    className="cart-button"
                                    size="small"
                                    onClick={addToCart}
                                >
                                    Add to Cart
                                </button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <Button variant="contained" color="secondary">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>Back to Home Page</Link>
            </Button>
            <Cart products={products} />
        </div>
    )
}