'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.calendar = require('./calendar')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
