import React from 'react'
import { SiDiscord, SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import './Socials.scss'

const Socials = () => {
  return (
    <div className='socials text-accentlight text-lg flex gap-4 border-accent border-2 px-4 pr-4 pt-2 pb-2 rounded-full'>
        <p>
            <SiDiscord />
        </p>
        <p>
            <RiInstagramFill />
        </p>
        <p>
            <SiLinkedin />
        </p>
        <p>
            <SiTwitter />
        </p>
        <a href='https://github.com/RythmHacks' target='_blank' rel='noreferrer'>
            <SiGithub />
        </a>
    </div>
  )
}

export default Socials