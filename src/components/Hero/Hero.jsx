import './Hero.scss'
import Socials from '../Socials/Socials.jsx'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const Hero = () => {

  const [scrolled, setScrolled] = useState(true);
	const handleScroll = (e) => {
		if (window.scrollY > 500) return
    setScrolled(window.scrollY < 300);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
				window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<div id='hero' className={`h-[92vh] p-[4%] fixed w-full ${(scrolled) ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
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
				<button onClick={() => window.open('https://opnform.com/forms/rythmhacks-pre-registration')} className='mr-4 mb-2'>Pre-register now!</button><br/>
				<button onClick={() => window.location.href = '/documents/prospectus.pdf'} className='mr-4'>Sponsor us!</button>
				<button onClick={() => {
					let element = document.getElementById('faq')
					const y = element.getBoundingClientRect().top + window.pageYOffset - 60;

					window.scrollTo({top: y, behavior: 'smooth'});					
				}}>Have questions?</button>
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