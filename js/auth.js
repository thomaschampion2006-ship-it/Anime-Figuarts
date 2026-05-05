function getUsers() {
  return JSON.parse(localStorage.getItem('af_users') || '[]');
}

function setUsers(users) {
  localStorage.setItem('af_users', JSON.stringify(users));
}

function register(firstName, lastName, email, password) {
  const users = getUsers();

  if (users.find(u => u.email === email)) {
    alert("Email déjà utilisé !");
    return false;
  }

  const user = { firstName, lastName, email, password };
  users.push(user);
  setUsers(users);

  localStorage.setItem('af_current_user', JSON.stringify(user));
  return true;
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return false;

  localStorage.setItem('af_current_user', JSON.stringify(user));
  return true;
}

function logout() {
  localStorage.removeItem('af_current_user');
  window.location.href = "login.html";
}

function getUser() {
  return JSON.parse(localStorage.getItem('af_current_user'));
}

function isLoggedIn() {
  return !!getUser();
}