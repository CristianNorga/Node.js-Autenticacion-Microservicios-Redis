const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.post('/login', async function (req, res, next) {
	try {
		console.log(req.body.username);
		const token = await Controller.login(req.body.username, req.body.password);
		console.log('token ', token);
		response.success(req, res, token, 200);
	} catch (error) {
		next();
	}
});

module.exports = router;
