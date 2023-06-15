import './Sponsor.scss'
import SponsorImage from '../../assets/Graphics/sponsor.png'

import { useRef } from 'react'
import useIsInViewport from '../ScrollAnimation/useIsInViewport.js'
import '../ScrollAnimation/ScrollAnimation.scss'

import ac from '../../assets/Sponsors/ac.png'
import leangap from '../../assets/Sponsors/leangap.svg'
import wolfram from '../../assets/Sponsors/wolfram.png'
import bb from '../../assets/Sponsors/bestbuy.png'
import postman from '../../assets/Sponsors/postman.svg'
import jd from '../../assets/Sponsors/jd.png'
import xyz from '../../assets/Sponsors/xyz.png'
import onepass from '../../assets/Sponsors/1pass.png'
import hcb from '../../assets/Sponsors/hcb.png'
import tmmc from '../../assets/Sponsors/tmmc.png'
import fb from '../../assets/Sponsors/fb.png'

const entrepreneur = [
  {
    link: 'https://www.acceleratorcentre.com/',
    logo: ac
  }
]
const pioneer = [
  {
    link: 'https://leangap.org/',
    logo: leangap
  }
]
const innovator = [
  {
    link: 'https://tmmc.ca/en/',
    logo: tmmc
  },
  {
    link: "https://www.wolfram.com/",
    logo: wolfram   
  },
  {
    link: 'https://gen.xyz/',
    logo: xyz
  },
  {
    link: 'https://1password.com/',
    logo: onepass
  },
  {
    link: 'https://www.bestbuy.ca/en-ca',
    logo: bb
  },
  {
    link: 'https://postman.com/',
    logo: postman
  }
]
const explorer = [
  {
    link: 'https://www.jdoodle.com',
    logo: jd
  }
]

const Sponsor = () => {

  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);

  return (
    <>
    <div id='sponsors' className='section'>

      <div ref={ref1} className={isInViewport1 ? 'hide show' : "hide"}>
        <h3>Sponsor the <span className='gradient green'>future of technology</span>.</h3>
        <div className='sectionwrapper'>
          <p>
            As a nonprofit organization, RythmHacks relies on the support of our sponsors to make our event possible. We're looking for sponsors who are passionate about supporting the next generation of tech innovators.
            <br/><br/>
            In September, hundreds of the most innovative high schoolers from across Ontario will come together in one place for a weekend of fun and inspiration. By sponsoring, you'll gain exposure, connect with the next generation of tech talent, and help us spread the magic of hackathons. As a high school hackathon, we'll have many beginner hackers who are eager to learn and grow. Your company will have the chance to make an early and lasting impression on our hackers. 
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
            <button onClick={() => window.location = "mailto:business@rythmhacks.ca"} className='mr-4'>Contact us</button>
            <button onClick={() => window.location.href = "/documents/prospectus.pdf"} className='mt-4 lg:mt-0'>Sponsorship Prospectus</button>
          </p>
          <img loading='lazy' src={SponsorImage} alt='sponsorimg'></img>
        </div>
      </div>

    </div>
    <div className='mt-8'>
      <h3 className='text-center mb-4'>Sponsors</h3>
      <div className='sponsorlogos'>
        <div className='entrepreneur'>
          {entrepreneur.map((sponsor, index) => {
            return (
              <img src={sponsor.logo} loading='lazy' alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <div className='pioneer'>
          {pioneer.map((sponsor, index) => {
            return (
              <img src={sponsor.logo} loading='lazy' alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <div className='innovator'>
          {innovator.map((sponsor, index) => {
            return (
              <img src={sponsor.logo} loading='lazy' alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <div className='explorer'>
          {explorer.map((sponsor, index) => {
            return (
              <img src={sponsor.logo} loading='lazy' alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <p className='text-center px-8'>
          Interested in sponsoring? Contact us at <a href='mailto:business@rythmhacks.ca'>business@rythmhacks.ca</a>. 
        </p>
        <br/><br/>
        <h3 className='text-center mb-4'>Partners</h3>
        <div className='innovator'>
          <img src={hcb} loading='lazy' alt='sponsor' onClick={() => window.open("https://bank.hackclub.com/")}></img>
          <img src={fb} loading='lazy' alt='sponsor' onClick={() => window.open("https://www.flowboat.ca")} className='!p-0'></img>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Sponsor