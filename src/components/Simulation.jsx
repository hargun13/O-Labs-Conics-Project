import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'
import {Unity, useUnityContext}  from 'react-unity-webgl'



function Simulation() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "./Test_build_three/Build/Test_build_three.loader.js",
    dataUrl: "./Test_build_three/Build/webgl.data",
    frameworkUrl: "./Test_build_three/Build/build.framework.js",
    codeUrl: "./Test_build_three/Build/build.wasm",
  });

  return (
    <div>

      <Navbar />

      {/* Content for Theory page */}
      <div className='px-10 py-5 rounded-xl m-4 bg-white'>
            
      <Frame />
      <div className='border-r-2 border-b-2 border-l-2 rounded-xl py-10 px-5'>
      SIMULATION WILL COME HERE  

        <Unity style={{height:"auto", width:"100%"}} 
        unityProvider={unityProvider} />  
      
      </div>

      </div>
      {/* ///////// */}


      <Footer />

    </div>
  )
}

export default Simulation