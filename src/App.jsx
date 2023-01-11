import React from 'react'

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';

import Particles from './components/Particles.jsx';

const About = React.lazy(() => import('./components/About/About.jsx')); 
const FAQ = React.lazy(() => import('./components/FAQ/FAQ.jsx')); 
//const Team = React.lazy(() => import('./components/Team/Team.jsx')); 
const Sponsor = React.lazy(() => import('./components/Sponsor/Sponsor.jsx')); 
const Contact = React.lazy(() => import('./components/Contact/Contact.jsx')); 
const Footer = React.lazy(() => import('./components/Footer/Footer.jsx')); 

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
      <FAQ/>
      <Sponsor/>
      <Contact/>
      <Footer/>
    </React.Suspense>
    </>
  );
}

export default App;