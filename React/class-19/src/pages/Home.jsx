import React from 'react'

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-black relative">

        <iframe
        className='absolute inset-0 h-[120%] w-[120%] top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 pointer-events-none ' 
          src="https://www.youtube.com/embed/xfIhnNPDvHs?autoplay=1&mute=1&loop=1&playlist=xfIhnNPDvHs&showinfo=0&rel=0&modestbranding=0"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          
        ></iframe>


      </div>

    </>
  )
}

export default Home