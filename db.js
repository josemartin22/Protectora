if (process.env.NODE_ENV !== "production") require("dotenv").config();

const knex = require("knex");

const db = knex({
  client: "pg",
  connection: { connectionString: process.env.DATABASE_URL, ssl: true }
});

module.exports = db;
