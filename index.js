let closeButton = document.querySelector('.button-close')
let menuButton = document.querySelector('.button-menu')
let sidebar = document.querySelector('.sidebar')
//
//
function toggleSidebar(){
    sidebar.classList.toggle('sidebar--active')
}


menuButton.addEventListener('click',toggleSidebar)
closeButton.addEventListener('click',toggleSidebar)