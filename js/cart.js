const CART_KEY = 'anime_figuarts_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.productId === productId);
  if (idx !== -1) {
    cart[idx].quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveCart(cart);
  updateCartBadge();
  showToast('Ajouté au panier !', 'success');
  animateCartIcon();
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.productId !== productId));
  updateCartBadge();
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.productId === productId);
  if (idx !== -1) {
    if (qty <= 0) { cart.splice(idx, 1); }
    else { cart[idx].quantity = qty; }
    saveCart(cart);
    updateCartBadge();
  }
}

function clearCart() {
  saveCart([]);
  updateCartBadge();
}

function getCartTotal() {
  return getCart().reduce((s, i) => s + i.quantity, 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const p = getProductById(item.productId);
    return p ? sum + p.price * item.quantity : sum;
  }, 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const total = getCartTotal();
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}


