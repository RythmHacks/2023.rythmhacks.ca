import React from 'react'

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';

import Particles from './components/Particles.jsx';

const About = React.lazy(() => import('./components/About/About.jsx')); 
const FAQ = React.lazy(() => import('./components/FAQ/FAQ.jsx')); 
const JoinUs = React.lazy(() => import('./components/JoinUs/JoinUs.jsx')); 
const Sponsor = React.lazy(() => import('./components/Sponsor/Sponsor.jsx')); 
const Contact = React.lazy(() => import('./components/Contact/Contact.jsx')); 

function App() {

  return (
    <>
    <React.Suspense fallback={
      <div className="lazy-preloader"></div>
    }>
      <Particles id="tsparticles" />
      <Navbar/>
      <Hero/>
      <About/>
      <JoinUs/>
      <FAQ/>
      <Sponsor/>
      <Contact/>
    </React.Suspense>
    </>
  );
}

export default App;