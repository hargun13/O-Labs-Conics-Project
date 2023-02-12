import React,{useState} from 'react';
import theory from './assets/Theory_logo.png'
import animation from './assets/animation_logo.gif'
import simulation from './assets/simulator_logo.png';
import reference from './assets/reference_logo.png';
import feedback from './assets/feedback_logo.png';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Theory from './Theory';
// import Animation from './Animation';
// import Simulation from './Simulation';
// import Self_Evaluation from './Self_Evaluation';
// import Reference from './Reference';
// import Feedback from './Feedback';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';

function Frame() {

  const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };

  return (
  <>
    
    <div className='md:px-5 '>
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
        <div className='flex justify-between '>
          <Link to='/Theory'><li className='flex md:px-10 py-2 justify-center items-center md:border md:border-gray-300 font-medium text-gray-700 hover:text-blue-500 rounded-t-2xl cursor-pointer '><img src={theory} alt='navlogo'/>Theory</li></Link>
          <ul className='md:flex hidden w-screen'>
            
            <Link to='/Animation' ><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={animation} alt='navlogo'/>Animation</li></Link>
            <Link to='/Simulation' ><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={simulation} alt='navlogo' />Simulator</li></Link>
            <Link to='/SelfEvaluation'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={animation} alt='navlogo'/>Self evalutaion</li></Link>
            <Link to='/Reference'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={reference} alt='navlogo'/>Reference</li></Link>
            <Link to='/Feedback'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-t-2xl cursor-pointer hover:text-blue-500'><img src={feedback} alt='navlogo'/>Feedback</li></Link>
          
          </ul>

          <div onClick={handleNav} className='block md:hidden px-3 pt-4 items-center justify-center'>
                {!nav ? <FaBars className='cursor-pointer ' size={25} /> : <FaTimes className='cursor-pointer' size={25}/> }
          </div>
          
          <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white  p-4 ' : ' fixed left-[-100%]'}>
            
            <ul className='pt-10 uppercase'>

              <Link to='/Theory'><li className='flex md:px-10 justify-center items-center border md:border-gray-300 font-medium text-gray-700 hover:text-blue-500 rounded-2xl cursor-pointer py-2 my-5'><img src={theory} alt='navlogo'/>Theory</li></Link>
              <Link to='/Animation' ><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-2xl cursor-pointer hover:text-blue-500 my-5'><img src={animation} alt='navlogo'/>Animation</li></Link>
              <Link to='/Simulation' ><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-2xl cursor-pointer hover:text-blue-500 my-5'><img src={simulation} alt='navlogo' />Simulator</li></Link>
              <Link to='/SelfEvaluation'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-2xl cursor-pointer hover:text-blue-500 my-5'><img src={animation} alt='navlogo'/>Self evalutaion</li></Link>
              <Link to='/Reference'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-2xl cursor-pointer hover:text-blue-500 my-5'><img src={reference} alt='navlogo'/>Reference</li></Link>
              <Link to='/Feedback'><li className='flex px-10 py-2 justify-center items-center border border-gray-300 font-medium text-gray-700 rounded-2xl cursor-pointer hover:text-blue-500 my-5'><img src={feedback} alt='navlogo'/>Feedback</li></Link>

            </ul>
          </div>

        </div>     
        
    </div>
    
    </>
  )
}

export default Frame