gsap.from(".page1 .box",{
  opacity:0,
  rotate:360,
  delay:0.5,
  duration:1,
  scale:0
})


gsap.from(".page2 .box",{
  opacity:0,
  rotate:360,
  // delay:0.5,
  // duration:1,
  scale:0,
  // scrollTrigger:".page2 .box"
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 30%",
    // scrub:true
    scrub:3  // 1-5
  }
})

gsap.to(".page3 h1",{
   transform: "translateX(-67%)",
   
   scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:4,
    pin:true
   }
})