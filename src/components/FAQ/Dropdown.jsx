import './FAQ.scss'
import { useRef, useState } from 'react'

const Dropdown = (props, last=false) => {

    const ref = useRef(null);
    const ref2 = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <div className={`row ${open ? "open" : ""}`}>
            <p className={'q ' + (props.last ? "last" : "")} onClick = {
                () => {
                    ref.current.style.maxHeight = (ref.current.style.maxHeight === '0px' || ref.current.style.maxHeight === '' || !ref.current.style.maxHeight) ? (ref.current.scrollHeight + 32) + 'px' : '0px';
                    setOpen(!open);
                }
            }>
                {props.q}
                <p ref={ref2} className={`arrow ${open ? 'active' : ""}`}></p>
            </p>
            <p ref={ref} className={`a ${props.last ? "last" : ""}`}>{props.a}</p>
        </div>
    )
}

export default Dropdown