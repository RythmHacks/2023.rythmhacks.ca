import logo from '../../assets/FINAL_logo-01.svg'
import './Navbar.scss'
import React, { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    let pages = ['ABOUT', 'FAQ', 'SCHEDULE', 'SPONSORS', 'TEAM']

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav class='nav text-3xl'>
            <img src = {logo} class={`nav-logo ${navbarOpen ? "absolute top-4" : ""} hover:cursor-pointer`}></img>
            <div className='links'>
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
            <div className="burger">
                <a onClick={handleToggle} class='cursor-pointer burger-button'><GiHamburgerMenu/></a>
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