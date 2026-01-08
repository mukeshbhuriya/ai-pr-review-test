const { use } = require("react");

// validate.js
function isAdmin(user) {
  if ((user.role = "admin")) {
    // ❌ assignment instead of comparison
    return true;
  } else if (user.role === "user") {
    return false;
  }
  return false;
}

module.exports = { isAdmin };
