import './FAQ.scss'
import { useRef } from 'react'
import Dropdown from './Dropdown.jsx'
import { column1, column2 } from './FAQData.js'

import useIsInViewport from '../ScrollAnimation/useIsInViewport.js'
import '../ScrollAnimation/ScrollAnimation.scss'

const FAQ = () => {

    const ref = useRef(null);
    const isInViewport1 = useIsInViewport(ref);

    return (
        <div id = 'faq' className='pt-[6rem]'>
            <h3 className='text-center mb-[3rem]'>Frequently Asked Questions</h3>

            <div ref={ref} className={`faqwrapper ${isInViewport1 ? 'hide show' : "hide"}`}>
                <div className='column'>
                    {column1.map((question) => {
                        return <Dropdown q={question[0]} a={question[1]}/>
                    })}
                </div>

                <div className='column'> 
                    {column2.map((question) => {
                        return <Dropdown q={question[0]} a={question[1]}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default FAQ;