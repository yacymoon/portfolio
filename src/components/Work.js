import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.jpeg'
import Img2 from '../assets/portfolio-img2.jpeg'
import Img3 from '../assets/portfolio-img3.jpeg'
import Img4 from '../assets/portfolio-img4.jpeg'

const Work = () => {

  // SET OVERLAYS
  const [travel, setTravel] = useState(false);
  const [housing, setHousing] = useState(false);
  const [lyriks, setLyriks] = useState(false);
  const [restaurant, setRestaurant] = useState(false);

  return (
    <section className='section' id='work'>
      <div className='container mx-auto pt-14 w-[94%] md:w-[70%] mt-6'>

        {/* header */}
        {/* <motion.h1 variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
        className='font-didone font-thin text-center mb-7 text-4xl lg:text-5xl text-gradient'>
          What I have worked:
        </motion.h1> */}
        <div className='flex flex-col lg:flex-row xl:gap-x-6'>
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-6 mb-5 lg:mb-0'>

          {/* 1st column images */}
            {/* image */}
            <div onClick={() => setLyriks(!lyriks)}
            className='group relative overflow-hidden border-2 border-white/20 rounded-lg'>
              {/* overlay */}
              <div className='hidden xxl:inline-flex group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              {lyriks && <div className='xxl:hidden group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>}
              {/* img */}
              <img className='group-hover:scale-110 transition-all duration-500'
              src={Img1} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='hidden xxl:inline-block text-gradient font-montserrat uppercase font-black'>Store Website</span>
                {lyriks && <span className='xxl:hidden text-gradient font-montserrat uppercase font-black'>Store Website</span>}
              </div>
              {/* button */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-9 transition-all duration-700 z-50'>
                <a href='https://yacymoon.github.io/store/' target="_blank"
                className='hidden xxl:inline font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>
                {lyriks && <a href='https://yacymoon.github.io/store/' target="_blank"
                className='xxl:hidden font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>}
              </div>
            </div>
            {/* image */}
            <div onClick={() => setRestaurant(!restaurant)}
            className='group relative overflow-hidden border-2 border-white/20 rounded-lg'>
              {/* overlay */}
              <div className='hidden xxl:inline-flex group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              {restaurant && <div className='xxl:hidden group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>}
              {/* img */}
              <img className='group-hover:scale-110 transition-all duration-500'
              src={Img2} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='hidden xxl:inline-block text-gradient font-montserrat uppercase font-black'>Visit Page</span>
                {restaurant && <span className='xxl:hidden text-gradient font-montserrat uppercase font-black'>Visit Page</span>}
              </div>
              {/* button */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-9 transition-all duration-700 z-50'>
                <a href='https://yacymoon.github.io/restaurant/' target="_blank"
                className='hidden xxl:inline font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>
                {restaurant && <a href='https://yacymoon.github.io/restaurant/' target="_blank"
                className='xxl:hidden font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>}
              </div>
            </div>
          </motion.div>

          {/* 2nd column images */}
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-6'>
            {/* image */}
            <div onClick={() => setTravel(!travel)}
            className='group relative overflow-hidden border-2 border-white/20 rounded-lg'>
              {/* overlay */}
              <div className='hidden xxl:inline-flex group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              {travel && <div className='xxl:hidden group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>}
              {/* img */}
              <img className='group-hover:scale-110 transition-all duration-500'
              src={Img3} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='hidden xxl:inline-block text-gradient font-montserrat uppercase font-black'>Travel Site</span>
                {travel && <span className='xxl:hidden text-gradient font-montserrat uppercase font-black'>Travel Site</span>}
              </div>
              {/* button */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-9 transition-all duration-700 z-50'>
                <a href='https://yacymoon.github.io/travel-site/' target="_blank"
                className='hidden xxl:inline font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>
                {travel && <a href='https://yacymoon.github.io/travel-site/' target="_blank"
                className='xxl:hidden font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>}
              </div>
            </div>
            {/* image */}
            <div onClick={() => setHousing(!housing)}
            className='group relative overflow-hidden border-2 border-white/20 rounded-lg'>
              {/* overlay */}
              <div className='hidden xxl:inline-flex group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              {housing && <div className='xxl:hidden group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>}
              {/* img */}
              <img className='group-hover:scale-110 transition-all duration-500'
              src={Img4} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='hidden xxl:inline-block text-gradient font-montserrat uppercase font-black'>Renting Site</span>
                {housing && <span className='xxl:hidden text-gradient font-montserrat uppercase font-black'>Renting Site</span>}
              </div>
              {/* button */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-9 transition-all duration-700 z-50'>
                <a href='https://yacymoon.github.io/renting/' target="_blank"
                className='hidden xxl:inline font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>
                {housing && <a href='https://yacymoon.github.io/renting/' target="_blank"
                className='xxl:hidden font-montserrat border border-white p-2 w-36 hover:bg-white hover:text-purple-900'>View Site</a>}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
