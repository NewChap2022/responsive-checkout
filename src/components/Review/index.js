import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { useSelector } from 'react-redux';

export default function Review({ name, address, payment }) {
    const cart = useSelector(state => state.cart);

    function calculateTotal() {
        let sum = 0;
        cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        })

        return sum.toFixed(2);
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {cart.map(product => (
                    <ListItem key={product.name}>
                        <img className="product-image" src={product.image} alt="product" />
                        <ListItemText primary={product.name} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1">
                        {calculateTotal()}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{name.firstName} {name.lastName}</Typography>
                    <Typography gutterBottom>{address.address1.concat(" ", address.address2)}</Typography>
                    <Typography gutterBottom>{address.city}, {address.state}</Typography>
                    <Typography gutterBottom>{address.country}</Typography>
                    <Typography gutterBottom>{address.zip}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Payment details
                    </Typography>
                    <Grid container>
                        <div>
                            <Grid item xs={12}>
                                <Typography gutterBottom>{payment.cardName}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom>Card Number: {payment.cardNumber}</Typography>
                                <Typography gutterBottom>Card Expire Date: {payment.expDate}</Typography>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}