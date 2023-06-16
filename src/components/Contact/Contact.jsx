import './Contact.scss'
import Contactimg from '../../assets/Graphics/contact.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Contact = () => {
  return (
    <div id='contact' className='section'>
        <h3>Reach out to us</h3>
        <div>
            <div className='sectionwrapper'>
                <p >
                    Hackathons are a great way to meet other people, gain experience, or just get free merch. We want to make RythmHacks as accessible as possible so that everyone has a chance to spark their interest in tech. Feel free to contact us about any request, big or small, that you may have, or questions you have regarding the event.<br/>
                    <br/>Want to get some first-hand insight into the hackathon before it starts? Check out our <a href='https://medium.com/@rythmhacks' target='_blank' rel='noreferrer'>Medium blog</a>, which features posts written by our organizers that give you a look into the event planning process, as well as advice to make your time at Rythmhacks worthwhile.<br/> 
                    <br/>Have questions? Need guidance about the application process? Want to sponsor or support us? Email us <a href='mailto:rythmhacks@gmail.com'>here!</a>
                </p>
                <LazyLoadImage src={Contactimg} alt='contact' className='w-[30%] p-0' effect="blur" />
            </div>
        </div>
    </div>
  )
}

export default Contact