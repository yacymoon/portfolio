import React from 'react';
import { BiHomeAlt } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { HiOutlineUser, HiOutlinePhone } from 'react-icons/hi'
import { Link } from 'react-scroll';

import logo from '../assets/logo.png'

const Nav = () => {
  return <nav className='fixed top-4 lg:top-5 w-full overflow-hidden z-50 flex justify-between pt-3'>

        {/* logo */}
        <Link to='home' smooth={true}
        className='pt-2 ml-[9%] md:ml-[12%] lg:ml-[16%] w-[26px] cursor-pointer' >
          <img src={logo} />
        </Link>


        {/* nav bar */}
        <div className='h-[90px] backdrop-blur-2x1 rounded-full mr-[4%] md:mr-[10%] lg:mr-[14%]
        max-w-[230px] flex text-xl text-white/50'>
          <Link to='home'
          activeClass='active' smooth={true} spy={true}
          className='cursor-pointer w-[50px] h-[49px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to='about'
          activeClass='active'  smooth={true} spy={true}
          className='cursor-pointer w-[50px] h-[49px] flex items-center justify-center'>
            <HiOutlineUser />
          </Link>
          <Link to='work'
          activeClass='active'  smooth={true} spy={true}
          className='cursor-pointer w-[50px] h-[49px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
          <Link to='contact'
          activeClass='active'  smooth={true} spy={true}
          className='cursor-pointer w-[50px] h-[49px] flex items-center justify-center'>
            <HiOutlinePhone />
          </Link>
        </div>
  </nav>;
};

export default Nav;
