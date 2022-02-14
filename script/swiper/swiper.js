
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 2,
    autoplay: {
        delay: 3000,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
  });
  
  