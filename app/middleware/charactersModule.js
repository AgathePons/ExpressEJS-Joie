const charactersModule = {
  /**
   * render the list of characters list
   */
  characterList: (req, res, next) => {
    const characters = require('../data/marioKartCharacters.json');
    const charactersListPage = true;
    const data = {
      firstLevelPage: 'List of characters',
      characters: characters,
      charactersListPage: charactersListPage
    };
    res.render('characters', data);
  },
  /**
   * render the page of 1 character details
   * @param {*} next -> 404
   */
  characterDetail: (req, res, next) => {
    console.log(req.url);
    const characters = require('../data/marioKartCharacters.json');
    const charactersListPage = true;
    // get character by name
    const character = characters.find(character => character.idName === req.params.characterName);
    if (character) {
      const data = {
        firstLevelPage: 'List of characters',
        secondLevelPage: character.name,
        character: character,
        charactersListPage: charactersListPage
      };
      res.render('character-template', data);
    } else {
      next();
    }
  },
  /**
   * render the page of 1 random character details
   */
  randomCharacter: (req, res, next) => {
    const characters = require('../data/marioKartCharacters.json');
    const randomCharacterDetailPage = true;
    const getRandomIndex = () => Math.floor(Math.random() * characters.length);
    const randomIndex = getRandomIndex();
    const character = characters[randomIndex];
    const data = {
      firstLevelPage: 'Random character',
      secondLevelPage: character.name,
      character: character,
      randomCharacterDetailPage: randomCharacterDetailPage
    };
    console.log(character.name);
    res.render('character-template', data);
  }
};

module.exports = charactersModule;