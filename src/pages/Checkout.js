import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_CART } from '../utils/actions';
import { clearCart } from '../utils/helpers';

import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import Review from "../components/Review";
import Success from '../components/Success';

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout({ products }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const [activeStep, setActiveStep] = React.useState(0);
    const [address, setAddress] = React.useState();
    const [name, setName] = React.useState();
    const [payment, setPayment] = React.useState();

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm name={name} address={address} />
            case 1:
                return <PaymentForm payment={payment} />
            case 2:
                return <Review name={name} address={address} payment={payment} />;
            case 3:
                return <Success />;
            default:
                throw new Error("Unknown step");
        }
    }

    const addressFormInfo = (event) => {
        const data = new FormData(event.currentTarget);
        setName({
            firstName: data.get("firstName"),
            lastName: data.get("lastName")
        })
        setAddress({
            address1: data.get("address1"),
            address2: data.get("address2"),
            city: data.get("city"),
            state: data.get("state"),
            country: data.get("country"),
            zip: data.get("zip"),
        })
    };

    const paymentFormInfo = (event) => {
        const data = new FormData(event.currentTarget);
        setPayment({
            cardName: data.get("cardName"),
            cardNumber: data.get("cardNumber"),
            expDate: data.get("expDate"),
            cvv: data.get("cvv")
        })
    };

    const successHandle = () => {
        cart.forEach(item => {
            const updatedProduct = products.find(product => product.id === item.id);
            updatedProduct.stock = updatedProduct.stock - item.purchaseQuantity;
        });
        dispatch({ type: CLEAR_CART });
        clearCart();
    }

    const handleForm = (event) => {
        event.preventDefault();
        if (activeStep === 0) {
            addressFormInfo(event)
        } else if (activeStep === 1) {
            paymentFormInfo(event)
        } else if (activeStep === 2) {
            successHandle()
        }
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    };

    // const handleReset = () => {
    //     setActiveStep(0)
    // };

    return (
        <main>
            <Paper>
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box component="form" onSubmit={handleForm} >
                    {getStepContent(activeStep)}
                    <Box sx={{ textAlign: "right", margin: "10px" }}>
                        <Box>
                            {activeStep !== 0 && activeStep !== 3 && (
                                <Button
                                    onClick={handleBack}
                                    color="secondary"
                                >
                                    Back
                                </Button>
                            )}
                            {activeStep === 3 ?

                                <Button variant="contained" color="secondary" sx={{ margin: "20px" }}>
                                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>Back To Home Page</Link>
                                </Button>
                                :
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    // onClick={handleNext}
                                    type="submit"
                                    sx={{ margin: "20px" }}
                                >
                                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                                </Button>
                            }
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </main>
    );
}