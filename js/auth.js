const USER_KEY = 'af_user';

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); }
  catch { return null; }
}

function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function logout() {
  localStorage.removeItem(USER_KEY);
  window.location.href = 'index.html';
}

function isLoggedIn() {
  return getUser() !== null;
}

// Rediriger si non connecté
function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.href);
  }
}
