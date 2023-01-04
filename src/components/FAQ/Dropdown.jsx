import './FAQ.scss'
import { useRef, useState } from 'react'

const Dropdown = (props) => {

    const ref = useRef(null);
    const ref2 = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <div className='row'>
            <p className='q' onClick = {
                () => {
                    ref.current.style.maxHeight = (ref.current.style.maxHeight === '0px' || ref.current.style.maxHeight === '' || !ref.current.style.maxHeight) ? (ref.current.scrollHeight + 32) + 'px' : '0px';
                    setOpen(!open);
                }
            }>
                <p ref={ref2} className={`arrow ${open ? 'active' : ""}`}></p>
                {props.q}
            </p>
            <p ref={ref} className={`a ${open ? "open" : ""}`}>{props.a}</p>
        </div>
    )
}

export default Dropdown