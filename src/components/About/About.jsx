import React from 'react'
import './About.scss'

import EngImg from '../../assets/engineering.svg'

const About = () => {
  return (
    <div id='about' className='section'>
        <h3 className='text-center font-bold'>
            Experience the <h3 className='blue inline'>magic</h3> of tech
        </h3>

        <div className='flex justify-between h-full'>
          <p className='pt-8'>
            Hackathons are some of the best ways to get inspired, learn new skills, and launch your career in tech. At RythmHacks, our mission is to spread the magical spark of inspiration that you get from attending a hackathon.
            <br/><br/>
            In July of 2023, we're going in person at the University of Waterloo! Join us for an amazing weekend of fun, innovation, and free food. At RythmHacks, you'll work in teams of four or less to create a website, app, game, robot, or anything you can imagine. You'll have 36 hours to create your project, pitch it to judges, and compete for prizes!
          </p>
          <img width='30%' src={EngImg}/>
        </div>
    </div>
  )
}

export default About