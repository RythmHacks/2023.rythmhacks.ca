import './Sponsor.scss'
import SponsorImage from '../../assets/Graphics/sponsor.png'

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
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const entrepreneur = [
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

  return (
    <>
    <div id='sponsors' className='section'>

      <div>
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
            <button onClick={() => window.location = "mailto:business@rythmhacks.ca"} className='mr-4'>Contact us</button>
            <button onClick={() => window.location.href = "/documents/prospectus.pdf"} className='mt-4 lg:mt-0'>Sponsorship Prospectus</button>
          </p>
          <LazyLoadImage src={SponsorImage} alt='sponsorimg' effect="blur" />
        </div>
      </div>

    </div>
    <div className='mt-8'>
      <h3 className='text-center mb-4'>Sponsors</h3>
      <div className='sponsorlogos'>
        <div className='entrepreneur'>
          {entrepreneur.map((sponsor, index) => {
            return (
              <LazyLoadImage effect="blur" src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></LazyLoadImage>
            )
          })}
        </div>
        <div className='pioneer'>
          {pioneer.map((sponsor, index) => {
            return (
              <LazyLoadImage effect="blur" src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></LazyLoadImage>
            )
          })}
        </div>
        <div className='innovator'>
          {innovator.map((sponsor, index) => {
            return (
              <LazyLoadImage effect="blur" src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></LazyLoadImage>
            )
          })}
        </div>
        <div className='explorer'>
          {explorer.map((sponsor, index) => {
            return (
              <LazyLoadImage effect="blur" src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></LazyLoadImage>
            )
          })}
        </div>
        <p className='text-center px-8'>
          Interested in sponsoring? Contact us at <a href='mailto:business@rythmhacks.ca'>business@rythmhacks.ca</a>. 
        </p>
        <br/><br/>
        <h3 className='text-center mb-4'>Partners</h3>
        <div className='innovator'>
          <LazyLoadImage effect="blur" src={hcb} alt='sponsor' onClick={() => window.open("https://bank.hackclub.com/")} ></LazyLoadImage>
          <LazyLoadImage effect="blur" src={fb} alt='sponsor' onClick={() => window.open("https://www.flowboat.ca")} wrapperClassName='!p-0 rounded-md' className='rounded-2xl'></LazyLoadImage>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sponsor