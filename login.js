// auth.js

function login(username, password) {
  const ADMIN_PASSWORD = "1234"; // ❌ hardcoded password

  if (password === ADMIN_PASSWORD) {
    return "Login successful";
  }

  return "Invalid credentials";
}

module.exports = { login };
