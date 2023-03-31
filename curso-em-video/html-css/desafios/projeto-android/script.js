const burger = document.getElementById('burger').addEventListener('click', clickMenu)
const menuItens = document.getElementById('menuItens')
const nav = document.getElementsByTagName('nav')[0]

function resizeMobile() {
    if (window.innerWidth >= 500) {
        menuItens.style.display = 'block'
    } else {
        menuItens.style.display = 'none'
    }
}

function clickMenu() {
    if (menuItens.style.display == 'block') {
        menuItens.style.display = 'none'
        nav.style.backgroundColor = 'var(--cor5)'
    } else {
        menuItens.style.display = 'block'
        nav.style.backgroundColor = 'var(--cor4)'
    }
}