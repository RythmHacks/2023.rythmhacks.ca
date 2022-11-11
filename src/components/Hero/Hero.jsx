import './Hero.scss'
import line0 from '../../assets/yellowlines/yellowline0.png';
import line1 from '../../assets/yellowlines/yellowline1.png';
import line2 from '../../assets/yellowlines/yellowline2.png';
import line3 from '../../assets/yellowlines/yellowline3.png';
import line4 from '../../assets/yellowlines/yellowline4.png';

const Hero = () => {
    return (
        <div id = 'hero' class='section items-center'>
            
            <div id = 'cycle-wrapper' class="font-extralight">
				<h3 class="rw-sentence ml-20">
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

            <h1 id = 'title' class='font-bold'>
                RYTHM
                <h1 class='gradient inline'>HɅCKS</h1>
            </h1>
            <h3 class='ml-8'>Interested in CS and Tech?</h3>
        </div>
    );
}

export default Hero;