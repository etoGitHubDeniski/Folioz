const buttons = document.querySelectorAll('.tabs__btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((buttons) => {
      if (buttons.classList.contains('tabs__btn--open')) {
        buttons.classList.remove('tabs__btn--open');
      }
    });
    button.classList.add('tabs__btn--open');
  });
  button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      buttons.forEach((buttons) => {
        if (buttons.classList.contains('tabs__btn--open')) {
          buttons.classList.remove('tabs__btn--open');
        }
      });
      button.classList.add('tabs__btn--open');
    }
  });
});
