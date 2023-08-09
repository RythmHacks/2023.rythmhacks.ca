import './Footer.scss'
import logo from '../../assets/logosmall.png'
import Socials from '../Socials/Socials.jsx'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {

    let pages = ['Hero', 'About', 'FAQ', 'Sponsors', 'Team', 'Contact']

    return (
        <div id='footer'>
            
            <div className='column'>
                <div className='logowrapper mb-4'>
                    <LazyLoadImage alt='logo' src={logo} className='rounded-full' effect="blur" />
                    <h3>RythmHacks</h3>
                </div>
                <p className='mb-4'>Copyright © 2022-23 RythmHacks</p>
                <Socials />
            </div>

            <div className='column'>
                <h2>Navigation</h2>
                {pages.map((value) => {
                    return (
                        <button
                        className='text-[16px]'
                        onClick = {
                            () => {
                                if (value.toLowerCase() === 'hero')  {
                                    window.scrollTo(0,0)
                                }
                                var element = document.getElementById(value.toLowerCase());
                                element.scrollIntoView({
                                  block: 'start',
                                  behavior: 'smooth'
                                });
                            }
                        }
                        >{value}</button>
                    )
                })}
            </div>
            
            <div className='column'>
                <h2>Links</h2>
                <button className='text-[16px]' onClick={() => {window.scrollTo(0,0)}}>Back to Top</button>
                <a target='_blank' rel='noreferrer' href='https://github.com/RythmHacks/rythmhacks.ca/'>Source</a>
                <a target='_blank' rel='noreferrer' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</a>
                <a target='_blank' rel='noreferrer' href='https://github.com/RythmHacks/rythmhacks.ca/blob/footer/LICENSE'>License</a>
                <a target='_blank' rel='noreferrer' href='https://links.rythmhacks.ca/'>Links Page</a>
                <a target='_blank' rel='noreferrer' href='mailto:business@rythmhacks.ca'>Business Email</a>
                <a target='_blank' rel='noreferrer' href='mailto:rythmhacks@gmail.com'>Email</a>
                <a href='https://www.rythmhacks.ca/documents/privacy.pdf'>Privacy Policy</a>
                <a href='https://www.rythmhacks.ca/documents/cookies.pdf'>Cookie Policy</a>
            </div>
        </div>
    )
  }
  
  export default Footer
  