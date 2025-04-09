const burgerButton = document.getElementById('burger-button');
const navList = document.querySelector('.nav-list');
const closeButton = document.getElementById('close-button');


burgerButton.addEventListener('click', () => {
  navList.classList.add('active');  
});

closeButton.addEventListener('click', () => {
  navList.classList.remove('active');  
});
