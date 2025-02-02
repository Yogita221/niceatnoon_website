
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

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, 

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  console.log("Locomotive Scroll initialized");
  
}
function landingPageImages() {
  gsap.to(".image-section", {
    transform: "translateX(-70%)",
    scrollTrigger: {
      trigger: ".image-section",
      scroller: ".main",
      start: "top 55%",
      end: "top -100%",
      scrub: true,
    },
  });
}
function navAnimation() {
  var body = document.querySelector("body");
  body.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to("nav", {
        y: -100,
        duration: 0.6,
      });
    } else {
      gsap.to("nav", {
        y: 0,
        duration: 0.6,
      });
    }
})
  

}
function page2Paragraph() {
  gsap.from(".section-2", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".section-2",
      scroller: ".main",
      // markers:true,
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
locomotive();
navAnimation();
page2Paragraph();
landingPageImages();
