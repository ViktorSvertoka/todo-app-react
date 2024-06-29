document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const btnOpen = document.querySelector('.btn-open');
  const btnClose = document.querySelector('.btn-close');
  const cardContent = document.querySelector('.card-content');
  const buttons = document.querySelectorAll('.button-block .btn-icon');

  // Initial setup: button 4 active (grid view), button 1 normal, buttons 2 and 3 disabled
  buttons[3].classList.add('active'); // Grid view active
  cardContent.classList.add('js-grid'); // Default to grid view
  buttons[1].classList.add('disabled');
  buttons[2].classList.add('disabled');

  btnOpen.addEventListener('click', () => {
    header.classList.add('is-open');
  });

  btnClose.addEventListener('click', () => {
    header.classList.remove('is-open');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      header.classList.remove('is-open');
    }
  });

  const navLinks = document.querySelectorAll('.nav-item a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('is-open');
    });
  });

  // Button click logic for toggling views
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Toggle classes on cardContent based on button clicked
      if (button === buttons[0] || button === buttons[3]) { // Buttons 1 and 4 for grid view
        cardContent.classList.remove('js-list');
        cardContent.classList.add('js-grid');
        buttons[1].classList.add('disabled');
        buttons[2].classList.add('disabled');
        buttons[0].classList.remove('disabled');
        buttons[3].classList.remove('disabled');
      } else if (button === buttons[1] || button === buttons[2]) { // Buttons 2 and 3 for list view
        cardContent.classList.remove('js-grid');
        cardContent.classList.add('js-list');
        buttons[0].classList.add('disabled');
        buttons[3].classList.add('disabled');
        buttons[1].classList.remove('disabled');
        buttons[2].classList.remove('disabled');
      }
    });
  });
});

