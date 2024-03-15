let menuIcon = document.querySelector('#menu-icon');
let sideBar = document.querySelector('.sidebar');


menuIcon.onclick = () => {
    sideBar.classList.toggle("active");
}


