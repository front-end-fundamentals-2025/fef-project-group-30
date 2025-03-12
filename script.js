// get shopping cart data (return empty array if not present)
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// save shopping cart data to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// add item to cart
function addToCart(id, name, price, image) {
    let cart = getCart(); // read the data of cart from localStorage
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1; // if the item already exists, increase the quantity
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1,
            url: `detail.html?id=${id}` // click on the shopping cart item to jump back to the details page
        });
    }

    saveCart(cart); // save to localStorage
    alert(`${name} added to cart!`);
    updateCartCount();
}

// update shopping cart quantity (displayed in navigation bar)
function updateCartCount() {
    let cart = getCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.right-nav li:last-child a').textContent = `Cart (${cartCount})`;
}

// display shooping cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    let cart = getCart();

    if (cartItems) {
        cartItems.innerHTML = ''; // clear the previous items

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <a href="${item.url}">
                    <img src="${item.image}" alt="${item.name}">
                </a>
                <div class="item-details">
                    <a href="${item.url}"><h3>${item.name}</h3></a>
                    <p>${item.price} SEK</p>
                    <div class="quantity">
                        <label>Quantity:</label>
                        <input type="number" 
                               value="${item.quantity}" 
                               min="1"
                               onchange="updateQuantity(${index}, this.value)">
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        updateTotal();
    }
}

// update the quantity of items in the shopping cart
function updateQuantity(index, value) {
    let cart = getCart();
    cart[index].quantity = parseInt(value);
    saveCart(cart);
    updateTotal();
}

// delete item from cart
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1); // delete the corresponding index product
    saveCart(cart);
    displayCart();
    updateCartCount();
}

// calculate and update shopping cart total
function updateTotal() {
    let cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    // get the discountcode value
    const discountCode = document.getElementById("discount-code")?.value?.toUpperCase();

    // set the default shipping fee to 35 SEK (when there are items in the cart)
    let shipping = cart.length > 0 ? 35 : 0; // delivery fee is 35sek
    if (cart.length > 0 && discountCode === 'WINTER24') {
        shipping = 0;
    }

    const total = subtotal + shipping;

 // use a more specific selector to update the amount
 const summaryDetails = document.querySelector('.summary-details');
 if (summaryDetails) {
     // update the amount of order
     summaryDetails.querySelector('.summary-row:first-child span:last-child').textContent = `${subtotal} SEK`;
     
     // update Shipping Rates - use the attribute selector to find the shipping rate line
     const deliveryRow = summaryDetails.querySelector('.summary-row span[data-i18n="delivery"]').parentElement;
     if (deliveryRow) {
         deliveryRow.querySelector('span:last-child').textContent = `${shipping} SEK`;
     }
     
     // update the total
     summaryDetails.querySelector('.summary-row.total span:last-child').textContent = `${total} SEK`;
 }

 // ddebug Information
 console.log('Cart length:', cart.length);
 console.log('Subtotal:', subtotal);
 console.log('Shipping:', shipping);
 console.log('Total:', total);
}

// make sure to execute immediately after the page loads
window.onload = function() {
 console.log('Page loaded');
 displayCart();
 updateCartCount();
 updateTotal();
 if (document.querySelector('.all-images')) {
     getProductFromURL();
 }
};

// apply discount code
function applyDiscount() {
    const cart = getCart();
    const discountCode = document.getElementById("discount-code").value;

    if (cart.length === 0) {
        alert('Please add items to you cart first');
        return;
    }
    if (discountCode.toUpperCase() === 'WINTER24') {
        updateTotal ();
        alert('Discount code applied successfully!');
    } else {
        alert('Invalid discount code');
    }
}

function getProductFromURL() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId === 'wool-sweater') {
        document.querySelector('h1').textContent = "Wool Sweater";
        document.querySelector('.price').innerHTML = '230 SEK <span class="original-price">1300 SEK</span>';
        document.querySelector('.all-images img').src = "clothes/585.jpg";
    }
}

// Initialize page
window.onload = function() {
    displayCart();
    updateCartCount();
    updateTotal();
    if (document.querySelector('.all-images')) {
        getProductFromURL();
    }
};