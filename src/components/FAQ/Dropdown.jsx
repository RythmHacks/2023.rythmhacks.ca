import './FAQ.scss'
import { useRef } from 'react'

const Dropdown = (props) => {

    const ref = useRef(null);
    const ref2 = useRef(null);

    return (
        <div className='row'>
            <p className='q' onClick = {
                () => {
                    ref.current.style.maxHeight = (ref.current.style.maxHeight === '0px' || ref.current.style.maxHeight === '' || !ref.current.style.maxHeight) ? (ref.current.scrollHeight + 32) + 'px' : '0px';
                    ref.current.style.padding = (ref.current.style.maxHeight === '0px' || ref.current.style.maxHeight === '' || !ref.current.style.maxHeight) ? '0 1rem' : '1rem';
                    ref2.current.classList.toggle('active');
                }
            }>
                <p ref={ref2} className='arrow'></p>
                {props.q}
            </p>
            <p ref={ref} className='a'>{props.a}</p>
        </div>
    )
}

export default Dropdown