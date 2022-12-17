import './Hero.scss'
import Socials from '../Socials/Socials.jsx'
import { BsArrowDownCircleFill } from 'react-icons/bs'

const Hero = () => {
    return (
		<div id = 'hero' className='h-[92vh] p-[5%]'>
			<div id = 'cycle-wrapper' className="font-extralight">
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

			<h1 className='mt-12 font-bold text-accent' id = 'title'>RythmHacks</h1>
			<h4 id = 'description'>August | University of Waterloo</h4>
			
			<div className='mt-8 flex gap-4 justify-center'>
				<button onClick={() => {window.open('https://docs.google.com/forms/u/1/d/e/1FAIpQLSeEr_kLSEboK22bXmDTFbZhfEw1-0_QRcfEf9bmDJ_UBOhwaw/viewform?usp=send_form')}}>Apply to be an organizer!</button>
				<button onClick={() => {window.location = "mailto:rythmhacks@gmail.com";}}>Get in touch</button>
			</div>

			<div className='flex justify-center mt-8'>
				<Socials />
			</div>

			<div className='getstarted' onClick={() => {
				var element = document.getElementById('about');
				element.scrollIntoView({
					block: 'start',
					behavior: 'smooth'
				});
			}}>
				<BsArrowDownCircleFill />
				<p>Let's get started</p>
			</div>
		</div>
    );
}

export default Hero;