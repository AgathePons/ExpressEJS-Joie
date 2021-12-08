const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/characters', (req, res) => {
  const characters = require('./data/marioKartCharacters');
  res.render('characters', {
    characters: characters
  });
});

router.get('/characters/:characterName', (req, res) => {
  console.log(req.url);
  const characters = require('./data/marioKartCharacters');
  // on cherche un perso par son nom
  const character = characters.find(character => character.idName === req.params.characterName);
  console.log(character);
  if (character) {
    res.locals.characterObject = character;
    res.render('character-template', {
      characters: characters
    });
  } else {
    res.status(404);
    res.render('notFound');
  }
  
});

router.get('/random-character', (req, res) => {
  res.render('notImplementedYet');
});

router.use(function (req, res, next) {
  res.render('notFound');
});

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;