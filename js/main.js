console.log("main.js loaded and executing");
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');

  
  const hamburger = document.querySelector('.hamburger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const navWrapper = document.querySelector('.nav-wrapper');
  const overlay = document.querySelector('.overlay');

  console.log('Hamburger:', hamburger);
  console.log('navWrapper:', navWrapper);
  console.log('closeMenu:', closeMenu);
  console.log('overlay:', overlay);

  if (hamburger && navWrapper && closeMenu && overlay) {
    console.log('All elements found, adding event listeners.');
    hamburger.addEventListener('click', () => {
      console.log('Hamburger menu clicked');
      navWrapper.classList.add('active');
      overlay.classList.add('active');
    });

    const closeSidebar = () => {
      console.log('Closing sidebar');
      navWrapper.classList.remove('active');
      overlay.classList.remove('active');
    };

    closeMenu.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
  }
  
  
  if (document.title.includes("Map")) {
      document.body.classList.add('map-page');
  }
});