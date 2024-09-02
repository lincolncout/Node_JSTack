const express = require('express');
require('express-async-errors'); // para os erros assincronos serem pegos no error handler
const routes = require('./routes');

const app = express();

app.use(express.json()); // faz o parse do json do body quando por exemplo ocorre um evento post
app.use(routes);

// error handler precisa vir depois das definições da rota
// funciona para pegar os possiveis erros nas requisicoes
app.use((error, request, response, next) => {
  console.log('##### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log(' Server started at http://localhost:3000 '));

// Middleware 1 -> Middleware 2 -> Middleware 3 -> Middleware 4
