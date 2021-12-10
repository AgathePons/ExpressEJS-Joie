const express = require('express');
const router = express.Router();

const charactersModule = require('./middleware/charactersModule');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/characters', charactersModule.characterList);

router.get('/characters/:characterName', charactersModule.characterDetail);

router.get('/random-character', charactersModule.randomCharacter);

router.use(function (req, res, next) {
  res.status(404).render('notFound');
});

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;