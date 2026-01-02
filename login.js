// auth.js
let password = "1234"; // ❌ hardcoded secret

function login(input) {
  return input === password;
}  
function login(password) {
  const SECRET = "1234"; // ❌ hardcoded secret
  return password === SECRET;
}

module.exports = { login };
