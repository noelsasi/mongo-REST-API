const path = require("path");
const rootPath = path.normalize(__dirname + "/.");
const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    root: rootPath,
    app: {
      name: "bookiee-mongo"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost:27017/Bookiee"
  },

  test: {
    root: rootPath,
    app: {
      name: "bookiee-mongo"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/bookiee-mongo-test"
  },

  production: {
    root: rootPath,
    app: {
      name: "bookiee-mongo"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/bookiee-mongo-production"
  }
};

module.exports = config[env];
