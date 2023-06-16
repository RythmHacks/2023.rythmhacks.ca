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
		<div id='hero' className={`h-[92vh] fixed w-full ${(scrolled) ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
			<div className='flex flex-col gap-8 mt-[-4rem]'>
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

			<h1 className='font-bold text-accent text-center' id = 'title'>RythmHacks</h1>
			<h4 id='description' className='text-center mt-[-2rem]'>Happening in August 2023!</h4>
			
			<div className='justify-center flex flex-row md:flex-col items-center gap-2'>
				<button onClick={() => window.open('https://opnform.com/forms/rythmhacks-pre-registration')}>Pre-register now!</button>
				<button onClick={() => window.location.href = '/documents/prospectus.pdf'}>Sponsor us!</button>
				<button onClick={() => {
					let element = document.getElementById('faq')
					const y = element.getBoundingClientRect().top + window.pageYOffset - 60;

					window.scrollTo({top: y, behavior: 'smooth'});					
				}}>Have questions?</button>
			</div>

			<div className='flex justify-center'>
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
		</div>
	);
}

export default Hero;