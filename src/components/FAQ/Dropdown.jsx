import './FAQ.scss'
import { useRef } from 'react'

const Dropdown = (props) => {

    const ref = useRef(null);

    return (
        <div className='row' onClick = {
            () => {
                    ref.current.style.maxHeight = (ref.current.style.maxHeight === '0px' || ref.current.style.maxHeight === '' || !ref.current.style.maxHeight) ? (ref.current.scrollHeight + 32) + 'px' : '0px';
                ref.current.style.padding = (ref.current.style.maxHeight === '0px' || ref.current.style.maxHeight === '' || !ref.current.style.maxHeight) ? '0 1rem' : '1rem';
            }
        }>
            <p className='q'>{props.q}</p>
            <p ref={ref} className='a'>{props.a}</p>
        </div>
    )
}

export default Dropdown