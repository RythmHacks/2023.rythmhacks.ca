import './Hero.scss'
import Socials from '../Socials/Socials.jsx'

const Hero = () => {

	return (
		<div id='hero' className={`h-[92vh] w-full`}>
			<div className='flex flex-col gap-8 md:gap-4 mt-[-4rem]'>
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
        
      <h1 className='mt-[6vh] font-bold text-accent text-center' id = 'title'>RythmHacks</h1>
			<h4 className='text-center' id='description'>September 1-3, 2023 | Accelerator Centre</h4>
			
			<div className='justify-center flex flex-row md:flex-col items-center gap-2'>
				{/* <button onClick={() => window.open('https://dash.rythmhacks.ca')}>Register now!</button> */}
				{/* <button onClick={() => window.location.href = '/documents/prospectus.pdf'}>Sponsor us!</button> */}
				<button onClick={() => window.open('https://dash.rythmhacks.ca')}>Hacker Dashboard</button>
				<button onClick={() => window.open('https://rythmhacks2023.devpost.com')}>Devpost</button>
				<button onClick={() => {
					let element = document.getElementById('faq')
					const y = element.getBoundingClientRect().top + window.pageYOffset - 60;

					window.scrollTo({top: y, behavior: 'smooth'});					
				}}>Have questions?</button>
			</div>

			<div className='flex justify-center'>
				<Socials/>
			</div>
			</div>
		</div>
	);
}

export default Hero;