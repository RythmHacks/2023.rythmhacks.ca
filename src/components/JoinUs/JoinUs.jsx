import './JoinUs.scss'
import Graphic from '../../assets/Graphics/people.png'
import { RiMoneyDollarCircleFill, RiBrushFill, RiHammerFill, RiComputerFill } from 'react-icons/ri'
import { useRef } from 'react'

import useIsInViewport from '../ScrollAnimation/useIsInViewport.js'
import '../ScrollAnimation/ScrollAnimation.scss'

const JoinUs = () => {

    let ref1 = useRef(null)
    let ref2 = useRef(null)
    let ref3 = useRef(null)
    let ref4 = useRef(null)
    let button1 = useRef(null)
    let button2 = useRef(null)
    let button3 = useRef(null)
    let button4 = useRef(null)
    let scrollAnim = useRef(null)
    const isInViewport1 = useIsInViewport(scrollAnim);
    let refs = [ref1, ref2, ref3, ref4, button1, button2, button3, button4]
    
    const changeRef = (newRef, button) => {
        for (let ref in refs) {
            if (ref > 3) {
                refs[ref].current.className = 'button'
            } else {
                refs[ref].current.className='hidden'
            }
        }
        newRef.current.className = 'shown'
        console.log(button)
        button.current.className = 'buttonselected'
    }
    
    return (
        <div id='join us' className='section'>
            <div className='bg-[#eee]' id='joinustext'>
                <div ref={scrollAnim} className={isInViewport1 ? 'hide show' : "hide"}>
                    <h3>Help us make <span className='gradient blue'>RythmHacks</span> great</h3>
                    <p className='pt-4 text-center'>Join our team of organizers and help make RythmHacks come to life. Get real industry experience working with skilled designers and developers. Make a life-lasting impact and inspire the young innovators of the future. Find the full list of roles <a href='#roles'>here</a> or get more information <a href='https://docs.google.com/document/d/170ZjIkkgVuzpcNo77riXJhY2CZERaD_xyRj5hXwORdY/edit?usp=sharing' target='_blank' rel='noreferrer'>here</a>. Apply <a href='https://forms.gle/K7crWLhfzNeHbhXH9' target='_blank' rel='noreferrer'>here</a> today!</p>
                    <img loading='lazy' src={Graphic} alt='joinsgraphic'></img>
                </div>
            </div>
            <div id='roles'>
                <div className='selector'>
                    <h3 className='text-center'>Organizer Roles</h3>
                    <div id='icons'>
                        <button className='buttonselected' ref={button1} onClick={() => {changeRef(ref1, button1)}}><RiMoneyDollarCircleFill size="max(3vw, 2rem)"/></button>
                        <button className='button' ref={button2} onClick={() => {changeRef(ref2, button2)}}><RiBrushFill size="max(3vw, 2rem)"/></button>
                        <button className='button'  ref={button3} onClick={() => {changeRef(ref3, button3)}}><RiHammerFill size="max(3vw, 2rem)"/></button>
                        <button className='button' ref={button4} onClick={() => {changeRef(ref4, button4)}}><RiComputerFill size="max(3vw, 2rem)"/></button>
                    </div>
                    <div ref={ref1} className='shown'>
                        <h4>Finance and Sponsorship</h4>
                        <p>
                            As a Finance and Sponsorship executive, you'll:
                            <li>Work with logistics to manage budget and purchases</li>
                            <li>Organise and record expenses and transactions</li>
                            <li>Reach out to sponsors</li>
                            <li>Ensure all tasks on sponsorship package are fulfilled</li>
                            <li>Assist in creating a sponsor package</li>
                        </p>
                    </div>
                    <div ref={ref2} className='hidden'>
                        <h4>Marketing and Design</h4>
                        <p>
                            As a Marketing and Design executive, you'll work on:
                            <li>Designing logo, website graphics, maintaining social medias</li>
                            <li>T-shirt, sticker, and other merch designs</li>
                            <li>General presentation of organization process</li>
                            <li>Reaching out to people to ask them to join</li>
                        </p>
                    </div>
                    <div ref={ref3} className='hidden'>
                        <h4>Logistics</h4>
                        <p>
                            As a Logistics executive, you'll:
                            <li>Plan itinerary, workshops, and activities</li>
                            <li>Contacting MLH</li>
                            <li>Organize the actual running of the hackathon</li>
                            <li>Buying merch, food, prizes, t-shirts, etc</li>
                            <li>Handling shipping</li>
                            <li>Staying in contact with hackers through discord and email leading up to and during the event</li>
                        </p>
                    </div>
                    <div ref={ref4} className='hidden'>
                        <h4>Tech</h4>
                        <p>
                            As a Tech executive, you'll:
                            <li>Design and create website (rythmhacks.ca), maintaining responsiveness and user experience</li>
                            <li>Complete technical tasks (discord bot, verification system, etc)</li>
                            <li>Create and update Devpost and Discord server</li>
                            <li>Assist and mentor hackers during event</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs