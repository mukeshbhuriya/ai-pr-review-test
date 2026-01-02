// config.js

module.exports = {
  databaseUrl: "mongodb://admin:admin123@localhost:27017/app", // ❌ credentials in code
  jwtSecret: "my-super-secret-jwt-key", // ❌ hardcoded secret
};
