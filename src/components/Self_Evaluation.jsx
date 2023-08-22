import React from "react";
import Footer from "./Footer";
import Frame from "./FrameNavbar";
import Navbar from "./Navbar";
// import Tick from "./assets/tick.gif";
// import Wrong from "./assets/wrong.gif";
import Question from "./Question";

function SelfEvaluation() {
  return (
    <div>
      <Navbar />
      {/* Content for Evaluation page */}
      <div className="px-6 md:px-10 py-2 md:py-5 rounded-xl m-4 bg-white">
        <Frame />

        <div className="border-r-2 border-b-2 border-l-2 rounded-xl py-10 md:px-10 px-3">
          <form>
            {/* question 1 */}
            <Question
              question="1. What is a conic section?"
              option1="A) A curve obtained by intersecting a plane with a sphere"
              option2="B) A curve obtained by intersecting a plane with a cylinder"
              option3="C) A curve obtained by intersecting a plane with a cone"
              option4="D) A curve obtained by intersecting a sphere with a cylinder"
              correctResponse="C"
            />

            {/* question 2 */}
            <Question
              question="2. What are the four types of conic sections?"
              option1="A) Circle, Ellipse, Rectangle, Parabola"
              option2="B) Circle, Ellipse, Hyperbola, Parabola"
              option3="C) Triangle, Ellipse, Hyperbola, Parabola"
              option4="D) Square, Ellipse, Hyperbola, Parabola"
              correctResponse="B"
            />

            {/* question 3 */}
            <Question
              question="3. What is the standard form equation for a circle?"
              option1="A) Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0"
              option2="B) Ax^2 + By^2 + Cx + Dy + E = 0"
              option3="C) (x-h)^2 + (y-k)^2 = r^2"
              option4="D) Ax^2 + By^2 + Cx + Dy + E = 1"
              correctResponse="C"
            />

            {/* question 4 */}
            <Question
              question="4. What is the standard form equation for an ellipse?"
              option1="A) (x-h)^2 + (y-k)^2 = r^2"
              option2="B) Ax^2 + By^2 + Cx + Dy + E = 0"
              option3="C) Ax^2/a^2 + By^2/b^2 = 1"
              option4="D) Ax^2 + By^2 = C"
              correctResponse="C"
            />

            {/* question 5 */}
            <Question
              question="5. What is the standard form equation for a parabola?"
              option1="A) Ax^2 + By^2 + Cx + Dy + E = 0"
              option2="B) Ax^2/a^2 + By^2/b^2 = 1"
              option3="C) x^2 = y^2 + c"
              option4="D) y^2 = ax^2 + bx + c"
              correctResponse="D"
            />

            <div className="flex w-full justify-center text-3xl py-5 px-10 font-thin">
              {/* <button
                type="submit"
                id="evaluate"
                className="px-5 py-2 bg-[#EFF5F5] mx-5 border-2 border-black rounded-lg hover:text-green-600"
              >
                Submit
              </button> */}
              <button
                id="reset"
                className="px-5 py-2 bg-[#EFF5F5] mx-5 border-2 border-black rounded-lg hover:text-red-400"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ///////// */}

      <Footer />
    </div>
  );
}

export default SelfEvaluation;