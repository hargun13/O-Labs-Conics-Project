import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'

function Self_Evaluation() {
  return (
    <div>

      <Navbar />

      {/* Content for Theory page */}
      <div className='px-10 py-5 rounded-xl m-4 bg-white'>
            
      <Frame />
      <div className='border-r-2 border-b-2 border-l-2 rounded-xl py-10 px-5'>
      THE QUIZ WILL COME HERE
      </div>
        
      </div>
      {/* ///////// */}


      <Footer />

    </div>
  )
}

export default Self_Evaluation