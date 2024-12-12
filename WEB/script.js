const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle Class Active Searchform
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box') 

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//end disini

const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-box');


document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

