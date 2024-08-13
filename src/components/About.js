import { React, useState, useEffect } from 'react';

import { ImHtmlFive,ImCss3 } from "react-icons/im";
import { RiJavascriptLine, RiOpenaiFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
import { SiNextdotjs, SiTypescript, SiElastic, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {

  const [isPaused, setIsPaused] = useState(false);

  const toggleAnimation = (event) => {
    event.stopPropagation();
    setIsPaused(true);
  };

  useEffect(() => {
    const handleWindowClick = () => setIsPaused(false);

    if (isPaused) {
      window.addEventListener('click', handleWindowClick);
    }

    return () => window.removeEventListener('click', handleWindowClick);
  }, [isPaused]);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const icons = [ <ImHtmlFive />, <ImCss3 />, <RiJavascriptLine />, <SiTypescript />,
    <FaReact />, <FaNodeJs />, <SiNextdotjs />, <FaPython />, <FaJava />, <BiLogoGoLang />,
    <SiMysql />, <SiPostgresql />, <SiMongodb />, <SiElastic />, <RiOpenaiFill />,
  ];

  return (
    <section className='section w-[95%] mx-auto' id='about' ref={ref}>
      <div className='container'>
        <div className='flex flex-col justify-center lg:flex-row lg:items-center lg:gap-x-0 lg:mx-[8%] h-screen'>
          {/* img */}
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='bg-about bg-contain bg-no-repeat bg-center w-[50%] h-[32%] md:w-[35%] md:h-[28%] lg:w-[40%] lg:h-[50%] mix-blend-lighten
          mb-3 md:mb-3 mx-auto'></motion.div>

          {/* text */}
          <div className='flex flex-col lg:w-[55%]'>
            <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
            className=''>
              <div className='text-center lg:text-left'>
                <h1 className='font-montserrat uppercase text-gradient text-[21px] mb-4 md:mb-4'>About me:</h1>
                <h3 className='font-montserrat font-black text-[17px] md:text-xl mb-1 md:mb-2'>
                    I'm passionate about diving into new technologies in this fast-paced industry.
                    Starting as a frontend developer, I have broadened my knowledge to embrace full-stack development,
                    bridging the gap between server-side operations and user-facing experiences.
                </h3>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
            className='icons whitespace-nowrap overflow-hidden py-10'>
              <div className="icons-slide flex flex-row gap-x-5 whitespace-nowrap cursor-pointer"
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                onClick={toggleAnimation}>
                {icons.map((icon, index) => (
                  <p key={index} className='text-3xl' onClick={toggleAnimation}>{icon}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;