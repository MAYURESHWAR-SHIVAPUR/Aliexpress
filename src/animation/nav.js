// animations.js
import gsap from "gsap";

export const fadeInUp = (el) => {
  gsap.from(el, {
    opacity: 0,
    y: -40,
    duration: 1,
    stagger: 0.2,
  });
};