import SwipeCarousel from './swipe-carousel.js';

const carousel = new SwipeCarousel({
  containerID: '#carousel',
  interval: 2000
  // isPlaying: false
});

carousel.init();