import Vue from 'vue';

const toggle = (el, show) => {
  if (show) {
    el.style.transition = 'opacity 0.7s ease-in-out';
    el.style.opacity = 1;
  } else {
    el.style.transition = 'none';
    el.style.opacity = 0;
  }
}
