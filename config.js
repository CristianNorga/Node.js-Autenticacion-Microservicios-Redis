module.exports = {
	api: {
		port: process.env.API_PORT || 3000,
	},
	jwt: {
		secret: process.env.JWT_SECRET || 'notacrecet!',
	},
	mysql: {
		host: process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net',
		user: process.env.MYSQL_USER || 'sql10599783',
		password: process.env.MYSQL_PASS || 'RBKu5SsGyq',
		database: process.env.MYSQL_DB || 'sql10599783',
		port: process.env.MYSQL_PORT || '3306',
	},
	mysqlService: {
		host: process.env.MYSQL_SRV_HOST || 'localhost',
		port: process.env.MYSQL_SRV_PORT || 3001,
	},
	cacheService: {
		host: process.env.MYSQL_SRV_HOST || 'localhost',
		port: process.env.MYSQL_SRV_PORT || 3003,
	},
	redis: {
		host:
			process.env.REDIS_HOST ||
			'redis-13556.c14.us-east-1-3.ec2.cloud.redislabs.com',
		port: process.env.REDIS_PORT || 13556,
		password: process.env.REDIS_PASS || '9sWIItAvlPbkoTcwOXstNm9hDFv7AU2F',
	},
};