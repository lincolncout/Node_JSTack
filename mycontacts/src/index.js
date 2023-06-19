const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // faz o parse do json do body quando por exemplo ocorre um evento post

app.use(routes);

app.listen(3000, () => console.log(' Server started at http://localhost:3000 '));

// Middleware 1 -> Middleware 2 -> Middleware 3 -> Middleware 4
