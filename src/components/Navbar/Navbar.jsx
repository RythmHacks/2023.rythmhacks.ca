import './Navbar.scss'
import React, { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    let pages = ['About', 'FAQ', 'Schedule', 'Sponsors', 'Team']

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav class='nav text-3xl'>
            <a id = 'navlogo' class = {`text-accent navlogo`}
            onClick={
                () => {
                    window.scrollTo(0,0)
                }
            }>RythmHacks</a>
            <div className='links'>
                {pages.map(
                    (value, index) => {
                        return (
                            <a onClick = {
                                () => {
                                    var element = document.getElementById(value.toLowerCase());
                                    element.scrollIntoView({
                                      block: 'start',
                                      behavior: 'smooth'
                                    });
                                }
                            }
                            >{value}</a>
                        )
                    }
                )}
            </div>
            <div className="burger">
                <p onClick={handleToggle} class='cursor-pointer burger-button h-[36px] flex items-center'><GiHamburgerMenu/></p>
                <div className={navbarOpen ? "shown" : "hidden"}>
                    {pages.map(
                        (value, index) => {
                            return (
                                <a href={'#'+value.toLowerCase()}
                                class = 'transition-all duration-300 hover:text-accent'
                                >{value}</a>
                            )
                        }
                    )}
                </div>
            </div>

        </nav>
    );
};
  
export default Navbar;