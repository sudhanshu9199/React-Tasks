gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin, Flip, ScrambleTextPlugin);

function splitToChars(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const text = el.textContent.trim();
  el.innerHTML = text
    .split("")
    .map((ch) => {
      if (ch === " ") return `<span class="char">&nbsp;</span>`;
      return `<span class="char">${ch}</span>`;
    })
    .join("");
}

splitToChars(".belowText h2");

// master timeline
const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

tl.from(".logo", { y: -18, opacity: 0, duration: 1.4 }, 0.5);
tl.from(
  ".ops p",
  { y: -10, opacity: 0, stagger: 0.5, duration: 0.8 },
  "-=0.45"
);
tl.from(
  ".login",
  { scale: 0.92, opacity: 0, duration: 0.7, ease: "back.out(1.2)" },
  "-=0.7"
);

tl.fromTo(
  ".topHeader h1, .model1, .model2",
  { clipPath: "inset(0 0 100% 0)", webkitClipPath: "inset(0 0 100% 0)", y: 12 },
  {
    clipPath: "inset(0 0 0% 0)",
    webkitClipPath: "inset(0 0 0% 0)",
    y: 0,
    duration: 1.15,
    ease: "power3.out",
  },
  "-=0.35"
);

tl.to(
  ".belowText h2 .char",
  {
    y: 0,
    opacity: 1,
    stagger: 0.03,
    duration: 1,
    ease: "power2.out",
  },
  "-=0.49"
);

tl.to(
  ".btnLike",
  { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.6)" },
  "-=0.4"
);
tl.from(
  ".btnLike .pen",
  { rotation: -30, x: -6, opacity: 0, duration: 0.45 },
  "-=0.55"
);

tl.to(
  ".headerModel .modelBg",
  { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power4.out" },
  "-=0.85"
);
tl.to(
  ".headerModel .headModel",
  { x: "-48%", opacity: 1, duration: 0.7, ease: "power3.out" },
  "-=0.9"
);

gsap.to(".topHeader .model1", {
  y: "+=10",
  repeat: -1,
  yoyo: true,
  duration: 3.6,
  ease: "sine.inOut",
  delay: 1.5,
  stagger: 0.25,
});
gsap.to(".topHeader .model2", {
  y: "-=10",
  repeat: -1,
  yoyo: true,
  duration: 3.6,
  ease: "sine.inOut",
  delay: 1.5,
  stagger: 0.25,
});

gsap.to(".section2", {
  scrollTrigger: {
    trigger: ".section2",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.to(".section2 .left p", {
  scrollTrigger: {
    trigger: ".section2 .left p",
    start: "top 88%",
  },
  y: 0,
  opacity: 1,
  duration: 0.6,
  ease: "power3.out",
});

gsap.to(".section2 .apps .app", {
  scrollTrigger: {
    trigger: ".section2 .apps",
    start: "top 85%",
  },
  scale: 1,
  rotate: 0,
  opacity: 1,
  duration: 0.6,
  ease: "back.out(1.7)",
  stagger: 0.15,
});

document.querySelectorAll(".topValues .value p:nth-child(1)").forEach((el) => {
  const finalVal = el.textContent;
  gsap.fromTo(
    el,
    { textContent: "0" },
    {
      textContent: finalVal,
      duration: 2,
      snap: { textContent: 1 },
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    }
  );
});

gsap.to(".topValues .value", {
  scrollTrigger: {
    trigger: ".topValues",
    start: "top 85%",
  },
  y: 0,
  scale: 1,
  opacity: 1,
  duration: 0.6,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.to(".belowClients img", {
  scrollTrigger: {
    trigger: ".belowClients",
    start: "top 80%",
  },
  x: 0,
  skewX: 0,
  opacity: 1,
  duration: 1,
  ease: "expo.out",
});

// Section 3

function splitToChars3(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const text = el.textContent.trim();
  el.innerHTML = text
    .split("")
    .map((ch) => {
      if (ch === " ") return `<span class="char">&nbsp;</span>`;
      return `<span class="char">${ch}</span>`;
    })
    .join("");
}

splitToChars3(".section3 .rightTexts h3");

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 78%",
    end: "bottom 40%",
    toggleActions: "play none none reverse",
  },
});

tl3.fromTo(
  ".section3 h2",
  { clipPath: "inset(0 0 100% 0)", y: 30 },
  { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1.5, ease: "power3.out" }
);

tl3.to(
  ".section3 .belows img",
  {
    x: 0,
    scale: 1,
    opacity: 1,
    duration: 1.3,
    delay: 0.5,
    ease: "expo.out",
  },
  "-=0.7"
);

tl3.to(
  ".section3 .rightTexts",
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  },
  "-=0.8"
);

tl3.to(
  ".section3 .rightTexts h3",
  {
    clipPath: "inset(0 0 0% 0)",
    duration: 0.8,
    ease: "power3.out",
  },
  "-=0.6"
);

// Then animate letters
tl3.to(
  ".section3 .rightTexts h3 .char",
  {
    y: 0,
    opacity: 1,
    stagger: 0.03,
    duration: 0.6,
    ease: "power2.out",
  },
  "-=0.5"
);

tl3.to(
  ".section3 .desc",
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power2.out",
  },
  "-=0.4"
);

tl3.to(
  ".section3 .btnLike",
  { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
  "-=0.3"
);
tl3.to(
  ".section3 .btnLike i",
  {
    rotation: 0,
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "elastic.out(1,0.6)",
  },
  "-=0.5"
);
tl3.to(
  ".section3 .btnLike .btnText",
  { x: 0, opacity: 1, duration: 0.5 },
  "-=0.45"
);

gsap.to(".section3 .belows img", {
  y: "+=30",
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  duration: 5,
});

const img = document.querySelector(".section3 .belows img");

img.addEventListener("mouseenter", () => {
  gsap.to(img, {
    scale: 1.1,
    rotationY: 8,
    rotationX: -5,
    boxShadow: "0 25px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,230,80,0.6)",
    filter: "brightness(1.2) contrast(1.1)",
    duration: 0.6,
    ease: "power3.out",
  });

  // Glitch effect
  gsap.to(img, {
    x: "+=8",
    repeat: 5,
    yoyo: true,
    duration: 0.08,
    ease: "rough({strength: 2, points: 20, clamp: true})",
  });
});

img.addEventListener("mouseleave", () => {
  gsap.to(img, {
    scale: 1,
    rotationY: 0,
    rotationX: 0,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    filter: "brightness(1) contrast(1)",
    duration: 0.8,
    ease: "expo.out",
  });
});

// section 4

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

tl4.to(".section4 .headerTexts h2", {
  y: 0,
  opacity: 1,
  stagger: 0.5,
  duration: 1,
  ease: "power3.out",
});

tl4.to(
  ".section4 .images p",
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
  },
  "-=0.4"
);

// Images stagger entrance
tl4.fromTo(
  ".section4 .images img:nth-of-type(1)",
  { x: -200, rotation: -15, opacity: 0 },
  { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
);

tl4.fromTo(
  ".section4 .images img:nth-of-type(2)",
  { scale: 0.5, rotation: 10, opacity: 0 },
  {
    scale: 1,
    rotation: 0,
    opacity: 1,
    duration: 1.2,
    ease: "elastic.out(1,0.6)",
  },
  "-=0.5"
);
tl4.fromTo(
  ".section4 .images img:nth-of-type(3)",
  { x: 200, skewX: 15, opacity: 0 },
  { x: 0, skewX: 0, opacity: 1, duration: 1, ease: "power4.out" },
  "-=0.6"
);
tl4.fromTo(
  ".section4 .images img:nth-of-type(4)",
  { y: 150, opacity: 0, filter: "blur(10px)" },
  { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
  "-=0.5"
);
tl4.fromTo(
  ".section4 .images img:nth-of-type(5)",
  { scale: 0.7, rotationY: 90, opacity: 0 },
  { scale: 1, rotationY: 0, opacity: 1, duration: 1.1, ease: "back.out(1.4)" },
  "-=0.6"
);
tl4.fromTo(
  ".section4 .images img:nth-of-type(6)",
  { y: 200, rotationZ: -10, opacity: 0 },
  { y: 0, rotationZ: 0, opacity: 1, duration: 1, ease: "power3.out" },
  "-=0.7"
);

const images = document.querySelectorAll(".section4 .images img");

images.forEach((img, i) => {
  img.addEventListener("mouseenter", () => {
    switch (i) {
      case 0: // img 1 → Tilt + subtle glow
        gsap.to(img, {
          scale: 1.08,
          rotationZ: 2,
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          duration: 0.4,
          ease: "power3.out",
        });
        break;

      case 1: // img 2 → Elastic bounce pop
        gsap.to(img, {
          scale: 1.15,
          y: -10,
          duration: 0.6,
          ease: "elastic.out(1,0.4)",
        });
        break;

      case 2: // img 3 → Skew & rotate
        gsap.to(img, {
          scale: 1.1,
          skewX: 5,
          rotateZ: -2,
          duration: 0.4,
          ease: "power2.out",
        });
        break;

      case 3: // img 4 → Lift + blur sharpen
        gsap.to(img, {
          y: -15,
          scale: 1.05,
          filter: "brightness(1.15) contrast(1.1)",
          duration: 0.4,
          ease: "power2.out",
        });
        break;

      case 4: // img 5 → 3D flip
        gsap.to(img, {
          scale: 1.1,
          rotationY: 15,
          duration: 0.5,
          ease: "back.out(1.5)",
        });
        break;

      case 5: // img 6 → Float + glowing shadow
        gsap.to(img, {
          y: -10,
          scale: 1.08,
          boxShadow: "0 25px 50px rgba(255, 200, 200, 0.4)",
          duration: 0.5,
          ease: "power3.out",
        });
        break;
    }
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      scale: 1,
      rotationZ: 0,
      rotationY: 0,
      skewX: 0,
      y: 0,
      filter: "none",
      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
      duration: 0.5,
      ease: "power3.inOut",
    });
  });
});

// section 5

function splitText5(el) {
  const node = document.querySelector(el);
  if (!node) return;
  node.innerHTML = node.textContent
    .split("")
    .map(
      (ch) => {
        if (ch === " ")
          return `<span style="display:inline-block; opacity:0; transform:translateY(40px)">&nbsp;</span>`;
        return `<span>${ch}</span>`;
      }
      // `<span  ">${ch}</span>`
    )
    .join("");
}

splitText5(".section5 .header h2");

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none reverse",
  },
});

tl5
  .to(".section5 .header h2 span", {
    opacity: 1,
    y: 0,
    stagger: 0.04,
    duration: 0.6,
    ease: "power3.out",
  })

  .to(
    ".section5 .header .right",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "back.out(1.4)",
    },
    "-=0.3"
  );

tl5
  .to(
    ".section5 .left img",
    {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      scale: 1,
      duration: 1,
      ease: "expo.out",
    },
    "-=0.2"
  )
  .to(
    ".section5 .left .texts",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.5"
  );

tl5.to(".section5 .right .texts", {
  opacity: 1,
  y: 0,
  duration: 0.7,
  stagger: 0.2,
  ease: "power3.out"
}, "-=0.4")
.to(".section5 .right img", {
  opacity: 1,
  x: 0,
  y: 0,
  rotateY: 0,
  scale: 1,
  duration: 1.1,
  ease: "expo.out"
}, "-=0.8");

// Parallax 
gsap.to(".section5 img", {
  yPercent: 4,
  ease: "none",
  scrollTrigger: {
    trigger: ".section5",
    scrub: 1
  }
});


document.querySelectorAll(".section5 .img-wrapper").forEach(wrapper => {
  wrapper.addEventListener("click", e => {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    wrapper.appendChild(ripple);

    let rect = wrapper.getBoundingClientRect();
    let size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size/2) + "px";
    ripple.style.top = (e.clientY - rect.top - size/2) + "px";

    gsap.fromTo(ripple, 
      { scale: 0, opacity: 0.6 }, 
      { scale: 2.5, opacity: 0, duration: 0.8, ease: "power2.out",
        onComplete: () => ripple.remove() }
    );
  });
});

const leftWrapper = document.querySelector(".section5 .left .img-wrapper");

leftWrapper.addEventListener("click", e => {
  let svg = leftWrapper.querySelector(".wave-svg");
  let waves = svg.querySelectorAll(".wave");

  gsap.fromTo(waves, 
    { scale: 0.2, opacity: 1, strokeWidth: 2 }, 
    { 
      scale: 3.5, 
      opacity: 0, 
      strokeWidth: 0.5,
      duration: 1.8, 
      ease: "sine.out",
      stagger: 0.2 // each wave follows like ocean ripples
    }
  );
});

// section 6

const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section6",
    start: "top 75%", // trigger when section is in viewport
    end: "bottom 60%",
    toggleActions: "play none none reverse"
  }
});

// Container reveal
tl6.to(".section6 .container", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power3.out"
});

const h3Text = document.querySelector(".section6 .left h3");
const words = h3Text.innerText.split(" ");
h3Text.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(" ");

tl6.to(".section6 .left h3 .word", {
  y: 0,
  skewY: 0,
  opacity: 1,
  filter: "blur(0px)",
  stagger: 0.15,
  duration: 0.6,
  ease: "power4.out"
}, "-=0.5");

// Buttons pop
tl6.to(".section6 .btns .btn1, .section6 .btns .btn2", {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 0.6,
  ease: "elastic.out(1, 0.6)",
  stagger: 0.15
}, "-=0.3");

// Click scale effect with GSAP
document.querySelectorAll(".section6 .btns div").forEach(btn => {
  btn.addEventListener("mousedown", () => {
    gsap.to(btn, { scale: 0.9, duration: 0.2 });
  });
  btn.addEventListener("mouseup", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
  });
});

// Hover effect on btns
document.querySelectorAll(".section6 .btns div").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.inOut" });
  });
});


// Yellow Circle bounce
tl6.to(".section6 .right", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "elastic.out(1, 0.7)"
}, "-=0.8");

tl6.to(".section6 img", {
  opacity: 1,
  duration: 1.3,
  ease: "expo.out",
  motionPath: {
    path: [{ x: 200, y: 120 }, { x: 0, y: 0 }],
    curviness: 1.2
  },
  rotate: 0,
  scale: 1
}, "-=1");

// // Subtle loop effects
// gsap.to(".section6 .right", {
//   scale: 1.05,
//   repeat: -1,
//   yoyo: true,
//   duration: 3.5,
//   ease: "sine.inOut"
// });

// gsap.to(".section6 img", {
//   y: "+=15",
//   rotate: "+=1",
//   repeat: -1,
//   yoyo: true,
//   duration: 4,
//   ease: "sine.inOut"
// });


// footer
let footerTL = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%", // when footer is near viewport
    toggleActions: "play none none reverse"
  },
  defaults: { ease: "power4.out", duration: 1 }
});
footerTL.from("footer", { yPercent: 20, opacity: 0, duration: 1 }, 0);

footerTL.fromTo("footer .header h2", 
  { opacity: 1 }, 
  { duration: 1.5, scrambleText: { text: "Heelo", chars: "upperCase", revealDelay: 0.5 } },
  "-=0.6"
);

footerTL.to("footer .header .selec p", { 
  opacity: 1, 
  y: 0, 
  skewY: 6, 
  stagger: 0.15, 
  duration: 0.6 
}, "-=1.0");

footerTL.to("footer .model", { 
  opacity: 1, 
  y: 0, 
  scale: 1, 
  duration: 1.1, 
  ease: "elastic.out(1, 0.7)" 
}, "-=0.8");

gsap.to("footer .model", {
  y: "-=45", 
  repeat: -1, 
  yoyo: true, 
  duration: 3, 
  ease: "sine.inOut"
});

footerTL.to("footer .social .icons a", { 
  opacity: 1, 
  y: 0, 
  scale: 1, 
  stagger: 0.12, 
  ease: "back.out(1.7)" 
}, "-=0.9");


footerTL.to(".social", { 
  opacity: 1, 
  y: 0, 
  duration: 0.8 
}, "-=0.6");


document.querySelectorAll(".social .icons a").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, { 
      scale: 1.3, 
      rotate: 10, 
      duration: 0.4, 
      ease: "elastic.out(1, 0.5)" 
    });
  });
icon.addEventListener("mouseleave", () => {
    gsap.to(icon, { 
      scale: 1, 
      rotate: 0, 
      duration: 0.4, 
      ease: "power3.out" 
    });
  });
});