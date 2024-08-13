import React from 'react';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[100vh] flex items-center' id='home'>
    <div className='container mx-auto lg:pl-[9%]'>
      <div className='flex-1 text-center lg:text-left'>
        {/* text */}
        <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
        className='font-montserrat text-[48px] font-bold leading-[0.8] lg:text-[80px] pt-10 mb-3 md:mb-0'>
          RUTE SOUZA
        </motion.h1>
        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
        className='mb-6 mt-[2%] text-[32px] lg:text-[50px] font-montserrat font-semibold leading-[1]'>
          <h2 className='lg:mr-4 text-white'>I am a {' '}
          <TypeAnimation sequence={[' SOFTWARE ENGINEER']}
            speed={50} className='text-gradient' wrapper='span' repeat={10000}/>
          </h2>
        </motion.div>
        <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
        className='mb-8 w-[90%] md:w-[100%] max-w-[600px] mx-auto text-[20px] lg:text-[22px] tracking-wide lg:mx-0 font-montserrat'>
          The best way to predict the future is by creating it.
        </motion.p>

        {/* button */}
        <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
            <Link to='contact' smooth={true} spy={true}>
              <button className='btn btn-lg border border-purple-900'>Contact Me</button>
            </Link>
        </motion.div>

      </div>
    </div>
  </section>;
};

export default Banner;
