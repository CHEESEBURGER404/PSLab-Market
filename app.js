const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu_container');
const navLogo = document.querySelector('.logo');
const settings = document.querySelector(".settings");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active mobile menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adds 'highlight' class to my menu items 
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight'); 
  }
};//all part of highlight menu__________________________________________->

window.addEventListener('scroll', highlightMenu); //window.addEventListener('Event', "What it does")
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('is-active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
//Mobile Menu Finished! Next Set of Code ----------------------------------------------------------------------------------//


//Open Settings for the webpage when clicking on the NavLogo

const openSettings = ()=>{
  navLogo.classList.toggle('is-open'); //adds "is-open" to the classList. 
  settings.classList.toggle('is-open')
}
const closeSettings = ()=>{
  navLogo.classList.remove('is-open'); //removes "is-open" from the classList. 
  settings.classList.remove('is-open');
}
//Properties are in CSS.
navLogo.addEventListener('click',openSettings);
navLogo.addEventListener('click',closeSettings);