import './Navbar.scss'
import React, { useState, useEffect } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImTree } from 'react-icons/im'
import Logo from '../../assets/logo.png'
import Socials from '../Socials/Socials'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
    const updatePosition = () => {
        setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}

const Navbar = () => {

    let scrollPosition = useScrollPosition();
    console.log(scrollPosition)
    let shouldChange = (scrollPosition > 10) ? 'scrolled' : '';

    let pages = ['About', 'Join Us', 'Contact']

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav className={`nav text-3xl ${shouldChange}`}>
            <button onClick={
                () => {
                    window.scrollTo(0,0)
                }
            }
            className='items-center navlogo h-[100%]'>
                <img src={Logo} alt='rythmhackslogo' className='h-[45px]'></img>
                <p className={`text-accent`}>RythmHacks</p>
            </button>

            <div className='links'>
                {pages.map(
                    (value, index) => {
                        return (
                            <button
                            onClick = {
                                () => {
                                    var element = document.getElementById(value.toLowerCase());
                                    element.scrollIntoView({
                                      block: 'start',
                                      behavior: 'smooth'
                                    });
                                }
                            }
                            >{value}</button>
                        )
                    }
                )}
            </div>
            <div className="burger">
                <p onClick={handleToggle} className='cursor-pointer burger-button h-[36px] flex items-center'><GiHamburgerMenu/></p>
                <div className={navbarOpen ? "shown" : "hidden"}>
                    {pages.map(
                        (value, index) => {
                            return (
                                <button
                                className='text-left'
                                onClick = {
                                    () => {
                                        let element = document.getElementById(value.toLowerCase())
                                        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;

                                        window.scrollTo({top: y, behavior: 'smooth'});
                                    }
                                }
                                >{value}</button>
                            )
                        }
                    )}
                </div>
            </div>

            <button className='socialslink' onClick={() => {window.open('https://links.rythmhacks.ca/')}}>
                <ImTree/>
                Links
            </button>
        </nav>
    );
};
  
export default Navbar;