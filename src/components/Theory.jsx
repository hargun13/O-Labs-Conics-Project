import React from 'react'
import Footer from './Footer'
import Frame from './FrameNavbar'
import Navbar from './Navbar'
import cone from './assets/conics_illustration.png'
import table from './assets/conics_table.png'

function Theory() {
  return (
    <div>

      <Navbar />

      {/* Content for Theory page */}
      <div className='px-6 md:px-10 py-2 md:py-10 rounded-xl m-4 bg-white'>
            
      <Frame />

      <div className='border-r-2 border-b-2 border-l-2 rounded-xl py-10 md:px-10 px-3'>
        
        <h1 className='text-black text-3xl underline py-1'>Objective:</h1>
        <p className='text-xl font-thin pt-2 pb-5'>To construct different types of conic sections</p>

        <h1 className='text-black text-3xl underline py-1'>Types of Conics</h1>
        <p className='text-xl font-thin pb-5 pt-2'>A conic section, conic or a quadratic curve is a curve obtained from a cone's surface intersecting a plane.</p>
        <div className=''>
        <img className='md:h-[400px] md:w-[400px] h-[250] w-[250] border-2 border-black mx-auto ' src={cone} alt='conics illustration'></img>
        </div>
        <p className='text-xl font-thin pb-2 pt-5'>A conic section is a curve obtained by intersecting a cone with a plane. There are four types of conic sections:</p>
        <ul className='text-xl font-thin pb-10 pl-5 '>
          <li>•	Circle: A circle is obtained when the intersecting plane is perpendicular to the axis of the cone.</li>
          <li>•	Ellipse: An ellipse is obtained when the intersecting plane is oblique to the axis of the cone, but does not intersect either vertex of the cone.</li>
          <li>•	Hyperbola: A hyperbola is obtained when the intersecting plane intersects both vertices of the cone.</li>
          <li>•	Parabola: A parabola is obtained when the intersecting plane is parallel to a generator of the cone.</li>
        </ul>
        
        <h1 className='text-black text-3xl underline py-1'>General Equation for any Conic Section:</h1>
        <p className='text-xl font-thin pb-2 pt-5'>Each of these conic sections can be described using an equation. The general equation for a conic section is:</p>
        <p className='text-sm font-extrabold md:font-thin md:text-5xl pb-5 pt-5 border-2 border-black text-center'>Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0</p>
        <p className='text-xl font-thin pb-2 pt-5'>Where A, B, C, D, E, and F are constants. By transforming the equation, it can be transformed into standard form for each of the four conic sections.</p>
        <p className='text-xl font-thin pb-2 pt-5'>The properties of conic sections, such as the focus, directrix, eccentricity, and other characteristics, can be determined from the standard form equation.</p>

        <h1 className='text-black text-3xl underline py-1'>Conics Sections and their Equations:</h1>
        <div>
          <img src={table} alt="table for all conic sections" className='py-5 h-[500px] md:h-auto mx-auto' />
        </div>

        <h1 className='text-black text-3xl underline py-1'>Application of Conic Sections:</h1>
        <p className='text-xl font-thin pb-2 pt-5'>This activity helps in understanding various types of conic sections which have wide spread applications in real life situations and modern sciences. For example, conics have interesting geometric properties that can be used for the reflection of light rays and beams of sound, i.e.</p>
        <ol className='text-xl font-thin pb-10 pl-5'>
          <li>1.	Circular disc reflects back the light issuing from centre to the centre again. </li>
          <li>2.	Elliptical disc reflects back the light issuing from one focus to the other focus.</li>
          <li>3.	Parabolic disc reflects back the light issuing from one focus parallel to its axis.</li>
          <li>4.	Hyperbolic disc reflects back the light issuing from one focus as if coming from other focus.</li>
        </ol>

        <h1 className='text-black text-3xl underline py-1'>Real Life Applications of Conic Sections:</h1>
        <p className='text-xl font-thin pb-2 pt-5'>Conic sections have many important applications in various fields such as mathematics, science, engineering, and technology. Some of the basic applications are:</p>
        <ol className='text-xl font-thin pb-10 pl-5'>
          <li>1.	Astronomy: Conic sections are used to describe the motion of celestial objects, such as planets and comets, around the sun.</li>
          <li>2.	Engineering: Conic sections are used in the design of reflectors and lenses in optical systems, as well as in the design of structures like bridges and arches.</li>
          <li>3.	Physics: Conic sections are used to describe the trajectory of projectiles and objects moving under the influence of gravity.</li>
          <li>4.	Economics: Conic sections are used in the optimization of production processes, to determine the most cost-effective production methods.</li>
          <li>5.	Geometry: Conic sections are used to study the properties of circles, ellipses, hyperbolas, and parabolas, and their relationships with other geometric shapes.</li>
        </ol>
        <p className='text-xl pb-2 pt-5 font-bold'>These are just a few of the many applications of conic sections, and they demonstrate the versatility and utility of this important area of mathematics.</p>




      </div>
        
      </div>
      {/* ///////// */}


      <Footer />

    </div>
  )
}

export default Theory