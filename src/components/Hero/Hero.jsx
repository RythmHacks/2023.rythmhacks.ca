import './Hero.scss'
import Socials from '../Socials/Socials.jsx'
import { BsArrowDownCircleFill } from 'react-icons/bs'

import { useScrollPosition } from '../ScrollAnimation/UseScrollPosition'

const Hero = () => {

	let scrollPosition = useScrollPosition();
	// let amountLeft = 900-scrollPosition;
	// let opacity = (amountLeft/900);
	// opacity = parseFloat(opacity).toFixed(2);

    return (
		<div id='hero' className={`h-[92vh] p-[4%] fixed w-full ${(scrollPosition > 300) ? "opacity-0 pointer-events-none" : "opacity-1 pointer-events-auto"}`}>
			<div id='cycle-wrapper' className="font-extralight">
						<h4 className="rw-sentence">
							<div className="rw-words rw-words-1">
								<span>Win cool prizes at</span>
								<span>Meet amazing people at</span>
								<span>Enjoy free food at</span>
								<span>Create a project at</span>
								<span>Make lifetime memories at</span>
								<span>Get inspired at</span>
							</div>
						</h4>
					</div>

			<h1 className='mt-[6vh] font-bold text-accent' id = 'title'>RythmHacks</h1>
			<h4 id = 'description'>Happening in August 2023!</h4>
			
			<div className='mt-8 justify-center'>
				<button onClick={() => {window.open('https://opnform.com/forms/rythmhacks-pre-registration')}} className='mr-4 mb-2'>Pre-register now!</button><br/>
				<button onClick={() => {
					let element = document.getElementById('sponsors')
					const y = element.getBoundingClientRect().top + window.pageYOffset - 60;

					window.scrollTo({top: y, behavior: 'smooth'});
				}} className='mr-4'>Sponsor us</button>
				<button onClick={() => {window.location = "mailto:rythmhacks@gmail.com";}}>Get in touch</button>
			</div>

			<div className='flex justify-center mt-8'>
				<Socials/>
			</div>

			<div className='getstarted' onClick={() => {
				let element = document.getElementById('about')
				const y = element.getBoundingClientRect().top + window.pageYOffset - 60;

				window.scrollTo({top: y, behavior: 'smooth'});
			}}>
				<BsArrowDownCircleFill />
				<p>Let's get started</p>
			</div>
		</div>
    );
}

export default Hero;