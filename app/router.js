const express = require('express');
const router = express.Router();

const homePageModule = require('./middleware/homePageModule');
const charactersModule = require('./middleware/charactersModule');

router.get('/', homePageModule.displayHomePage);

router.get('/characters', charactersModule.characterList);

router.get('/characters/:characterName', charactersModule.characterDetail);

router.get('/random-character', charactersModule.randomCharacter);

router.get('/search', charactersModule.searchCharacter);

router.use(function (req, res) {
  res.status(404).render('notFound');
});

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;