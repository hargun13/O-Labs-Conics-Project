import React from 'react';
import amrita from './assets/amrita-logo.jpg';
import cdac from './assets/cdac-logo.jpg';
import olabs from './assets/oLabs_logo.jpg';
import flag from './assets/select_lang_logo.png'
// import {FaBars,FaTimes} from 'react-icons/fa';
import {IoMdArrowDropdown} from 'react-icons/io';
// ,{useState}

function Navbar() {
  
    // const [nav,setNav] = useState(false);

    // const handleNav =()=>{
    //     setNav(!nav);
    // };


  return (
    <div className='px-4 mb-5'>

        {/* navbar part 1 */}
        <div className='md:flex md:justify-between justify-center items-center '>
            <div>
                <img src={olabs} alt="O-Labs Logo" />
            </div>

            <div className='flex '>
                <img src={amrita} alt="Amrita Logo" />
                <img src={cdac} alt="C-DAC Logo" />
            </div>
        </div>


        {/* navbar part 2 with white background*/}
        <div className='text-gray-600 bg-white flex  h-13 rounded-xl   justify-between   '>
            
        <div aria-label="primary" className="  h-13 md:flex hidden pb-4 md:pb-0 justify-between  rounded-xl bg-white  ">
            
            <div className='float-left'>
                
                <div className='flex rounded-l-xl'>    
                    <div className='px-4 py-4 font-bold text-gray-600 justify-center items-center cursor-pointer hover:text-white hover:bg-blue-500 text-sm rounded-l-xl'>Home</div>    
                
                    <div className="relative group hover:bg-blue-500  ">

                        <button className="flex w-full mt-3  font-bold md:w-auto md:inline md:mt-0 px-4 p-1 py-4 hover:text-white text-gray-600 text-sm  cursor-pointer items-center justify center  ">
                            <span className='flex items-center justify-center '>About <IoMdArrowDropdown /></span>
                        </button>

                        <div className="absolute  hidden group-hover:block">   
                            <div className=" pt-2 pb-4 w-60 bg-white shadow-lg">

                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>FAQ</p>
                            </div>
                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>System Requirements</p>
                            </div>

                            </div>
                        </div>

                    </div>  

                    <div className='px-4 py-4 font-bold text-gray-600 justify-center items-center cursor-pointer hover:text-white hover:bg-blue-500 text-sm '>In the news</div>    

                    <div className='px-4 py-4 font-bold text-gray-600 justify-center items-center cursor-pointer hover:text-white hover:bg-blue-500 text-sm '>Workshops</div>    

                    <div className="relative group hover:bg-blue-500 place-content-center ">

                        <button className="flex w-full mt-3 md:w-auto  md:mt-0  p-4  font-bold hover:text-white text-gray-600 text-sm  cursor-pointer items-center justify-center  ">
                            <span className='flex items-center justify-center'>Training <IoMdArrowDropdown /></span>
                        </button>

                        <div className="absolute  hidden group-hover:block">   
                            <div className=" pt-2 pb-4 w-60 bg-white shadow-lg">

                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>Training Calender</p>
                            </div>
                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>Request for Training</p>
                            </div>
                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>Training Status</p>
                            </div>

                            </div>
                        </div>

                    </div>

                    <div className="relative group hover:bg-blue-500  ">

                        <button className="flex w-full mt-3  font-bold md:w-auto md:inline md:mt-0  p-4 hover:text-white text-gray-600 text-sm  cursor-pointer items-center justify center  ">
                            <span className='flex items-center justify-center'>Registration <IoMdArrowDropdown /></span>
                        </button>

                        <div className="absolute  hidden group-hover:block">   
                            <div className=" pt-2 pb-4 w-60 bg-white shadow-lg">

                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>For Teachers</p>
                            </div>
                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>For Students</p>
                            </div>
                            <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                <p>For Schools</p>
                            </div>

                            </div>
                        </div>

                    </div>

                    <div className='px-4 py-4 font-bold text-gray-600 justify-center items-center cursor-pointer hover:text-white hover:bg-blue-500 text-sm '>Contact Us</div>    

                    <div className='px-4 py-4 font-bold text-gray-600 justify-center items-center cursor-pointer hover:text-white hover:bg-blue-500 text-sm '>Login</div>    
                </div>

            </div>
            
            {/* language selector seperation -- flag image */}

            <div className='absolute left-[93%]'>

                <div className="relative  group hover:bg-blue-500 rounded-r-xl ">

                    <button className="flex w-full p-4 h-full rounded-r-xl cursor-pointer items-center justify-center  ">
                        <span className='flex items-center justify-center '><img src={flag} alt='flag'/></span>
                    </button>

                    <div className="absolute  hidden group-hover:block">   
                        <div className=" pt-2 pb-4 w-60 bg-white shadow-lg">

                        <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                            <p>English</p>
                        </div>
                        <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                            <p>हिंदी   </p>
                        </div>
                        <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                            <p>English</p>
                        </div>
                        <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                            <p>मराठी</p>
                        </div>
                        <div className="px-4 text-gray-600 font-bold text-sm py-2 border-b-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                            <p>English</p>
                        </div>  

                        </div>
                    </div>
                </div>

            </div>            
            
            
        </div>
            
        </div>
    </div>
  )
}

export default Navbar