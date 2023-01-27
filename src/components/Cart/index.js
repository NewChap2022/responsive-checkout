import * as React from 'react';
import CartItem from '../CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import cartImg from '../../assets/images/cart.png';
import './style.css';

export default function Cart({products}) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartOpen = useSelector(state => state.cartOpen);

    React.useEffect(() => {
        function getCart() {
            const currentCart = JSON.parse(localStorage.getItem('cart'));
            if (currentCart && currentCart.length > 0) {
                let cartHistory = [];
                currentCart.forEach(item => {
                    const id = item.id;
                    const productInfo = products.find(product => product.id === id);
                    cartHistory.push({...productInfo, purchaseQuantity: item.purchaseQuantity})
                })
    
                dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cartHistory] });
            }
        };
        if(!cart.length) {
            getCart();
        }
    }, [cart.length, products, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    };

    function calculateTotal() {
        let sum = 0;
        cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        })

        return sum.toFixed(2);
    }

    if (!cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}>
                <img id="cart-img" src={cartImg} alt="cart" />
            </div>
        )
    }
    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>
                ×
            </div>
            <h2>Shopping Cart</h2>
            {cart.length ? (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "5px"}}>
                        <strong>Total: ${calculateTotal()}</strong>

                        <button>Checkout</button>
                    </div>
                </div>
            ) : (
                <h3>
                    <span role="img" aria-label="shocked">
                        😱
                    </span>
                    Your cart is empty!
                </h3>
            )}
        </div>
    )
}