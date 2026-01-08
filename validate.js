// validate.js
function isAdmin(user) {
  if ((user.role = "admin")) {
    // ❌ assignment instead of comparison
    return true;
  }
  return false;
}

module.exports = { isAdmin };
