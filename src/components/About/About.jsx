import './About.scss'

import EngImg from '../../assets/Graphics/engineering.png'
import TogetherImg from '../../assets/Graphics/together.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {

  return (
    <div id='about' className='section mt-[92vh]'>

        <div>
          <h3>
              Experience the <span className='gradient blue'>magic of tech</span>.
          </h3>
          <div className='sectionwrapper'>
            <p>
              Hackathons are some of the best ways to get inspired, learn new skills, and connect with like-minded innovators. At RythmHacks, our mission is to spread the magical spark of inspiration that you get from attending a hackathon. We're a high-school only hackathon happening in Waterloo, Ontario.
              <br/><br/>
              In September of 2023, we're going in person for the first time! If you're a high schooler, join us for an amazing weekend of fun, innovation, and free food. At RythmHacks, you'll work in teams of four or less to create a website, app, game, robot, or anything you can imagine. You'll have 36 hours to create your project, pitch it to judges, and compete for prizes!
            </p>
            <LazyLoadImage src={EngImg} alt='engimg' effect="blur" />
          </div>
        </div>

        <div className={`mt-8`}>
          <h3>
            A place <span className='darkblue gradient'> for everyone</span>. 
          </h3>
          <div className='sectionwrapper'>
            <LazyLoadImage src={TogetherImg} alt='togetherimg' className='block md:hidden' effect="blur" />
            <p>
              Whether you're a seasoned developer or it's your first time creating a project, you're welcome at RythmHacks. We've got workshops, mini-events, and other resources planned through the weekend to help you in your project creation. Developers, designers, hardware wizards, and tech enthusiasts of all sorts have a place here at RythmHacks.
              <br/><br/>
              We know from first-hand experience that finding tech opportunities can be one of the hardest things to do in high school. That's why we've made RythmHacks into a high-school only hackathon, tailored to beginners. We hope that you'll learn a lot and that attending RythmHacks will help you launch your career.
              <br/><br/>
              RythmHacks works to create an ecosystem that supports startups and entrepreneurs. If you want to take your project further into the startup world after RythmHacks, we'll have mentorship, resources, and connections to help you do so. Furthermore, we hope to have other startup-related resources for you to take advantage of during the event, such as workshops, prize tracks, and mentors.
            </p>
            <LazyLoadImage src={TogetherImg} alt='togetherimgmobile' className='hidden md:block' effect="blur" />
          </div>
        </div>

        <div className='mt-8'>
          <h3>Event Info</h3>
          <div className='flex mt-4 items-center flex-row md:flex-col'>
            <div>
              <h4>Venue</h4>
              <p className='mt-4'>This year, RythmHacks is taking place at the <a href='https://www.acceleratorcentre.com' target='_blank' rel='noreferrer'>Accelerator Centre</a>!</p>
              <p>295 Hagey Blvd, Waterloo, ON N2L 6R5</p>
              <h4 className='mt-4'>Date</h4>
              <p className='mt-4'>RythmHacks will start on September 1st, 2023 and end on September 3rd, 2023. Check-in will start in the late evening.</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.202789559543!2d-80.55207152563058!3d43.47723816379655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf154a15e1049%3A0x19ae946fefbc593a!2sAccelerator%20Centre!5e0!3m2!1sen!2sca!4v1687299569347!5m2!1sen!2sca" className='w-full border-4 border-accent rounded-3xl' height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    </div>
  )
}

export default About