import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href='/' className='nav-logo'>Site Logo</a>
        <ul>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
            <li>
                <a href='#faq'>FAQ</a>
            </li>
            <li>
                <a href='#sponsers'>Sponsers</a>
            </li>
            <li>
                <a href='#team'>Team</a>
            </li>
        </ul>
    </nav>
  );
};
  
export default Navbar;