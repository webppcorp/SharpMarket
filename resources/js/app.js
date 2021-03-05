const glide = document.querySelectorAll('.glide');
const glideOption = {
  type: 'slider',
  perView: 5,
  gap: 30,
  rewind: false,
  direction: 'rtl',
  bound: true,
  breakpoints: {
    1500: {
      perView: 4
    },
    1200: {
      perView: 3
    },
    992: {
      perView: 4
    },
    768: {
      perView: 3
    },
    576: {
      perView: 1,
      focusAt: 'center',
      peek: 100,
      gap:0
    }
  }
};

const discountSlider = new Glide(glide[0], glideOption);
const salesSlider = new Glide(glide[1], glideOption);
discountSlider.mount();
salesSlider.mount();