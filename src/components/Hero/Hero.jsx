import './Hero.scss'
import line0 from '../../assets/yellowlines/yellowline0.png';
import line1 from '../../assets/yellowlines/yellowline1.png';
import line2 from '../../assets/yellowlines/yellowline2.png';
import line3 from '../../assets/yellowlines/yellowline3.png';
import line4 from '../../assets/yellowlines/yellowline4.png';

import logo from '../../assets/FINAL_logo-01.svg';

const Hero = () => {
    return (
		<div id = 'hero' class='section'>
			{/* <img src = {line0} alt = 'yellowline0' id = 'yellowline0'></img>
			<img src = {line1} alt = 'yellowline1' id = 'yellowline1'></img>
			<img src = {line2} alt = 'yellowline2' id = 'yellowline2'></img>
			<img src = {line3} alt = 'yellowline3' id = 'yellowline3'></img>
			<img src = {line4} alt = 'yellowline4' id = 'yellowline4'></img> */}
			<div>

				<div id = 'cycle-wrapper' class="font-extralight">
					<h3 class="rw-sentence ml-8">
						<div class="rw-words rw-words-1 z-0">
							<span>Win cool prizes at</span>
							<span>Meet amazing people at</span>
							<span>Enjoy free food at</span>
							<span>Create a project at</span>
							<span>Make lifetime memories at</span>
							<span>Get inspired at</span>
						</div>
					</h3>
				</div>

				<div id = 'titlewrapper' class='mt-[8vh]'>
					<h1 id = 'title' class='font-bold'>
						RYTHM
						<h1 class='gradient inline'>HɅCKS</h1>
					</h1>
					<h4 class='ml-8'>our slogan | a date, a place</h4>
				</div>
			</div>

			<img src = {logo} alt = 'logo' class='w-[30vw] h-[30vw] ml-auto mr-auto' id='herologo'></img>

		</div>
    );
}

export default Hero;