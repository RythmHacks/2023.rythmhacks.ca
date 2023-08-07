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
                <p onClick={handleToggle} className='burger-button text-[#777] cursor-pointer h-[36px] w-[48px] ml-[auto] mr-20 items-center'>
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

            {/*style="display:block;max-width:100px;min-width:60px;position:fixed;right:24px;top:0;width:10%;z-index:10000" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"*/}
            <a id="mlh-trust-badge" className="fixed block style-none w-[12%] min-w-[48px] max-w-[90px] top-0 right-2 z-50"  target="_blank">
                <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" className="w-full" />
            </a>
        </nav>
    );
};
  
export default Navbar;