import React from 'react';
import logo from '../assets/FINAL_logo.ai'

const Navbar = () => {

    let pages = ['Home', 'About', 'FAQ', 'Sponsors', 'Team', 'Contact']
    return (
        <nav className='nav'>
            <a href='/' className='nav-logo'>Site Logo</a>
            <img src = {logo}></img>
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