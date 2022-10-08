import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href='/' className='nav-logo'>Site Name</a>
        <ul>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#sponsers'>Sponsers</a>
            </li>
        </ul>
    </nav>
  );
};
  
export default Navbar;