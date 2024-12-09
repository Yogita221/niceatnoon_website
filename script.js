gsap.to(".image-section", {
  transform: "translateX(-70%)",
  scrollTrigger: {
    trigger: ".image-section",
    scroller: "body",
    // markers: "true",
    start: "top 40%",
    end: "top -100%",
    scrub: 2,
  },
});
