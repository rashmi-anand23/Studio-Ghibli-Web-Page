var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:3000,
    delay: 400
  })

  sr.reveal(".text__top",{origin:"top"});
  sr.reveal(".img__logo",{origin:"bottom"});
  sr.reveal(".slider__img",{interval:300});
  sr.reveal(".logo__img",{origin:"left"});
  sr.reveal(".main__img",{origin:"right"});
  sr.reveal(".grave__img",{origin:"right"});
  sr.reveal(".text__end",{interval:300});
  sr.reveal(".stream__now",{interval:300});