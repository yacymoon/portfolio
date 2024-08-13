import React from 'react';
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden cursor-default'>
      <div className='bg-black/50'>
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      </div>
    </div>

  );
};

export default App;
