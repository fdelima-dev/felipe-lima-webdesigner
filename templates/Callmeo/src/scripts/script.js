const hamburger = document.querySelector('.container__hamburger')
const nav = document.querySelector('.container__menu')

hamburger.addEventListener('click', function () {

    nav.classList.toggle('active')
    hamburger.classList.toggle('spanActive')

})