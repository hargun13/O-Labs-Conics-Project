import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'

function Self_Evaluation() {
  return (
    <div>

      <Navbar />

      {/* Content for Evaluation page */}
      <div className='px-6 md:px-10 py-2 md:py-5 rounded-xl m-4 bg-white'>
            
      <Frame />

      <div className='border-r-2 border-b-2 border-l-2 rounded-xl py-10 md:px-10 px-3'>
        <form>

        {/* question 1 */}
        <div className=" p-10">
            <p className='text-3xl py-5'>1. What is a conic section? </p><br />
            <div class="flex items-center mb-4">
                <input id="q1-o1" type="radio" name="conics-q1" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q1-o1" aria-describedby="q1-o1"  />
                <label for="q1-o1" class="text-xl p-2">
                A) A curve obtained by intersecting a plane with a sphere  
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q1-o2" type="radio" name="conics-q1" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q1-o2" aria-describedby="q1-o2" />
                <label for="q1-o2" class="text-xl p-2">
                B) A curve obtained by intersecting a plane with a cylinder  
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q1-o3" type="radio" name="conics-q1" value="correct" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q1-o3" aria-describedby="q1-o3" />
                <label for="q1-o3" class="text-xl p-2">
                C) A curve obtained by intersecting a plane with a cone   
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q1-o4" type="radio" name="conics-q1" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q1-o4" aria-describedby="q1-o4" />
                <label for="q1-o4" class="text-xl p-2">
                D) A curve obtained by intersecting a sphere with a cylinder
                </label>
            </div>
        </div>


        
        {/* question 2 */}
        <div className=" p-10">
            <p className='text-3xl py-5'>2. What are the four types of conic sections? </p><br />
            <div class="flex items-center mb-4">
                <input id="q2-o1" type="radio" name="conics-q2" value="correct" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q2-o1" aria-describedby="q2-o1"  />
                <label for="q2-o1" class="text-xl p-2">
                A) Circle, Ellipse, Hyperbola, Parabola  
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q2-o2" type="radio" name="conics-q2" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q2-o2" aria-describedby="q2-o2" />
                <label for="q2-o2" class="text-xl p-2">
                B) Circle, Ellipse, Rectangle, Parabola   
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q2-o3" type="radio" name="conics-q2" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q2-o3" aria-describedby="q2-o3" />
                <label for="q2-o3" class="text-xl p-2">
                C) Triangle, Ellipse, Hyperbola, Parabola   
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q2-o4" type="radio" name="conics-q2" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q2-o4" aria-describedby="q2-o4" />
                <label for="q2-o4" class="text-xl p-2">
                D) Square, Ellipse, Hyperbola, Parabola
                </label>
            </div>
        </div>



        {/* question 3 */}
        <div className=" p-10">
            <p className='text-3xl py-5'>3. What is the standard form equation for a circle? </p><br />
            <div class="flex items-center mb-4">
                <input id="q3-o1" type="radio" name="conics-q3" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q3-o1" aria-describedby="q3-o1"  />
                <label for="q3-o1" class="text-xl p-2">
                A) Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q3-o2" type="radio" name="conics-q3" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q3-o2" aria-describedby="q3-o2" />
                <label for="q3-o2" class="text-xl p-2">
                B) Ax^2 + By^2 + Cx + Dy + E = 0  
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q3-o3" type="radio" name="conics-q3" value="correct" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q3-o3" aria-describedby="q3-o3" />
                <label for="q3-o3" class="text-xl p-2">
                C) (x-h)^2 + (y-k)^2 = r^2  
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q3-o4" type="radio" name="conics-q3" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q3-o4" aria-describedby="q3-o4" />
                <label for="q3-o4" class="text-xl p-2">
                D) Ax^2 + By^2 + Cx + Dy + E = 1
                </label>
            </div>
        </div>



        {/* question 4 */}
        <div className=" p-10">
            <p className='text-3xl py-5'>4. What is the standard form equation for an ellipse? </p><br />
            <div class="flex items-center mb-4">
                <input id="q4-o1" type="radio" name="conics-q4" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q4-o1" aria-describedby="q4-o1"  />
                <label for="q4-o1" class="text-xl p-2">
                A) (x-h)^2 + (y-k)^2 = r^2 
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q4-o2" type="radio" name="conics-q4" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q4-o2" aria-describedby="q4-o2" />
                <label for="q4-o2" class="text-xl p-2">
                B) Ax^2 + By^2 + Cx + Dy + E = 0 
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q4-o3" type="radio" name="conics-q4" value="correct" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q4-o3" aria-describedby="q4-o3" />
                <label for="q4-o3" class="text-xl p-2">
                C) Ax^2/a^2 + By^2/b^2 = 1 
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q4-o4" type="radio" name="conics-q4" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q4-o4" aria-describedby="q4-o4" />
                <label for="q4-o4" class="text-xl p-2">
                D) Ax^2 + By^2 = C
                </label>
            </div>
        </div>



        {/* question 5 */}
        <div className=" p-10">
            <p className='text-3xl py-5'>5. What is the standard form equation for a parabola? </p><br />
            <div class="flex items-center mb-4">
                <input id="q5-o1" type="radio" name="conics-q5" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o1" aria-describedby="q5-o1"  />
                <label for="q5-o1" class="text-xl p-2">
                A) Ax^2 + By^2 + Cx + Dy + E = 0 
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q5-o2" type="radio" name="conics-q5" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o2" aria-describedby="q5-o2" />
                <label for="q5-o2" class="text-xl p-2">
                B) Ax^2/a^2 + By^2/b^2 = 1 
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q5-o3" type="radio" name="conics-q5" value="correct" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o3" aria-describedby="q5-o3" />
                <label for="q5-o3" class="text-xl p-2">
                C) y = ax^2 + bx + c 
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="q5-o4" type="radio" name="conics-q5" value="incorrect" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="q5-o4" aria-describedby="q5-o4" />
                <label for="q5-o4" class="text-xl p-2">
                D) x = ay^2 + by + c
                </label>
            </div>
        </div>

        <div className='flex w-full justify-center text-3xl py-5 px-10 font-thin'>
          <button className='px-5 py-2 bg-[#EFF5F5] mx-5 border-2 border-black rounded-lg hover:text-green-600'>Evaluate</button>
          <button className='px-5 py-2 bg-[#EFF5F5] mx-5 border-2 border-black rounded-lg hover:text-red-400'>Reset</button>
        </div>

        </form>

      </div>
        
      </div>
      {/* ///////// */}


      <Footer />

    </div>
  )
}

export default Self_Evaluation