import './FAQ.scss'
import { useRef } from 'react'
import Dropdown from './Dropdown.jsx'

const FAQ = () => {
    const ref = useRef(null);

    return (
        <div id = 'faq' className='pt-[6rem]'>
            <h3 className='text-center mb-4'>Frequently Asked Questions</h3>

            <div className='faqwrapper'>
                <div className='column'>
                    <Dropdown q='What is the purpose of this website?' a='This website is a platform for students to share their experiences and advice with other students.'/>
                </div>

                <div className='column'> 
                    <div className='row'>
                        <p className='q'>somethign</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;