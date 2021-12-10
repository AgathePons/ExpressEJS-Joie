const homePageModule = {
  displayHomePage: (req, res, next) => {
    const homePage = true;
    const data = {
      firstLevelPage: 'Mario Kart!!',
      homePage: homePage
    };
    res.render('index', data);
  }
};

module.exports = homePageModule;