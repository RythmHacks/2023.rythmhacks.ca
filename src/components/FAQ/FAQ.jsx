import './FAQ.scss'
import Accordion from '../Accordion';

const FAQ = () => {

    return (
        <div id = 'faq' class='section items-center'>
            <h2 class='mt-8 font-bold text-center'>
                <span class='gradient-vertical'>F</span>REQUENTLY <span class='gradient-vertical'>A</span>SKED
                {' '}<span class='gradient-vertical'>Q</span>UESTIONS
            </h2>
            <div className='faq-content'>
                <div className='column'>
                    <details>
                        <summary>What is RythmHacks?</summary>
                        <p>RythmHacks is a hackathon.</p>
                    </details>
                    <details>
                        <summary>What kind of workshops, speakers, and activities will there be?</summary>
                        <p>TBD</p>
                    </details>
                </div>
                <div className='column'>
                    <details>
                        <summary>How much does it cost?</summary>
                        <p>Nothing! There is no cost to attending RythmHacks, food and accommodations will be provided during the event.</p>
                    </details>
                    <details>
                        <summary>Who can participate?</summary>
                        <p>TBD</p>
                    </details>
                </div>
            </div>
   <div>
     <Accordion
       title="What is your return policy?"
       content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <Accordion
       title="Which languages does you support?"
       content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <Accordion
       title="Can I use a custom domain?"
       content="
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
     />
   </div>
 );
        </div>
    );
}

export default FAQ;