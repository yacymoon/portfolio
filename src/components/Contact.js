import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpCircle } from 'react-icons/bs'

import resume from '../assets/rute_resume.pdf'

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section className='flex flex-col justify-between h-screen' id='contact'>
        <div className='mx-[5%] flex-1 flex flex-col items-center justify-center'>
          <div className='flex flex-col md:flex-row'>
            {/* text */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='flex-1'
            >
              <div className='text-center md:text-left xl:pl-[60px]'>
                <h4 className='text-lg uppercase font-montserrat text-gradient mb-2 tracking-wide'>Get in touch</h4>
                <h2 className='text-[42px] md:text-[60px] xl:text-[70px] font-montserrat leading-none mb-14'>
                  Let's collaborate and get <br />creative together
                </h2>
              </div>
            </motion.div>
            {/* contact */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='font-montserrat text-xl xl:text-2xl md:pl-[8%] xl:pr-[110px] mt-[6px]'
            >
              <h3 className='font-montserrat text-gradient uppercase text-center text-lg pb-6'>Contact Me</h3>
              <div className='flex justify-around md:flex-col sm:mx-[4%]'>
                  <a href="mailto:rute00801@gmail.com" target="_blank">
                    <p className='pb-2 hover:text-[#b08ac0] cursor-pointer'>E-mail</p>
                  </a>
                  <a href='https://www.linkedin.com/in/rute-souza-yacy/' target="_blank">
                    <p className='pb-2 hover:text-[#b08ac0] cursor-pointer'>Linkedin</p>
                  </a>
                  <a href='https://github.com/RuteYacy' target="_blank">
                    <p className='hover:text-[#b08ac0] cursor-pointer'>GitHub</p>
                  </a>
                  <a href={resume} target="_blank">
                      <p className='hover:text-[#b08ac0] cursor-pointer md:pt-1.5'>Resume</p>
                  </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className='flex justify-between font-montserrat font-extrabold text-xs sm:text-sm mx-[5%] pb-[1%]'
        >
          <p>Copyright &copy; {year}. All rights reserved.</p>
          <Link to='home' smooth={true} spy={true}>
              <p className='flex hover:text-theme-purple cursor-pointer hover:animate-bounce'>
                <BsArrowUpCircle className='mt-1 mr-2 text-purple-500'/>Go to top
              </p>
          </Link>
        </div>
    </section>
  );
};

export default Contact;
