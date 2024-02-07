import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'

function Animation() {
  return (
    <div>

      <Navbar />

      <div className='px-10 py-5 rounded-xl m-4 bg-white'>
            
      <Frame />

      <div className='border-r-2 border-b-2 border-l-2 rounded-xl md:p-10 '>

        <h1 className='text-center text-xl font-semibold text-orange-500  md:text-5xl'>Reference Video for Conic Sections</h1>

        <iframe className='w-full aspect-video justify-center items-center my-10 h-full md:p-5' width="560" height="315" src="https://www.youtube.com/embed/HO2zAU3Eppo" 
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>

        </iframe>

      </div>
        
      </div>
      {/* ///////// */}


      <Footer />

    </div>
  )
}

export default Animation