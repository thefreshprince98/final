const Sequelize = require("sequelize");
const db = require("../database/db");

const listSchema = db.sequelize.define("listings",{
  address: { type: Sequelize.STRING, required: true },
  city: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING, required: true },
  zip: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.STRING, required: true },
  baths: { type: Sequelize.STRING, required: true },
  zip: { type: Sequelize.STRING, required: true },
  description: { type: Sequelize.STRING, required: true },
  image: { type: Sequelize.STRING, required: true }
  
});

module.exports = listSchema;
