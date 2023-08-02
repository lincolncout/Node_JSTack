const { Router } = require('express');

// cria uma instância de Router
const router = Router();

// faz um require de ContactController
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

// quando gerar a rota /contacts ir para ContactController.index
router.get(
  '/contacts',
  // criando um middleware
  // (request, response, next) => {
  //   request.appId = 'MeuAppId'; // só pode ser acessado nos próximos middlewares (sequencial)
  //   // response.send('Interceptado pelo Middleware'); (travando a requisicao)
  //   next(); pular pro próximo middleware (/contacts/:id)
  // },
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

module.exports = router;
