import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'

function Reference() {
  return (
    <div>

      <Navbar />

      {/* Content for Theory page */}
      <div className='px-10 py-5 rounded-xl m-4 bg-white'>
            
      <Frame />
      <div className=' border-r-2 border-b-2 border-l-2 rounded-xl py-16 px-10'>
       <h1 className=' underline decoration-gray-400 text-orange-500 text-2xl'>You can check the following links if further reference is required</h1><br /><br />
       <p className='text-black font-medium text-lg'>1) https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/mathematics/kelm403.pdf</p><br /><br />
       <p className='text-black font-medium text-lg'>2) https://ncert.nic.in/textbook.php?kemh1=11-16</p><br />
      </div>
        
      </div>
      {/* ///////// */}


      <Footer />

    </div>
  )
}

export default Reference