import './Footer.scss'
import logo from '../../assets/logo.png'
import Socials from '../Socials/Socials.jsx'

const Footer = () => {
    return (
        <div id='footer'>
            
            <div className='column'>
                <div className='logowrapper'>
                    <img loading='lazy' alt='logo'  src={logo}></img>
                    <h3>RythmHacks</h3>
                </div>
                <Socials />
            </div>

            <div className='column'>
                e
            </div>
            
            <div className='column'>
                a
            </div>
        </div>
    )
  }
  
  export default Footer
  