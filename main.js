  
const toggleBtn = document.querySelector('.nav__toggleBtn');
const menu = document.querySelector('.nav__menu')
const link = document.querySelector('.nav__link')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
});