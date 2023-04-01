import './Sponsor.scss'
import SponsorImage from '../../assets/Graphics/sponsor.png'

import { useRef } from 'react'
import useIsInViewport from '../ScrollAnimation/useIsInViewport.js'
import '../ScrollAnimation/ScrollAnimation.scss'

const Sponsor = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);

  return (
    <div id='sponsors' className='section'>

      <div ref={ref1} className={isInViewport1 ? 'hide show' : "hide"}>
        <h3>Sponsor the <span className='gradient green'>future of technology</span>.</h3>
        <div className='sectionwrapper'>
          <p>
            As a nonprofit organization, RythmHacks relies on the support of our sponsors to make our event possible. We're looking for sponsors who are passionate about supporting the next generation of tech innovators.
            <br/><br/>
            In August, hundreds of the most innovative high schoolers from across Ontario will come together in one place for a weekend of fun and inspiration. By sponsoring, you'll gain exposure, connect with the next generation of tech talent, and help us spread the magic of hackathons. As a high school hackathon, we'll have many beginner hackers who are eager to learn and grow. Your company will have the chance to make an early and lasting impression on our hackers. 
            <br/><br/>
            Without sponsors, we wouldn't be able to purchase food and prizes, host workshops, or make RythmHacks as awesome as it is. Many of our hackers will use your software or product in their projects. With some of the most creative young minds in one place, you'll have a chance to recruit the next generation of tech talent. Sponsor us today and inspire high school students to experience the magic of tech.
            <br/><br/>
            <h4 className='mb-4 mt-4'>Supporting the <span className='gradient purple'>start-up ecosystem</span>.</h4>
            One of our main goals is to provide support and
            mentorship for the start-ups and entrepreneurs of the
            future. Over the weekend, there will be special workshops,
            chats, and resources that specifically target those wishing
            to continue their project further. Additionally, we're giving
            special benefits to companies that are still in the start-up
            stage.
            <br/><br/>
            Interested in sponsoring? Contact us at <a href='mailto:business@rythmhacks.ca'>business@rythmhacks.ca</a>. 
            <br/><br/>
            <button onClick={() => window.location = "mailto:business@rythmhacks.ca"} className='mr-4'>Contact us</button>
            <button onClick={() => window.open('https://www.rythmhacks.ca/documents/prospectus.pdf')}>Sponsorship Prospectus</button>
          </p>
          <img loading='lazy' src={SponsorImage} alt='sponsorimg'></img>
        </div>
      </div>

      <div ref={ref2} className={`${isInViewport2 ? 'hide show' : "hide"} mt-4`}>
      </div>
    </div>
  )
}

export default Sponsor