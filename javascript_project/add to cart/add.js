let cart = {};
let cartVisible = false;

function addToCart(name, price, image) {
  if (cart[name]) {
    cart[name].quantity += 1;
  } else {
    cart[name] = { price, quantity: 1, image };
  }
  updateCartDisplay();
}

function changeQuantity(name, change) {
  if (cart[name]) {
    cart[name].quantity += change;
    if (cart[name].quantity <= 0) {
      delete cart[name];
    }
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const cartItemsList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItemsList.innerHTML = '';
  let totalItems = 0;
  let totalPrice = 0;

  for (const name in cart) {
    const item = cart[name];
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <img src="${item.image}" alt="${name}">
      <div>
        <div><strong>${name}</strong></div>
        <div>$${item.price} × ${item.quantity}</div>
        <button class="qty-btn" onclick="changeQuantity('${name}', 1)">+</button>
        <button class="qty-btn" onclick="changeQuantity('${name}', -1)">−</button>
      </div>
    `;
    cartItemsList.appendChild(li);
  }

  cartCount.textContent = totalItems;
  cartTotal.textContent = totalPrice.toFixed(2);
}

function toggleCart() {
  cartVisible = !cartVisible;
  document.getElementById('cart-panel').style.display = cartVisible ? 'block' : 'none';
}
