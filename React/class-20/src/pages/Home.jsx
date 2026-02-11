import gsap from "gsap";
import ServiceCard from "../components/card/ServiceCard";
import services from "../settings/services.data";
import { useEffect } from "react";


const Home = () => {

// useEffect(()=>{
//   gsap.from(".up",{
//   y:-50,
//   opacity:0,
//   duration:1

// })
// },[])


  return (
    <>

      <div className="h-screen w-full overflow-hidden bg-black relative">

        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 
                     w-[177.78vh] h-[100vh] 
                     min-w-[100vw] min-h-[56.25vw] 
                     -translate-x-1/2 -translate-y-1/2 
                     pointer-events-none"
            src="https://www.youtube.com/embed/xfIhnNPDvHs?autoplay=1&mute=1&loop=1&playlist=xfIhnNPDvHs&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative p-3  h-full flex justify-center max-w-screen-xl  mx-auto flex-col ">

          <h1 className="up  text-center md:text-left  text-6xl  md:text-9xl text-white font-bold transition-all duration-500">WELCOME TO</h1>
         
          <h1 className=" text-center md:text-left text-6xl  md:text-9xl text-transparent font-bold text-shadow-lg/30 transition-all duration-500" style={{ WebkitTextStroke: "2px red" }} >HeavyBite</h1>

        </div>

      </div>


      <div className="min-h-[50vh] flex gap-4 justify-center items-center">

        {
          services && services.length>0 && services.map((service,i)=> (
            <ServiceCard key={i} service={service} />
          ))
        }

      </div>
    </>

  )
}

export default Home
