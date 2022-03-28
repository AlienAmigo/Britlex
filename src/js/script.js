function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  // LOGO LINK
  const LogoLink = document.querySelector('#logo-link');
  if (LogoLink) {
    LogoLink.addEventListener('click', ev => {
      ev.preventDefault();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  // MOBILE MENU
  const BurgerBtn = document.querySelector('#mobile-burger-btn');
  const MainNav = document.querySelector('#main-nav');
  const MainNavMenu = document.querySelector('.main-nav__wrapper');
  const MainNavLinks = document.querySelectorAll('.main-nav__link');

  if (BurgerBtn && MainNav) {
    const toggleMainMenu = () => {
      BurgerBtn.classList.toggle('active');
      MainNav.classList.toggle('active');
    };

    MainNavMenu.addEventListener('click', ev => {
      ev.stopPropagation();
    });

    BurgerBtn.addEventListener('click', ev => {
      toggleMainMenu();
    });
    MainNavLinks.forEach(el => {
      el.addEventListener('click', ev => {
        toggleMainMenu();
      });
    });
  }

  // SCROLL LINKS
  const ScrollLinks = document.querySelectorAll(
    'a[href*="#"]:not(a[href="#"])'
  );
  ScrollLinks.forEach(el => {
    el.addEventListener('click', ev => {
      ev.preventDefault();
      let anchorTarget = document.querySelector(`#${el.href.replace(/^.+#(.+)$/g, '$1')}`);
      window.scrollBy({
        top: anchorTarget.getBoundingClientRect().top - 110,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
});
