require("dotenv/config");

module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 4000,
  URL: process.env.BASE_URL || "http://localhost:3000",
  MONGODB_URI: process.env.DB_CONNECTION,
  JWT_SECRET_KEY: process.env.JWT_KEY,
};
