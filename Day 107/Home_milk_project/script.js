// use a script tag or an external JS file
let bottle1 = document.querySelector(".milkBottle");
let bottle2 = document.querySelector(".milkBottle2");
let coconutTwoPieces = document.querySelector(".coconutTwoPieces");
let coconutPiece = document.querySelector(".coconutPiece");
let navAll = document.querySelectorAll(".nav-items");
let firsth1 = document.querySelector(".firsth1");
let secondh1 = document.querySelector(".secondh1");
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    MotionPathPlugin,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    RoughEase
  );
  // gsap code here!
  gsap.from(bottle1, {
    duration: 3.1,
    opacity: 0,
    scale: 3.8,
    y: 100,
    ease: "elastic.out(1, 0.5)",
  });

  gsap.from(bottle2, {
  duration: 2.8,
  opacity: 0,
  rotate: 15,
  scale: 0.7,
  x: 200,
  delay: 1,
  ease: "back.out(1.7)"
});

//   gsap.from(coconutTwoPieces, {
//     x: -150,
//     rotate: -55,
//     opacity: 0,
//     duration: 2.3,
//     ease: "back.out(1.7)",
//   });

//   gsap.from(coconutPiece, {
//     x: 150,
//     rotate: 55,
//     opacity: 0,
//     duration: 2.3,
//     ease: "back.out(1.7)",
//     delay: 0.5,
//   });

gsap.from([coconutTwoPieces, coconutPiece], {
  y: -300,
  opacity: 0,
  duration: 2.2,
  stagger: 0.5,
  ease: "bounce.out"
});

  gsap.from(navAll, {
    y: -40,
    opacity: 0,
    duration: 1.5,
    stagger: 0.15,
    ease: "rough({ template: power1.out, strength: 1.5, points: 20, taper: 'none', randomize: true })",
  });

  gsap.from(firsth1, {
    y: 80,
    opacity: 0,
    duration: 1.8,
    ease: "power3.out",
    delay: 1.8,
  });
  gsap.from(secondh1, {
    x: -180,
    opacity: 0,
    duration: 1.8,
    ease: "power3.out",
  });

});2.8

document.querySelectorAll(".milkBottle").forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, { rotate: -5, y: -290, duration: 0.4, ease: "power2.out" });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(el, { rotate: 0, y: -300, duration: 0.4, ease: "power2.in" });
  });
});