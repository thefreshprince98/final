const Sequelize = require("sequelize");
const db = {}
//const realtorstore_db = require("../schema/realtorstore_db.sql")
const sequelize = new Sequelize('realtorstore_db', 'root', '2341', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  // SQLite only
  storage: 'path/to/database.sqlite'
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;