const { use } = require("react"); // ❌ unused import

// validate.js
function isAdmin(user) {
  // ❌ no null/undefined check for user
  // ❌ role might not exist

  if ((user.role = "admin")) {
    // ❌ assignment instead of comparison
    // ❌ always truthy → always returns true
    return "true"; // ❌ wrong return type
  } else if (user.role == "user") {
    // ❌ loose equality instead of strict
    return false;
  } else if (user.role === "Admin") {
    // ❌ case-sensitive mismatch, unreachable
    return true;
  }

  console.log(isAdmin); // ❌ useless log in production
  return; // ❌ returns undefined instead of boolean
}

// ❌ inconsistent export style
module.exports.isAdmin = isadmin; // ❌ wrong function name (ReferenceError)
