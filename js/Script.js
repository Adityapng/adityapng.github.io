// GSAP ScrollTrigger configuration
gsap.registerPlugin(ScrollTrigger);

function init() {
  // Variables
  const videoContainer = document.querySelector(".second");
  const video = document.querySelector(".earth");
  const videoDuration = video.duration;

  // Pin the video container
  ScrollTrigger.create({
    trigger: videoContainer,
    start: "top top",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
  });

  // Scrub the video based on scroll position
  ScrollTrigger.create({
    trigger: videoContainer,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      video.currentTime = progress * videoDuration;
    },
  });
}

window.addEventListener("load", function () {
  init();
});
