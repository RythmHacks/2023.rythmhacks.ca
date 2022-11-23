import './Hero.scss'
import Socials from '../Socials/Socials.jsx'

const Hero = () => {
    return (
		<div id = 'hero' class='section'>

      <div id = 'cycle-wrapper' class="font-extralight">
				<h4 class="rw-sentence">
					<div class="rw-words rw-words-1">
						<span>Win cool prizes at</span>
						<span>Meet amazing people at</span>
						<span>Enjoy free food at</span>
						<span>Create a project at</span>
						<span>Make lifetime memories at</span>
						<span>Get inspired at</span>
					</div>
				</h4>
			</div>

      <h1 class='mt-12 font-bold text-accent' id = 'title'>RythmHacks</h1>
      <h4 id = 'description'>July | University of Waterloo</h4>
      
      <div class='mt-8 flex gap-4 justify-center'>
        <button>Apply to be an organizer!</button>
        <button>Get in touch</button>
      </div>

      <div class='flex justify-center mt-8'>
        <Socials />
      </div>
		</div>
    );
}

export default Hero;