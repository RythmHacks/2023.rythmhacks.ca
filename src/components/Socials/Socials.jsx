import React from 'react'
import { SiDiscord, SiLinkedin, SiTwitter } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

const Socials = () => {
  return (
    <div class='text-accentlight text-lg flex gap-4 border-accent border-2 px-4 pr-4 pt-2 pb-2 rounded-full'>
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