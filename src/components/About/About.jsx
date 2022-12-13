import { useRef } from 'react';
import './About.scss'

import useIsInViewport from '../ScrollAnimation/useIsInViewport.js'
import '../ScrollAnimation/ScrollAnimation.scss'

import EngImg from '../../assets/Graphics/engineering.png'
import TogetherImg from '../../assets/Graphics/together.png'

const About = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);

  return (
    <div id='about' className='section'>

        <div ref={ref1} className={isInViewport1 ? 'hide show' : "hide"}>
          <h3>
              Experience the <h3 className='gradient blue'>magic</h3> of tech
          </h3>
          <div className='sectionwrapper'>
            <p>
              Hackathons are some of the best ways to get inspired, learn new skills, and connect with like-minded innovators. At RythmHacks, our mission is to spread the magical spark of inspiration that you get from attending a hackathon. We're a high-school only hackathon happening in Waterloo, Ontario.
              <br/><br/>
              In August of 2023, we're going in person at the University of Waterloo! If you're a high schooler, join us for an amazing weekend of fun, innovation, and free food. At RythmHacks, you'll work in teams of four or less to create a website, app, game, robot, or anything you can imagine. You'll have 36 hours to create your project, pitch it to judges, and compete for prizes!
            </p>
            <img loading='lazy' src={EngImg} alt='engimg'/>
          </div>
        </div>

        <div ref={ref2} className={isInViewport2 ? 'hide show' : "hide"}>
          <h3>
            A place for <h3 className='darkblue gradient'>everyone</h3>
          </h3>
          <div className='sectionwrapper'>
            <img loading='lazy' src={TogetherImg} alt='togetherimg' className='block md:hidden'></img>
            <p>
              Whether you're a seasoned developer or it's your first time creating a project, you're welcome at RythmHacks. We've got workshops, mini-events, and other resources planned through the weekend to help you in your project creation. Developers, designers, hardware wizards, and tech enthusiasts of all sorts have a place here at RythmHacks.
              <br/><br/>
              We know from first-hand experience that finding tech opportunities can be one of the hardest things to do in high school. That's why we've made RythmHacks into a high-school only hackathon, tailored to beginners. We hope that you'll learn a lot and that attending RythmHacks will help you launch your career.
            </p>
            <img loading='lazy' src={TogetherImg} alt='togetherimgmobile' className='hidden md:block'></img>
          </div>
        </div>
    </div>
  )
}

export default About