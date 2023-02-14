const jwt = require('jsonwebtoken');
const config = require('../config');

const secret = config.jwt.secret;

function sign(data) {
	return jwt.sign(data, secret);
}

function verify(token) {
	try {
		return jwt.verify(token, secret);
	} catch (error) {
		throw new Error(error.message);
	}
}

const check = {
	own: function (req, owner) {
		const decoded = decodeHeader(req);
		console.log(decoded);

		if (decoded.id !== owner) {
			throw new Error('No puedes hacer esto');
		}
	},
};

function getToken(auth) {
	if (!auth) {
		throw new Error('No viene token');
	}

	if (auth.indexOf('Bearer ') === -1) {
		throw new Error('Formato invalido');
	}

	let token = auth.replace('Bearer ', '');
	return token;
}

function decodeHeader(req) {
	console.log('req decodeHeader', req.headers);
	const authorization = req.headers.authorization || '';
	const token = getToken(authorization);
	const decoded = verify(token);

	req.user = decoded;

	return decoded;
}

module.exports = {
	sign,
	check
};
