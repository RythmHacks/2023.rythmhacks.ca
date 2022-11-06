import './FAQ.scss'

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
        </div>
    );
}

export default FAQ;