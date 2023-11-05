import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'
import DeviceOrientationPrompt from './DeviceOrientationPrompt'
import {Unity, useUnityContext}  from 'react-unity-webgl'

function Simulation() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "./New Build File/Build/New Build File.loader.js",
    dataUrl: "./New Build File/Build/webgl.data",
    frameworkUrl: "./New Build File/Build/build.framework.js",
    codeUrl: "./New Build File/Build/build.wasm",
  });


  return (
    <div>

      <Navbar />

      <div className='px-10 py-5 rounded-xl m-4 bg-white'>
            
      <Frame />
      <DeviceOrientationPrompt />

      <div className='border-r-2 border-b-2 border-l-2 rounded-xl py-10 px-5'>

        <Unity style={{height:"auto", width:"100%"}} 
        unityProvider={unityProvider} />  
      
      </div>

      </div>

      <Footer />

    </div>
  )
}

export default Simulation