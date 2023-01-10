import './Footer.scss'
import logo from '../../assets/logosmall.png'
import Socials from '../Socials/Socials.jsx'

const Footer = () => {

    let pages = ['About', 'FAQ', 'Sponsors', 'Contact']

    return (
        <div id='footer'>
            
            <div className='column'>
                <div className='logowrapper mb-4'>
                    <img loading='lazy' alt='logo' src={logo} className='rounded-full'></img>
                    <h3>RythmHacks</h3>
                </div>
                <p className='mb-4'>Copyright © 2022 RythmHacks</p>
                <Socials />
            </div>

            <div className='column'>
                <h2>Navigation</h2>
                {pages.map((value, index) => {
                    return (
                        <a href={'#'+value.toLowerCase()}>{value}</a>
                    )
                })}
            </div>
            
            <div className='column'>
                <h2></h2>
            </div>
        </div>
    )
  }
  
  export default Footer
  