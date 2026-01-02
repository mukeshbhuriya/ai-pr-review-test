// auth.js
function login(password) {
  const SECRET = "1234"; // ❌ hardcoded secret
  return password === SECRET;
}

module.exports = { login };
