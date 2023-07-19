gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".container",
  {
    height: "100dvh",
  },
  {
    height: "50px",
    // duration: 3,
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  }
);

var scalemax = undefined;
if (screen.width >= 500) {
  scalemax = 8;
} else {
  scalemax = 2.5;
}

gsap.fromTo(
  "span",
  { scale: scalemax },
  {
    scale: 1,
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  }
);
gsap.fromTo(
  ".container video",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  }
);

gsap.fromTo(
  ".header",
  { height: "200dvh" },
  {
    height: "100dvh",
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  }
);

// gsap.from(".header2", {
//   scrollTrigger: { trigger: "header2", snap: true, scrub: true },
// });
// function init() {
//   // Variables
//   const videoContainer = document.querySelector(".second");
//   const video = document.querySelector(".earth");
//   const videoDuration = video.duration;
//   console.log("asfd");
//   console.log(video.duration);
//   // Pin the video container
//   ScrollTrigger.create({
//     trigger: videoContainer,
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     pinSpacing: false,
//   });

//   // Scrub the video based on scroll position
//   ScrollTrigger.create({
//     trigger: videoContainer,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     anticipatePin: 1,
//     // normalizeScroll: true,
//     onUpdate: (self) => {
//       const progress = self.progress;
//       video.currentTime = progress * videoDuration;
//     },
//   });
// }

// window.addEventListener("load", function () {
//   init();
// });
