import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';

// import FAQ from './components/FAQ/FAQ.jsx';
import About from './components/About/About.jsx';
import JoinUs from './components/JoinUs/JoinUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Sponsor from './components/Sponsor/Sponsor.jsx';

import React from 'react'
import Particles from './components/Particles.jsx';

function App() {

  return (
    <>
      <Particles id="tsparticles" />
      <Navbar/>
      <Hero/>
      <About/>
      <JoinUs/>
      <Sponsor/>
      <Contact/>
      {/* <FAQ/> */}
    </>
  );
}

export default App;