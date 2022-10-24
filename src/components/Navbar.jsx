import React from 'react';
import logo from '../assets/FINAL_logo.ai'

const Navbar = () => {

    let pages = ['HOME', 'ABOUT', 'FAQ', 'SPONSORS', 'TEAM', 'CONTACT']
    return (
        <nav class='nav'>
            <a href='/' className='nav-logo'>RythmHacks</a>
            {/* <img src = {logo}></img> */}
            <div>
                {pages.map(
                    (value, index) => {
                        return (
                            <a href={'#'+value.toLowerCase()}>{value}</a>
                        )
                    }
                )}
            </div>
        </nav>
    );
};
  
export default Navbar;