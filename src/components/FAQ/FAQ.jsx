import './FAQ.scss'
import Accordion from '../Accordion/Accordion';

const FAQ = () => {

    return (
        <div id = 'faq' class='section items-center'>
            <h2 class='mt-8 text-center'>
                <span class='gradient-vertical'>F</span>REQUENTLY <span class='gradient-vertical'>A</span>SKED
                {' '}<span class='gradient-vertical'>Q</span>UESTIONS
            </h2>
            <div className='faq-content'>
                <div className='column'>
                    <Accordion
                    title='What is RythmHacks?'
                    content='RythmHacks is a hackathon.'
                    />
                    <Accordion
                    title='What kind of workshops, speakers, and activities will there be?'
                    content='TBD'
                    />
                </div>
                <div className='column'>
                    <Accordion
                    title='How much does it cost?'
                    content='Nothing! There is no cost to attending RythmHacks, food and accommodations will be provided during the event.'
                    />
                    <Accordion
                    title='Who can participate?'
                    content='TBD'
                    />
                </div>
            </div>
        </div>
    );
}

export default FAQ;