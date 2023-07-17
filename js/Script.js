// GSAP ScrollTrigger configuration
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".container",
  {
    height: "100dvh",
  },
  {
    height: "50px",
    duration: 3,
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom top",
      scrub: true,
      markers: true,
      // pin: true,
    },
  }
);

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
