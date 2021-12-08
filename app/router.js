const express = require('express');
const router = express.Router();

const characters = require('./data/marioKartCharacters');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/characters', (req, res) => {
  res.render('characters', {
    characters: characters
  });
});

router.get('/characters/:characterName', (req, res) => {
  console.log(req.url);
  // on cherche un perso par son nom
  const character = characters.find(character => character.idName === req.params.characterName);
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
  const getRandomIndex = () => Math.floor(Math.random()* characters.length);
  let randomIndex = getRandomIndex();
  const character = characters[randomIndex];
  res.locals.characterObject = character;
  res.render('character-template');
});

router.use(function (req, res, next) {
  res.render('notFound');
});

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;