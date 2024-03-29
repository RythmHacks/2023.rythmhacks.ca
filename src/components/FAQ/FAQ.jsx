import './FAQ.scss'
import Dropdown from './Dropdown.jsx'
import { column1, column2 } from './FAQData.js'

const FAQ = () => {

    return (
        <div id = 'faq' className='pt-[6rem]'>
            <h3 className='text-center mb-[3rem]'>Frequently Asked Questions</h3>

            <div className={`faqwrapper`}>
                <div className='column'>
                    {column1.map((question, index) => {
                        if (index === column1.length - 1) {
                            return <Dropdown q={question[0]} a={question[1]} last={true}/>
                        }
                        return <Dropdown q={question[0]} a={question[1]}/>
                    })}
                </div>

                <div className='column'> 
                    {column2.map((question, index) => {
                        if (index === column2.length - 1) {
                            return <Dropdown q={question[0]} a={question[1]} last={true}/>
                        } 
                        return <Dropdown q={question[0]} a={question[1]}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default FAQ;