import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import FAQ from './components/FAQ/FAQ.jsx';

import Particles from './components/Particles.jsx';

function App() {

  return (
    <>
      <Particles id="tsparticles" />
      <Navbar/>
      <Hero/>
      <FAQ/>
    </>
  );
}

export default App;
// Adding this to configure netlify, you guys can delete this