gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

let _top = document.querySelector(".top");

for (i = 0; i < 100; i++) {
  let particle = document.createElement("div");
  particle.className = "particle";
  particle.style.bottom = `${Math.random() * -25 - 2}vh`;
  particle.style.left = `${Math.random() * 100}vw`;
  [particle.style.width, particle.style.height] = `${Math.random() * 500}px`;
  _top.appendChild(particle);
}

let particles = document.querySelectorAll(".particle");
let particles1 = document.querySelectorAll(".particle");
let particles2 = document.querySelectorAll(".particle");
particles.forEach((particle) => {
  tl.to(particle, {
    y: -1000,
    // stagger: 0.5,
    rotate: 360,
    duration: 2,
    opacity: 1,
  });
});

tl.to(".fish h1", {
  scrollTrigger: {
    trigger: ".fish h1",
    end: "bottom 50vh",
    scrub: 0.5,

    toggleActions: "restart none none reverse",
  },
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});
tl.to(".fish p", {
  scrollTrigger: {
    trigger: ".fish p",
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  y: 2,
  opacity: 1,
  duration: 0.1,
});

let fishes = document.querySelectorAll(".fish img");
fishes.forEach((fish) => {
  fish.style.width = `${Math.random() * 80 + 80}px`;
  fish.style.bottom = `${Math.random() * 15 + 1}vh`;
});

tl.to(fishes, {
  scrollTrigger: {
    trigger: ".fish",
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  x: -200,
  opacity: 1,
  duration: 0.1,
});

tl.to(".geothermal h1", {
  scrollTrigger: {
    trigger: ".geothermal",
    end: "top 50vh",
    scrub: 0.5,

    toggleActions: "restart none none reverse",
  },
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});
tl.to(".geothermal>p", {
  scrollTrigger: {
    trigger: ".geothermal",
    start: "center 20vh",
    end: "top 100vh",
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  y: 10,
  opacity: 1,
  duration: 0.1,
});
tl.to(".glacier  img", {
  scrollTrigger: {
    trigger: ".glacier",
    start: "top 90%",
    end: "top -90%",

    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  y: -200,
  zIndex: 1,
  //   duration: 1,
});

let box = document.querySelector(".swimming");
let box1 = document.querySelector(".sailing");
let widths = box.offsetWidth + box1.offsetWidth + box1.offsetWidth * 0.005;
tl.to(".content_container", {
  scrollTrigger: {
    trigger: ".sport",
    end: "+=2800",
    pin: true,
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  x: -widths,

  duration: 20000,
});
tl.to(".rivers h1", {
  scrollTrigger: {
    trigger: ".rivers",
    end: "top 50vh",
    scrub: 0.5,

    toggleActions: "restart none none reverse",
  },
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

tl.to(".rivers p", {
  scrollTrigger: {
    trigger: ".rivers",
    start: "center 20vh",
    end: "top 100vh",
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  y: 10,
  opacity: 1,
  duration: 0.1,
});
tl.to(".food h1", {
  scrollTrigger: {
    trigger: ".food",
    end: "top 50vh",
    scrub: 0.5,

    toggleActions: "restart none none reverse",
  },
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

tl.to(".food p", {
  scrollTrigger: {
    trigger: ".food",
    start: "center 20vh",
    end: "top 100vh",
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  y: 10,
  opacity: 1,
  duration: 0.1,
});
tl.to(".drink h1", {
  scrollTrigger: {
    trigger: ".drink",
    end: "top 50vh",
    scrub: 0.5,

    toggleActions: "restart none none reverse",
  },
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

tl.to(".drink p", {
  scrollTrigger: {
    trigger: ".drink",
    start: "center 20vh",
    end: "top 100vh",
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  y: 10,
  opacity: 1,
  duration: 0.1,
});
tl.to(".cleaning h1", {
  scrollTrigger: {
    trigger: ".cleaning",
    end: "top 50vh",
    scrub: 0.5,

    toggleActions: "restart none none reverse",
  },
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

tl.to(".cleaning p", {
  scrollTrigger: {
    trigger: ".cleaning",
    start: "center 30vh",
    end: "top 100vh",
    scrub: 0.5,
    toggleActions: "restart none none reverse",
  },
  y: 10,
  opacity: 1,
  duration: 0.1,
});
tl.to(
  ".drink img",
  {
    scrollTrigger: {
      trigger: ".drink",
      start: "top 500vh",
      end: "bottom 100vh",
      scrub: 0.5,
      toggleActions: "restart none none reverse",
    },
    rotation: -30,
    transformOrigin: "left 50%",
    y: -400,
    x: -50,
    duration: 0.1,
  },
  "-=4"
);
tl.to(
  ".cleaning img",
  {
    scrollTrigger: {
      trigger: ".cleaning",
      start: "top 500vh",
      end: "bottom 100vh",
      scrub: 0.5,
      toggleActions: "restart none none reverse",
    },
    y: -150,
    duration: 1,
  },
  "+=4"
);
