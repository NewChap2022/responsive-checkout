export function addItem(item) {
    let cart = [];
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push({id: item.id, purchaseQuantity: 1});
    localStorage.setItem('cart', JSON.stringify(cart));
};

export function updateItem(item, purchaseQuantity) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.map(product => {
        return item.id === product.id ?
        {...product, purchaseQuantity: purchaseQuantity} : product
    });
    localStorage.setItem('cart', JSON.stringify(cart));
};

export function removeItem(item) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(product => {
        return product.id !== item.id
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function clearCart() {
    const cart = []
    localStorage.setItem('cart', JSON.stringify(cart))
}