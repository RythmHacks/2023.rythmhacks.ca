import './FAQ.scss'
import { useRef } from 'react'

const FAQ = () => {
    const ref = useRef(null);

    return (
        <div id = 'faq'>
            <h3 className='text-center mb-4'>Frequently Asked Questions</h3>

            <div className='faqwrapper'>
                <div className='column'>
                    <div className='row' onClick = {
                            () => {
                                console.log(typeof ref.current.scrollHeight)
                                ref.current.style.maxHeight = (ref.current.style.maxHeight === '0px') ? (ref.current.scrollHeight + 32) + 'px' : 0;
                                ref.current.style.padding = (ref.current.style.maxHeight === '0px') ? '0 1rem' : '1rem';
                            }
                        }>
                        <p className='q'>What's a hackathon?</p>
                        <p ref={ref} className='a'>idk lolidk lolidk lolidk lolidk lolidk lolidk lolidk lolidk lolidk lolidk lolidk lolidk lol</p>
                    </div>
                </div>

                <div className='column'> 
                    <p className='row'>somethign</p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;