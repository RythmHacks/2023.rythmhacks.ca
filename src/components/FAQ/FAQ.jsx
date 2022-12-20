import './FAQ.scss'
import { useRef } from 'react'
import Dropdown from './Dropdown.jsx'

const questions = [
    ['funky', 'monkey'],
    ['large', 'amongus'],
    ['asaaa', 'asdasf']
]

const FAQ = () => {
    const ref = useRef(null);

    return (
        <div id = 'faq' className='pt-[6rem]'>
            <h3 className='text-center mb-4'>Frequently Asked Questions</h3>

            <div className='faqwrapper'>
                <div className='column'>
                    {questions.map((question) => {
                        return <Dropdown q={question[0]} a={question[1]}/>
                    })}
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