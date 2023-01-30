import * as React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { removeItem, updateItem } from '../../utils/helpers';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './style.css';

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    
    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            id: item.id
        });
        removeItem(item)
    };

    const onChange = (e) => {
        const value = e.target.value;
        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                id: item.id
            });
            removeItem(item)
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                id: item.id,
                purchaseQuantity: parseInt(value)
            });
            updateItem(item, parseInt(value));
        }
    }

    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={4} sm={2} md={2}>
                <img className="product-image" src={item.image} alt="product" />
            </Grid>
            <Grid item xs={8} sm={6} md={6} sx={{display: 'flex', alignItems: "center"}}>
                <Box>{item.name}</Box> 
                <Box sx={{marginLeft: "5px"}}>${item.price}</Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box>
                    <span>Qty:</span>
                    <input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                        style={{ width: "45px" }}
                        max={item.stock}
                    />
                </Box>
                <Box style={{ marginX: "5px", cursor: "pointer"}} onClick={() => removeFromCart(item)}>
                    🗑️
                </Box>
            </Grid>
        </Grid>
    )
}