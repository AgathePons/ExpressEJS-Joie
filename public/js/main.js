const app = {
  navBtn: document.getElementById('navBtn'),
  navList: document.getElementById('navList'),

  displayMenu: () => {
    navList.classList.toggle('opened');
  },

  init: () => {
    console.log(navBtn);
    navBtn.addEventListener('click', app.displayMenu);
  }
};

document.addEventListener('DOMContentLoaded', app.init);