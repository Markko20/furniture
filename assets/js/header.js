const headerBtn = document.querySelector('.header__btn')
const rightsideMenu = document.querySelector('.rightside-menu')
const rightsideMenuClose = document.querySelector('.rightside-menu__close')
const headerBtnMenu = document.querySelector('.header__btn-menu')
const menu = document.querySelectorAll('.menu')

headerBtn.addEventListener('click', function(){
  rightsideMenu.classList.remove('rightside-menu--close')
})

rightsideMenuClose.addEventListener('click', function(){
  rightsideMenu.classList.add('rightside-menu--close')
})

//Адаптив
headerBtnMenu.addEventListener('click',function(){
  for(let i = 0; i < menu.length; i++){
    menu[i].classList.toggle('menu--open')
  }
})
