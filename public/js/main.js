const app = {

  displayMenu: () => {
    const navList = document.getElementById('navList');
    navList.classList.toggle('opened');
  },
  displayCharacterSearchDetail: (e) => {
    
    const clickedTarget = e.target;
    console.log('clic on', e.target);
    const clickedCharCard = clickedTarget.closest('.charcard');
    console.log('elt:', clickedCharCard);
    clickedCharCard.classList.toggle('opened');
  },

  init: () => {
    const navBtn = document.getElementById('navBtn');
    navBtn.addEventListener('click', app.displayMenu);

    const charCards = document.getElementsByClassName('charcard');
    console.log(charCards);
    for (const charCard of charCards) {
      charCard.addEventListener('click', app.displayCharacterSearchDetail);
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);