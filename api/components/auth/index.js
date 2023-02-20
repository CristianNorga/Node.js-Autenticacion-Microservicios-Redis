const store = require('../../../store/mysql');
const ctrl = require('./auth.controller');

module.exports = ctrl(store);
