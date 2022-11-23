import React from 'react'
import { SiDiscord, SiLinkedin, SiTwitter } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

const Socials = () => {
  return (
    <div class='text-accent text-lg flex gap-4'>
        <a class='text-lg'>
            <SiDiscord />
        </a>
        <a class='text-lg'>
            <RiInstagramFill />
        </a>
        <a class='text-lg'>
            <SiLinkedin />
        </a>
        <a class='text-lg'>
            <SiTwitter />
        </a>
    </div>
  )
}

export default Socials