const store = require('../../../store/mysql');
const ctrl = require('./user.controller');

module.exports = ctrl(store)