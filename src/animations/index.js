// animations.js
import { gsap, Power3 } from "gsap";

export const animatePreloader = (ref1, ref2, ref3) => {
  setTimeout(() => {
    animateDev(ref1.current)
  }, 300);

  setTimeout(() => {
    animateCreat(ref2.current)
  }, 600);

  setTimeout(() => {
    animatePass(ref3.current)
  }, 900);
}



export const animateHero = (ref1, ref2,ref3,ref4)=> {
  setTimeout(() => {

    gsap.to(ref1.current, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      duration: 1,
    });
    gsap.to(ref2.current, {
      opacity: 1,
      y: -30,
      ease: Power3.easeOut,
      duration: 1,
    });

    gsap.to(ref3.current, {
      opacity: 1,
      y: -40,
      ease: Power3.easeOut,
      duration: 1,
    });

    gsap.to(ref4.current, {
      opacity: 1,
      y: -50,
      ease: Power3.easeOut,
      duration: 1,
    });

  }, 2400)

}

 const animateDev = (ref) => {
  gsap.to(ref, {
    opacity: 1,
    y: -40,
    ease: Power3.easeOut,
    duration: 1,
  });
};

 const animateCreat = (ref) => {
  gsap.to(ref, {
    opacity: 1,
    y: -40,
    ease: Power3.easeOut,
    duration: 1,
  });
};

 const animatePass = (ref) => {
  gsap.to(ref, {
    opacity: 1,
    y: -40,
    ease: Power3.easeOut,
    duration: 1,
  });
};
