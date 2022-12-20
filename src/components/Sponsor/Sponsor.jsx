import './Sponsor.scss'
import SponsorImage from '../../assets/Graphics/sponsor.png'

import { useRef } from 'react'
import useIsInViewport from '../ScrollAnimation/useIsInViewport.js'
import '../ScrollAnimation/ScrollAnimation.scss'

const Sponsor = () => {

  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);

  return (
    <div id='sponsors' className='section'>

      <div ref={ref1} className={isInViewport1 ? 'hide show' : "hide"}>
        <h3>Sponsor the <h3 className='gradient green'>future of technology</h3>.</h3>
        <div className='sectionwrapper'>
          <p>
            As a nonprofit organization, RythmHacks relies on the support of our sponsors to make our event possible. We're looking for sponsors who are passionate about supporting the next generation of tech innovators.
            <br/><br/>
            In August, hundreds of the most innovative high schoolers from across Ontario will come together at the University of Waterloo for a weekend of fun and inspiration. By sponsoring, you'll gain exposure, connect with the next generation of tech talent, and help us spread the magic of hackathons. As a high school hackathon, we'll have many beginner hackers who are eager to learn and grow. Your company will have the chance to make an early and lasting impression on our hackers. 
            <br/><br/>
            Without sponsors, we wouldn't be able to purchase food and prizes, host workshops, or make RythmHacks as awesome as it is. Many of our hackers will use your software or product in their projects. With some of the most creative young minds in one place, you'll have a chance to recruit the next generation of tech talent. Sponsor us today and inspire high school students to experience the magic of tech.
            <br/><br/>
            Interested in sponsoring? Contact us at <a href='mailto:rythmhacks@gmail.com'>rythmhacks@gmail.com</a>. 
          </p>
          <img loading='lazy' src={SponsorImage} alt='sponsorimg'></img>
        </div>
      </div>
    </div>
  )
}

export default Sponsor