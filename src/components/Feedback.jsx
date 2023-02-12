import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'

function Feedback() {
  return (
    <div>

      <Navbar />

      {/* Content for Theory page */}
      <div className='px-10 py-5 rounded-xl m-4 bg-white'>
            
      <Frame />
      <div className='border-r-2 border-b-2 border-l-2 rounded-xl py-10 px-2 md:px-10'>

        <form className=''>

          <h1 className='text-center md:text-4xl text-xl py-2 underline font-light decoration-slate-500'>Feedback Form for C-DAC Online Labs</h1>
          <p className='text-center md:text-xl text-base'>Welcome to the C-DAC Online Lab online feedback system. Thanks for taking the time to share your feedback. We'll use the information you provide below to improve our virtual labs.</p>

          <h2 className='md:text-xl text-base py-10 font-bold'>*Required</h2>


          <div className="flex items-center my-10">
              <label for="name_of_the_user" class="md:text-xl md:p-2 text-sm font-semibold md:pr-8 underline">Name of the User:</label>
              <input id="name_of_the_user" type="text" name="name_of_the_user" class=" border-black border-2 md:px-5 md:py-2 px-2 rounded-lg" aria-labelledby="name_of_the_user" aria-describedby="name_of_the_user" />
          </div>
          <div className="flex items-center my-10">
              <label for="Department" class="md:text-xl pr-2 text-sm font-semibold md:p-2 md:pr-8 underline">*Department :</label>
              <select className='border-black border-2 md:px-5 md:py-2 px-2 rounded-lg'><option selected>Mathematics</option></select>
          </div>


          <h1 className='md:text-3xl text-lg text-center bg-gray-300 py-5 font-light'>Class Details</h1>
          <div className="flex items-center my-10 justify-center">
              <select className='border-black border-2 md:px-5 md:py-2 px-2 rounded-lg'><option selected>Additional Activity</option></select>
          </div>
          <div className="flex items-center mt-20 mb-10">
              <label for="name_of_Exp" class="md:text-xl pr-2 text-sm font-semibold md:p-2 md:pr-8 underline">*Name of the Experiment :</label>
              <select className='border-black border-2 md:px-5 md:py-2 px-2 rounded-lg'><option selected>Mathematics</option></select>
          </div>


          <div className='py-5 md:flex text-center text-sm'>

            <p className='md:text-xl underline text-lg font-semibold text-center md:text-left p-2'>*Type of Experiment :</p>
            <div class="flex items-center justify-center md:px-10">
                <input id="o1" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o1" class="md:text-lg p-2">
                Simulator
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o2" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o2" class="md:text-lg p-2">
                Measurement 
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o3" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o3" class="md:text-lg p-2">
                Remote Trigger
                </label>
            </div>

          </div>
          
          <div>
            <h1 className='md:text-3xl text-lg text-center bg-gray-300 py-5 px-2 my-10 font-light'>Please indicate your agreement with the following statements</h1>
            
            <table className='min-w-full divide-y divide-x divide-gray-400 border-2 border-black'>
              {/* headings */}
              <thead className='py-4'>
                <tr>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg pr-2' scope='col'> </th>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg' scope='col'>Excellent</th>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg' scope='col'>Very Good</th>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg' scope='col'>Good</th>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg' scope='col'>Average</th>
                  <th className='md:font-semibold font-thin md:px-9 text-center text-xs md:text-lg' scope='col'>Poor</th>
                </tr>
              </thead>

              {/* content/body */}
              <tbody className='divide-y'>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>How do you rate the online performance of the experiment?</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
                <tr className='text-xs md:text-lg'>
                  <td className='pr-4 py-4'>To what extent did you have control over the interactions?</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>To what degree was the actual lab environment simulated?</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
                <tr className='text-xs md:text-lg'>
                  <td className='pr-4 py-4'>Was the measurement and analysis of data easy for you?</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>The manuals were found to be helpful</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
                <tr className='text-xs md:text-lg'>
                  <td className='pr-4 py-4'>Were the links provided consistent with the objectives of the experiment?</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>Were the results of the experiment easily interpreted?</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
                <tr className='text-xs md:text-lg'>
                  <td className='pr-4 py-4'>A clear understanding of the experiment and related topics was gained</td>
                  <td className='md:pl-16'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-20'><input type="radio" name="" id="v" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="g" /></td>
                  <td className='md:pl-16'><input type="radio" name="" id="a" /></td>
                  <td className='md:pl-14'><input type="radio" name="" id="p" /></td>
                </tr>
              </tbody>
            </table>
          
          </div>

          <div>
            <p className='md:text-xl mt-10 underline text-lg font-semibold text-center md:text-left p-2'>How helpful do you feel the system is?</p>
            <textarea className='resize rounded-md border-2 border-black md:p-5 p-2' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <p className='md:text-xl mt-10 underline text-lg font-semibold text-center md:text-left p-2'>Did you experience any problem?</p>
            <textarea className='resize rounded-md border-2 border-black md:p-5 p-2' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <p className='md:text-xl mt-10 underline text-lg font-semibold text-center md:text-left p-2'>Is there anything you would like to tell us?</p>
            <textarea className='resize rounded-md border-2 border-black md:p-5 p-2' name="" id="" cols="30" rows="10"></textarea>
          </div>


          <div className='py-5 md:flex text-center text-sm'>

            <p className='md:text-xl underline text-lg font-semibold text-center md:text-left p-2 mr-10 md:w-96'>Did you feel confident while performing the experiment :</p>
            <div class="flex items-center justify-center md:px-10">
                <input id="o1" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o1" class="md:text-lg p-2">
                Yes
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o2" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o2" class="md:text-lg p-2">
                No 
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o3" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o3" class="md:text-lg p-2">
                Can't Say
                </label>
            </div>

          </div>

          <div className='py-5 md:flex text-center text-sm'>

            <p className='md:text-xl underline text-lg font-semibold text-center md:text-left p-2 mr-10 md:w-96'>Was the experiment/process motivating enough?</p>
            <div class="flex items-center justify-center md:px-10">
                <input id="o1" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o1" class="md:text-lg p-2">
                Yes
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o2" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o2" class="md:text-lg p-2">
                No 
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o3" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o3" class="md:text-lg p-2">
                Can't Say
                </label>
            </div>

          </div>

          <div className='py-5 md:flex text-center text-sm'>

            <p className='md:text-xl underline text-lg font-semibold text-center md:text-left p-2 mr-10 md:w-96'>Did you go through the manual/ step by step procedure before performing the experiments live?</p>
            <div class="flex items-center justify-center md:px-10">
                <input id="o1" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o1" class="md:text-lg p-2">
                Yes
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o2" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o2" class="md:text-lg p-2">
                No 
                </label>
            </div>
            

          </div>

          <div>
            <h1 className='md:text-4xl text-lg text-center py-5 px-2 my-10 font-light'>Please answer the following</h1>
            
            <table className='min-w-full divide-y divide-x divide-gray-400 border-2 border-black'>
              {/* headings */}
              <thead className='py-4'>
                <tr>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg pr-2' scope='col'> </th>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg' scope='col'>Yes</th>
                  <th className='md:font-semibold font-thin md:px-8 text-center text-xs md:text-lg' scope='col'>No</th>
                  
                </tr>
              </thead>

              {/* content/body */}
              <tbody className='divide-y'>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>Did you get the feel of a real lab while performing the experiments virtually?</td>
                  <td className='md:pl-12'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-12'><input type="radio" name="" id="v" /></td>
                  
                </tr>
                <tr className='text-xs md:text-lg'>
                  <td className='pr-4 py-4'>Did you feel the absence of an instructor?</td>
                  <td className='md:pl-12'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-12'><input type="radio" name="" id="v" /></td>
                  
                </tr>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>Could you run the experiments smoothly, i.e., without interruptions?</td>
                  <td className='md:pl-12'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-12'><input type="radio" name="" id="v" /></td>
                  
                </tr>
                <tr className='text-xs md:text-lg'>
                  <td className='pr-4 py-4'>Could you measure and analyse the data successfully?</td>
                  <td className='md:pl-12'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-12'><input type="radio" name="" id="v" /></td>
                  
                </tr>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>Did you follow the step by step procedure before doing the live experiment?</td>
                  <td className='md:pl-12'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-12'><input type="radio" name="" id="v" /></td>
                  
                </tr>
                <tr className='text-xs md:text-lg'>
                  <td className='pr-4 py-4'>Could you compare your results with the given typical results?</td>
                  <td className='md:pl-12'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-12'><input type="radio" name="" id="v" /></td>
                  
                </tr>
                <tr className='text-xs bg-gray-200 md:text-lg'>
                  <td className='pr-4 py-4'>Do you think performing experiments through virtual labs were more challenging than the real lab experiments?	</td>
                  <td className='md:pl-12'><input type="radio" name="" id="e" /></td>
                  <td className='md:pl-12'><input type="radio" name="" id="v" /></td>
                  
                </tr>
              </tbody>
            </table>
          
          </div>


          <div>
            <p className='md:text-xl mt-10 underline text-lg font-semibold text-center md:text-left p-2'>Specify three problems/difficulties you faced while performing the experiments?</p>
            <textarea className='resize rounded-md border-2 border-black md:p-5 p-2' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <p className='md:text-xl mt-10 underline text-lg font-semibold text-center md:text-left p-2'>Describe three interesting things about the experiments.</p>
            <textarea className='resize rounded-md border-2 border-black md:p-5 p-2' name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div className='py-5 md:flex text-center text-sm'>

            <p className='md:text-xl underline text-lg font-semibold text-center md:text-left p-2 mr-10 md:w-[65%]'>Did you go through the manual/ step by step procedure before performing the experiments live?</p>
            <div class="flex items-center justify-center md:px-10">
                <input id="o1" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o1" class="md:text-lg p-2">
                Yes
                </label>
            </div>
            <div class="flex items-center justify-center md:px-10">
                <input id="o2" type="radio" name="toe_option" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="o2" class="md:text-lg p-2">
                No 
                </label>
            </div>
      
          </div>

          <div className="flex items-center my-10">
              <label for="name_of_the_user" class="md:text-xl md:p-2 text-sm font-semibold md:pr-8 underline">Please type in the code shown: </label>
              <input id="name_of_the_user" type="text" name="name_of_the_user" class=" border-black border-2 md:px-5 md:py-2 px-2 rounded-lg" aria-labelledby="name_of_the_user" aria-describedby="name_of_the_user" />
              
              {/* place to enter the image of the code */}
          
          </div>

          <div className='flex w-full justify-center text-3xl py-5 px-10 font-thin'>
            <button className='px-5 py-2 bg-[#EFF5F5] mx-5 border-2 border-black rounded-lg hover:text-green-600'>Submit</button>
          </div>

        </form>

      </div>
        
      </div>
      {/* ///////// */}


      <Footer />

    </div>
  )
}

export default Feedback