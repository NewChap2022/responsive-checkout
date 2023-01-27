import * as React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { removeItem, updateItem } from '../../utils/helpers';

import Box from '@mui/material/Box';

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
                <img className="product-image" src={item.image} alt="product" />
            </Box>
            <Box sx={{ marginX: "5px" }}>
                {item.name}, ${item.price}
            </Box>
            <Box sx={{ display: "flex", marginX: "5px" }}>
                <Box>
                    <span>Qty:</span>
                    <input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                        style={{ width: "45px" }}
                    />
                </Box>
                <Box style={{ marginX: "5px", cursor: "pointer"}} onClick={() => removeFromCart(item)}>
                    🗑️
                </Box>
            </Box>
        </Box>
    )
}