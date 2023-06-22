let hamb = document.getElementById('hamb')
let navCelular = document.querySelector('#nav-celular')

//Evento para a barra de navegação na versão de celular/tablet
hamb.addEventListener('click',()=>{
    if(navCelular.style.display == 'none') {
        navCelular.style.display = 'block'
    } else {
        navCelular.style.display = 'none'
    }
})
function MonitorarLargura() {
    if(window.innerWidth > 1280) {
        hamb.style.display = 'none'
        navCelular.style.display = 'none'
    } else {
        hamb.style.display = 'block'
    }
}