import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm({ payment }) {
    console.log(payment)
    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" name="cardName" label="Name on card" fullWidth defaultValue={payment && payment.cardName} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardNumber" name="cardNumber" label="Card number" fullWidth defaultValue={payment && payment.cardNumber} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" name="expDate" label="Expiry date" fullWidth defaultValue={payment && payment.expDate} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        name="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        defaultValue={payment && payment.cvv}
                    />
                </Grid>
                {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
            </Grid>
        </Box>
    );
}
