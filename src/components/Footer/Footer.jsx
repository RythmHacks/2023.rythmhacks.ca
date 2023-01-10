import './Footer.scss'
import logo from '../../assets/logosmall.png'
import Socials from '../Socials/Socials.jsx'

const Footer = () => {
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
            </div>
            
            <div className='column'>
                a
            </div>
        </div>
    )
  }
  
  export default Footer
  