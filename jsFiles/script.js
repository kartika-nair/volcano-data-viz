let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  // .fromTo(".volcano", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .fromTo(".liquid", { opacity: 0 }, { opacity: 1, duration: 4 })
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 4 })
  .to(".content", 10,  { top: "-100%"})
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 4 })
  .to(".content", 10,  { top: "-200%"})
  .fromTo(".dead", { opacity: 0 }, { opacity: 1, duration: 4 })
  .to(".content", 10,  { top: "-305%"})
  .fromTo(".ashen", { opacity: 0 }, { opacity: 1, duration: 4 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);