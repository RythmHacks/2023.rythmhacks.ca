import './Footer.scss'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='logowrapper'>
                <img loading='lazy' alt='logo'  src={logo}></img>
                <h3>RythmHacks</h3>
            </div>
        </div>
    )
  }
  
  export default Footer
  