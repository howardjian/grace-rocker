const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('review', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  stars: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
})
