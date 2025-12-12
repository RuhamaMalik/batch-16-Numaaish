////////////// to, from  , fromTo


// gsap.to(".box", {
//   x: 800,
//   // y: 300,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   borderRadius: "50%",
//   backgroundColor: "aqua"
// });


// gsap.from(".box2", {
//   x: 800,
//   // y: 300,
//   duration: 2,
//   opacity:0,
//   delay: 1,
//   rotate: 360,
//   borderRadius: "50%",
//   backgroundColor: "aqua"
// })

// gsap.from("h1", {
// opacity: 0,
// y: 20,
// delay:1,
// duration:1,
//   stagger:0.5
// })


// gsap.from("h1 span",{
//   opacity:0,
//   delay:0.5,
//   duration:0.5,
//   stagger:0.5,
//   boxShadow:"0px 14px 6px green",
//   repeat:-1 // -1 infinite
// })

//////////////////// timeline

// gsap.from("h1", {
//   opacity: 0,
//   y: 20,
//   delay: 1,
//   duration: 1,
// })
// gsap.from("p", {
//   opacity: 0,
//   y: 20,
//   delay: 2,
//   duration: 1,
// })

// gsap.from("button", {
//   opacity: 0,
//   y: 20,
//   delay: 3,
//   duration: 1,
// })


// const tl = gsap.timeline();

// tl.from("h1", {
//   opacity: 0,
//   y: 20,
//   delay: 1,
//   duration: 1,
// })
// tl.from("p", {
//   opacity: 0,
//   y: 20,
//   duration: 1,
// })
// tl.from("button", {
//   opacity: 0,
//   y: 20,
//   duration: 1,
// })

///////////////// timeline example

const tl = gsap.timeline();

tl.from(".logo",
  {
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    y: 15
  }
);

tl.from(
  "nav a", {
  opacity: 0,
  duration: 0.8,
  y: 15,
  stagger:0.3
}
)


tl.from(".hero",{
  opacity:0,
  y:500,
  duration:1,
})


tl.from(".hero h1",{
  opacity:0,
 scale:0,
  duration:1,
})
tl.from(".hero p",{
  opacity:0,
 scale:0,
  duration:1,
})