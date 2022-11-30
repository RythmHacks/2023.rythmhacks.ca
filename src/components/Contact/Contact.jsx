import './Contact.scss'
import Contactimg from '../../assets/Graphics/contact.png'

const Contact = () => {
  return (
    <div id='contact' className='section'>
        <h3>Reach out to us</h3>
        <div>
            <div className='sectionwrapper'>
                <p>
                    Hackathons are a great way to meet other people, gain experience, or just get free merch. We want to make RythmHacks as accessible as possible so that everyone has a chance to spark their interest in tech. Feel free to contact us about any request, big or small, that you may have, or questions you have regarding the event.<br/>
                    <br/>Have questions? Need guidance about the application process? Want to sponsor or support us? Email us <a href='mailto:rythmhacks@gmail.com'>here!</a>
                </p>
                <img src={Contactimg} alt='contact' className='w-[30%] p-0'></img>
            </div>
        </div>
    </div>
  )
}

export default Contact