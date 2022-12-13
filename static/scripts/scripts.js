const body = document.querySelector('body')

function toggleMenu(event){
    event.name == 'menu' ? event.name = 'close': event.name = 'menu'
    body.classList.toggle('menu-nav-active')
}