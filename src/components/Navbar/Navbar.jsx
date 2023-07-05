import './Navbar.scss'
import React, { useState, useEffect } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { ImTree } from 'react-icons/im'
import Logo from '../../assets/logo.png'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [isOpen, setOpen] = useState(false)

    let pages = ['About', 'FAQ', 'Sponsors', 'Team', 'Contact']

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const [scrolled, setScrolled] = useState(true);
	const handleScroll = (e) => {
		if (window.scrollY > 300) return
    setScrolled(window.scrollY < 100);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
				window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);
    
    return (
        <nav className={`nav text-3xl ${(scrolled) ? "" : "scrolled"}`}>
            <button onClick={
                () => {
                    window.scrollTo(0,0)
                }
            }
            className='items-center navlogo h-[100%]'>
                <img src={Logo} alt='rythmhackslogo' className='h-[30px]'></img> {/* dear future devs, this doesn't need to be lazy loaded because it's on the navbar and gets rendered immediately */}
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
                <p onClick={handleToggle} className='text-[#777] cursor-pointer burger-button h-[36px] flex items-center'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </p>
                <div className={navbarOpen ? "shown" : "hidden"}>
                    {pages.map(
                        (value, index) => {
                            return (
                                <button
                                className='text-left'
                                onClick = {
                                    () => {
                                        let element = document.getElementById(value.toLowerCase())
                                        const y = element.getBoundingClientRect().top + window.pageYOffset - 200;

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