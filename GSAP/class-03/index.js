let cursor = document.getElementById("cursor");
let cursorInner = document.getElementById("cursorInner");


document.getElementById("body").addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out"
  })
})




let elements = document.querySelectorAll(".hover-ele");

Array.from(elements)?.forEach((ele) => {
  ele.addEventListener("mouseenter", (e) => {

    gsap.to(cursor, {
      border: "none",
      boxShadow: "none"
    })

    gsap.to(cursorInner, {
      scale: 6.5,
      opacity: 0.3
    })

  })
})


Array.from(elements)?.forEach((ele) => {
  ele.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      border: " 1px solid red",
      boxShadow: "2px 6px 8px rgba(255, 0, 0, 0.72)"
    })

    gsap.to(cursorInner, {
      scale: 1,
      opacity: 1
    })

  })
})

// //////////////////////////////// Side Menu (timeline)

// const tl = gsap.timeline({paused:true});
const tl = gsap.timeline();

tl.to(".sideMenu",{
  right:0,
  duration:1
})


tl.from(".sideMenu a",{
  x:100,
  stagger:0.3,
  opacity:0,
  duration:0.5
})

tl.from(".sideMenu i",{
  opacity:0,
  x:50,
  duration:0.5
})


tl.pause();

document.getElementById("menuIcon").addEventListener("click",()=>{
  tl.play();
})

document.getElementById("closeIcon").addEventListener("click",()=>{
  tl.reverse();
})