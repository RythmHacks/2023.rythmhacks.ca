import React from 'react'
import { SiLinkedin, SiTwitter, SiGithub, SiMedium } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import './Socials.scss'

const Socials = () => {
  return (
    <div className={`socials flex gap-4`}>
        {/* <p>
            <SiDiscord />
        </p> */}
        <a href='https://www.instagram.com/rythm.hacks/' target='_blank' rel='noreferrer'>
            <RiInstagramFill />
        </a>
        <a href='https://www.linkedin.com/company/89856850/admin/' target='_blank' rel='noreferrer'>
            <SiLinkedin />
        </a>
        <a href='https://twitter.com/rythmhacks' target='_blank' rel='noreferrer'>
            <SiTwitter />
        </a>
        <a href='https://github.com/RythmHacks' target='_blank' rel='noreferrer'>
            <SiGithub />
        </a>
        <a href="https://medium.com/@rythmhacks" target='_blank' rel='noreferrer'>
            <SiMedium />
        </a>
    </div>
  )
}

export default Socials