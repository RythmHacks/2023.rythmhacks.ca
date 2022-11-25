import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
// import FAQ from './components/FAQ/FAQ.jsx';
import About from './components/About/About.jsx';
import React from 'react'
import Particles from './components/Particles.jsx';

function App() {

  return (
    <>
      <Particles id="tsparticles" />
      <Navbar/>
      <Hero/>
      <About/>
      {/* <FAQ/> */}
    </>
  );
}

export default App;