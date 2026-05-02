function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  const icons = { success: 'fas fa-check-circle', error: 'fas fa-times-circle', info: 'fas fa-info-circle' };
  toast.innerHTML = `<i class="${icons[type] || icons.success}"></i> ${message}`;
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function scrollRow(rowId, direction) {
  const row = document.getElementById(rowId);
  if (row) row.scrollBy({ left: direction * 680, behavior: 'smooth' });
}

function createProductCard(product) {
  const imgSrc = product.image ? encodeImagePath(product.image) : null;
  const hasOld = product.oldPrice && product.oldPrice > product.price;
  const discount = hasOld ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return `
  <div class="product-card" onclick="goToProduct(${product.id})">
    <div class="product-card-img">
      ${imgSrc
        ? `<img src="${imgSrc}" alt="${escHtml(product.name)}" loading="lazy" onerror="this.onerror=null; this.src='assets/no-img.png';">`
        : `<div class="no-img"><i class="fas fa-image"></i></div>`}
      ${product.isNew ? '<span class="badge-new">Nouveau</span>' : ''}
      ${hasOld ? `<span class="badge-sale">-${discount}%</span>` : ''}
    </div>
    <div class="product-card-body">
      <p class="product-card-series">${escHtml(product.series)}</p>
      <p class="product-card-name">${escHtml(product.name)}</p>
      <div class="product-card-price-row">
        <span class="product-card-price">${product.price.toFixed(2)} €</span>
        ${hasOld ? `<span class="product-card-old-price">${product.oldPrice.toFixed(2)} €</span>` : ''}
      </div>
      <div class="product-card-actions" onclick="event.stopPropagation()">
        <a href="product-detail.html?id=${product.id}" class="btn-voir">Voir</a>
        <button class="btn-ajouter" onclick="addToCart(${product.id})">+ Panier</button>
      </div>
    </div>
  </div>`;
}

function goToProduct(id) {
  window.location.href = `product-detail.html?id=${id}`;
}

function loadProductRow(category, rowId, limit) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.innerHTML = '<div class="loading-row"><i class="fas fa-spinner fa-spin"></i></div>';
  const products = limit
    ? getProductsByCategory(category).slice(0, limit)
    : getProductsByCategory(category);
  if (products.length === 0) {
    row.innerHTML = '<div class="loading-row" style="color:#aaa;">Aucun produit disponible</div>';
    return;
  }
  row.innerHTML = products.map(createProductCard).join('');
}

function encodeImagePath(path) {

  return path.split('/').map(s => encodeURIComponent(s)).join('/');
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateUserNav();
  addCartBounceStyle();
  setActiveNav();
});

function updateUserNav() {
  const user = getUser();
  const link = document.getElementById('accountLink');
  if (link && user) {
    link.title = `Mon compte (${user.firstName || user.email})`;
  }
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

function addCartBounceStyle() {
  const s = document.createElement('style');
  s.textContent = `
    @keyframes cartBounce {
      0%   { transform: scale(1); }
      40%  { transform: scale(1.3); }
      70%  { transform: scale(0.9); }
      100% { transform: scale(1); }
    }
    .cart-bounce { animation: cartBounce 0.4s ease; }
  `;
  document.head.appendChild(s);
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim();
  if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
}