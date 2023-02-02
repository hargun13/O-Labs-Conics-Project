import React,{useState} from 'react';
import theory from './assets/Theory_logo.png'
import animation from './assets/animation_logo.gif'
import simulation from './assets/simulator_logo.png';
import reference from './assets/reference_logo.png';
import feedback from './assets/feedback_logo.png';
import {FaBars,FaTimes} from 'react-icons/fa';
import Theory from './Theory';
import Animation from './Animation';
import Simulation from './Simulation';
import Self_Evaluation from './Self_Evaluation';
import Reference from './Reference';
import Feedback from './Feedback';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Frame() {

  const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };

  return (
  <>
    
    <div className=''>
        <p className='text-[10px] text-gray-500 font-semibold'>
            you are here-&gt;
            home-&gt;
            mathematics-&gt;
            additional activities-&gt;
            conic sections
        </p>

        <h1 className='text-orange-400 text-4xl py-5'>Conic Sections</h1>


        {/* Main Division */}
        {/* navbar */}
        <div className='flex justify-between'>
          <a href='/Theory'><li className='flex md:px-10 py-2 justify-center items-center md:border md:border-gray-300 font-medium text-gray-700 hover:text-blue-500 rounded-t-2xl cursor-pointer '><img src={theory} />Theory</li></a>
          <ul className='md:flex hidden w-screen'>
            <a href='/Animation' ><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={animation} />Animation</li></a>
            <a href='/Simulation' ><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={simulation} />Simulator</li></a>
            <a href='/SelfEvaluation'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={animation} />Self evalutaion</li></a>
            <a href='/Reference'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={reference} />Reference</li></a>
            <a href='/Feedback'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={feedback} />Feedback</li></a>
          </ul>

          <div onClick={handleNav} className='block md:hidden px-3 pt-4 items-center justify-center'>
                {!nav ? <FaBars className='cursor-pointer ' size={25} /> : <FaTimes className='cursor-pointer' size={25}/> }
          </div>
          
          <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white  p-4 ' : ' fixed left-[-100%]'}>
            
            <ul className='pt-10 uppercase'>
      
              <li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer'><img src={theory} />Theory</li>
              <li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer'><img src={animation} />Animation</li>
              <li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer'><img src={simulation} />Simulator</li>
              <li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer'><img src={animation} />Self evalutaion</li>
              <li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer'><img src={reference} />Reference</li>
              <li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer'><img src={feedback} />Feedback</li>

            </ul>
          </div>

        </div>     
        
    </div>
    
    </>
  )
}

export default Frame