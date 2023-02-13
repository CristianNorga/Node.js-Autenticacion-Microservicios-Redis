const express = require('express');
const swaggerUi = require('swagger-ui-express');

const config = require('../config.js');
const auth = require('./components/auth/auth.network');
const user = require('./components/user/user.network');
const swaggerDoc = require('./swagger.json');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/api/user', user);
app.use('/api/auth', auth);

app.listen(config.api.port, () => {
  console.log(`Api escuchando en el puerto ${config.api.port}`)
})

