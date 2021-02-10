/* JS FOR NAVBAR */
const telBtn = document.querySelector(".tel");
const contactPopOut = document.querySelector(".contact-us-popout");
const navigation = document.querySelector(".navigation");
const contactCloseBtn = document.querySelector(".contact-us-closeBtn");
const menu = document.querySelector(".menu");
const menuPopOut = document.querySelector(".menu-popout");
const menuCloseBtn = document.querySelector(".menu-closeBtn");

const applicationDropdown = document.querySelector(".application-mobile-links");
const applicationDropdownLinks = document.querySelectorAll(
  ".application-mobile-links li"
);
const productsDropdown = document.querySelector(".products-mobile-links");
const productsDropdownLinks = document.querySelectorAll(
  ".products-mobile-links li"
);
const aboutDropdown = document.querySelector(".about-mobile-links");
const aboutDropdownLinks = document.querySelectorAll(".about-mobile-links li");
const desktopContactBtn = document.querySelector(".desktop-nav-contact-us");
const navigationContainer = document.querySelector(".navigation-container");
telBtn.addEventListener("click", () => {
  if (window.scrollY == 0) {
    contactPopOut.style.right = "0px";
    contactPopOut.style.display = "flex";
    navigation.style.transform = "translateX(-280px)";
    navigation.style.pointerEvents = "none";
    navigation.classList.remove("contactPopOutClassMobile");
    document.body.style.overflow = "hidden";
    navigationContainer.style.display = "block";
  } else {
    window.scrollTo(0, 0);
  }
});

menu.addEventListener("click", () => {
  if (window.scrollY == 0) {
    menuPopOut.style.right = "0";
    menuPopOut.style.display = "flex";
    navigation.style.transform = "translateX(-280px)";
    navigation.style.pointerEvents = "none";
    navigation.classList.remove("contactPopOutClassMobile");
    document.body.style.overflow = "hidden";
    navigationContainer.style.display = "block";
  } else {
    window.scrollTo(0, 0);
  }
});
menuCloseBtn.addEventListener("click", () => {
  menuPopOut.style.right = "-280px";
  menuPopOut.style.display = "none";
  navigation.classList.add("contactPopOutClassMobile");
  navigation.style.pointerEvents = "all";
  document.body.style.overflow = "auto";
  navigationContainer.style.display = "none";
});

contactCloseBtn.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    contactPopOut.classList.remove("contactPopOutClass");
    navigation.classList.remove("navigationDeskClass");
    navigation.style.pointerEvents = "all";
    contactPopOut.style.display = "none";
    
  } else {
    contactPopOut.style.right = "-280px";
    contactPopOut.style.display = "none";
    navigation.classList.add("contactPopOutClassMobile");
    navigation.style.pointerEvents = "all";
  }
  document.body.style.overflow = "auto";
   navigationContainer.style.display = "none";
});

applicationDropdown.addEventListener("click", () => {
  applicationDropdown.classList.toggle("applicationHideDropdown");
  applicationDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});
productsDropdown.addEventListener("click", () => {
  productsDropdown.classList.toggle("productsHideDropdown");
  productsDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});
aboutDropdown.addEventListener("click", () => {
  aboutDropdown.classList.toggle("aboutHideDropdown");
  aboutDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});

desktopContactBtn.addEventListener("click", () => {
  if (window.scrollY == 0) {
    contactPopOut.classList.add("contactPopOutClass");
    contactPopOut.classList.add("contactPopOutClass");
    navigation.classList.add("navigationDeskClass");
    navigation.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
     navigationContainer.style.display = "block";
  } else {
    window.scrollTo(0, 0);
  }
});
/* END JS FOR NAVBAR */

/* JS FOR FIRST SLIDER HOME */
var myFirstSwiper = new Swiper(".firstC-swiper-container", {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1.3,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.4,
    },

    535: {
      slidesPerView: 1.8,
    },
    630: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
/* END JS FOR FIRST SLIDER HOME */

/* JS FOR SECOND SLIDER HOME */
var mySecondSwiper = new Swiper(".secondC-swiper-container", {
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* END JS FOR SECOND SLIDER HOME */

/* JS FOR THIRD SLIDER HOME */
var myThirdSwiper = new Swiper(".thirdC-swiper-container", {
  speed: 400,
  slidesPerView: 1.1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2.2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
/* END JS FOR THIRD SLIDER HOME */

/* JS FOR PROJECTS DETAIL GALLERY */
var myFirstSwiperProjectDetail = new Swiper(".gallery-feature-container-v1", {
  speed: 400,
  slidesPerView: 1.3,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
/* END JS FOR PROJECTS DETAIL GALLERY */


/* JS FOR HEALTH PAGE FIRST CAROUSEL */
var myAboutPageSwiper = new Swiper(".healthFirst-slider-swiper-container", {
  speed: 400,
  slidesPerView: 1.2,
  spaceBetween: 31,
  navigation: {
    nextEl: ".healthFirst-slider-swiper-button-next",
    prevEl: ".healthFirst-slider-swiper-button-prev",
  },
  pagination: {
    el: ".healthFirst-slider-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.8,
    },
    700: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
/* END JS FOR HEALTH PAGE FIRST CAROUSEL */

/* JS FOR HEALTH PAGE SECOND CAROUSEL */
var myAboutPageSwiper = new Swiper(".healthSecond-slider-swiper-container", {
  speed: 400,
  slidesPerView: 1.2,
  spaceBetween: 31,
  navigation: {
    nextEl: ".healthSecond-slider-swiper-button-next",
    prevEl: ".healthSecond-slider-swiper-button-prev",
  },
  pagination: {
    el: ".healthSecond-slider-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.8,
    },
    700: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
/* END JS FOR HEALTH PAGE SECOND CAROUSEL */

/* JS FOR HEALTH PAGE THIRD CAROUSEL */
var myThirdSwiper = new Swiper(".healthThirdC-swiper-container", {
  speed: 400,
  slidesPerView: 1.1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".healthThirdC-swiper-button-next",
    prevEl: ".healthThirdC-swiper-button-prev",
  },
  pagination: {
    el: ".healthThirdC-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.2,
    },
    800: {
      slidesPerView: 2.2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
/* END JS FOR HEALTH PAGE THIRD CAROUSEL */

/* END JS FOR ABOUT PAGE FEATURED PRODUCT CAROUSEL */
var myAboutPageSwiper = new Swiper(".aboutPage-slider-swiper-container", {
  speed: 400,
  slidesPerView: 1.2,
  spaceBetween: 31,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.8,
    },
    700: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
/* END JS FOR ABOUT PAGE FEATURED PRODUCT CAROUSEL */

/* JS FOR REVERSE TEXT MEDIA DARK VERSION 3 */
const reverseTxtMediaDarkV3PlayIcon = document.querySelector(
  ".reverse-text-media-dark-v3-video-play-icon"
);
const reverseTextMediaDarkV3Overlay = document.querySelector(
  ".reverse-text-media-dark-v3-video-overlay"
);
const reverseTextMediaDarkV3Video = document.querySelector(
  ".reverse-text-media-dark-v3-img"
);

reverseTxtMediaDarkV3PlayIcon.addEventListener("click", () => {
  reverseTextMediaDarkV3Overlay.style.opacity = "0";
  reverseTxtMediaDarkV3PlayIcon.style.opacity = "0";
  reverseTxtMediaDarkV3PlayIcon.pointerEvents = "none";
  reverseTextMediaDarkV3Video.src += "?autoplay=1";
  reverseTextMediaDarkV3Video.style.opacity = "1";
  reverseTextMediaDarkV3Video.style.pointerEvents = "all";
});
/* END JS FOR REVERSE TEXT MEDIA DARK VERSION 3 */

/* JS FOR HEALTH PAGE VIDEO */
const healthPageVideoSectionContainer = document.querySelector(
  ".health-page-video-section-container"
);
const healthPagePlayIcon = document.querySelector(
  ".health-page-video-play-icon"
);
const healthPageVideoOverlay = document.querySelector(
  ".health-page-video-overlay"
);
const healthPageVideo = document.querySelector(
  ".health-page-video-section-img"
);

healthPagePlayIcon.addEventListener("click", () => {
  healthPageVideoOverlay.style.opacity = "0";
  healthPagePlayIcon.style.opacity = "0";
  healthPagePlayIcon.pointerEvents = "none";
  healthPageVideo.src += "?autoplay=1";
  healthPageVideo.style.pointerEvents = "all";
});
/* END JS FOR HEALTH PAGE VIDEO */



/* JS FOR ABOUT PAGE WITH VIDEO */
const aboutPageVideoSectionContainer = document.querySelector(
  ".about-page-video-section-container"
);
const aboutPagePlayIcon = document.querySelector(".about-page-video-play-icon");
const aboutPageVideoOverlay = document.querySelector(
  ".about-page-video-overlay"
);
const aboutPageVideo = document.querySelector(".about-page-video-section-img");

aboutPagePlayIcon.addEventListener("click", () => {
  aboutPageVideoOverlay.style.opacity = "0";
  aboutPagePlayIcon.style.opacity = "0";
  aboutPagePlayIcon.pointerEvents = "none";
  aboutPageVideo.src += "?autoplay=1";
  aboutPageVideo.style.pointerEvents = "all";
});
/* END JS FOR ABOUT PAGE WITH VIDEO */

/* JS FOR PRODUCT FILTER */
// var filterDropdown = document.getElementsByClassName("filter");
// var singleFilterDropdown = document.getElementsByClassName("single-filter-item");
// var i;
// var i2;

// for (i = 0; i < filterDropdown.length; i++) {
//   filterDropdown[i].addEventListener("click", function() {
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//     for (i2 = 0; i2 < singleFilterDropdown.length; i2++) {
//       singleFilterDropdown[i2].addEventListener("click", function() {
//         var panel2 = this.nextElementSibling;
//         if (panel2.style.maxHeight) {
//           panel2.style.maxHeight = null;
//           panel2.style.margin = "0";
//         } else {
//           panel.style.maxHeight = (panel.scrollHeight + panel2.scrollHeight + 15) + "px";
//           panel2.style.maxHeight = panel2.scrollHeight + "px";
//           panel2.style.margin = "7.5px 0";
//         } 
//       });
//     }
//   });
  /* END JS FOR PRODUCT FILTER */