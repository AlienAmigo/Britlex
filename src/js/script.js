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
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  // MOBILE MENU
  const BurgerBtn = document.querySelector('#mobile-menu-burger-btn');
  const MobileMenuCloseBtn = document.querySelector('#mobile-menu-close-btn');
  const MainNav = document.querySelector('#main-nav');
  const MainNavMenu = document.querySelector('.main-nav__wrapper');
  const MainNavLinks = document.querySelectorAll('.main-nav__link');

  if (BurgerBtn && MainNav && MobileMenuCloseBtn) {
    const toggleMainMenu = () => {
      BurgerBtn.classList.toggle('active');
      MainNav.classList.toggle('active');
    };

    MobileMenuCloseBtn.addEventListener('click', ev => {
      ev.stopPropagation();
      toggleMainMenu();
    });

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
      let anchorTarget = document.querySelector(
        `#${el.href.replace(/^.+#(.+)$/g, '$1')}`
      );
      window.scrollTo({
        top:
          window.innerWidth < 1600
            ? anchorTarget.getBoundingClientRect().top - 110
            : anchorTarget.getBoundingClientRect().top - 150,
        left: 0,
        behavior: 'smooth'
      });
    });
  });

  // UP BUTTON
  const scrollToTop = () => {
    window.window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // setTimeout(scrollToTop, 0);
  };

  const showUpBtn = () =>
    window.scrollY > 120
      ? myUpBtn.classList.add('active')
      : myUpBtn.classList.remove('active');

  const myUpBtn = document.querySelector('#up-btn');
  if (myUpBtn) {
    myUpBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', showUpBtn);
  }

  // LOADER
  const Loader = document.querySelector('#page-loader');
  const DocBody = document.querySelector('body');

  if (Loader && DocBody) {
    const DocBodyOverflow = DocBody.style.overflow;
    DocBody.style.overflow = 'hidden';

    window.setTimeout(() => removeLoader(), 5000);
    const Images = document.querySelectorAll('img');
    let loadedImagesCount = 0;

    const removeLoader = () => {
      DocBody.style.overflow = DocBodyOverflow;
      Loader.remove();
      popupLibrary.init();
    };

    const onImgLoad = () => {
      loadedImagesCount += 1;
      if (loadedImagesCount === Images.length) {
        removeLoader();
      }
    };

    window.addEventListener('load', ev => {
      Images.forEach(item => {
        if (item.complete && item.naturalHeight >= 0) {
          onImgLoad();
        }
      });
    });
  }

  // Subscribe Form

  const SubscribeForm = document.querySelector('#subscribe-form');
  const SubscribeFormMailInput = document.querySelector(
    '#subscribe-form > input[type="email"]'
  );

  if (SubscribeForm) {
    SubscribeForm.addEventListener('submit', ev => {
      ev.preventDefault();


      if (SubscribeFormMailInput) {
        if (SubscribeFormMailInput.value.match(/[\w.]+@[\w.]+\.\w+/)) {
          let subscribePopupInnerHTML = `<div class="subscribe-popup__email">${SubscribeFormMailInput.value}</div>
    <p class="subscribe-popup__message">Thank you for subscribing!</p>
    <button class="btn btn--popup-submit" type="button" onclick={popupLibrary.close()}>Done!</button>`;
          popupLibrary.open(subscribePopupInnerHTML);
        }
      }
    });
  }

  // -------- END OF READY FUNCTION
});
