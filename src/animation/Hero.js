import gsap from "gsap";

export const fadeInUp = (...els) => {
    els.forEach((el) => {
        gsap.from(el, {
            opacity: 0,
            y: -40,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        });
    });
};


export const imgSlider = (el) => {
    gsap.from(el, {
        opacity: 0,
        x: 140,
        duration: 1.2,
        delay: 1.5,
    });
};