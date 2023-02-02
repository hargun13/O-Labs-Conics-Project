import React from 'react';
import Frame from './components/FrameNavbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
        <Frame />
      <Footer />
    </div>    
  )
}

export default Home