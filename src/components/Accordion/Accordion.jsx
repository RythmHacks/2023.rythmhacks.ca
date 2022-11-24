import React, { useState, useRef } from 'react';
import './Accordion.scss'

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? ' active' : '');
    setHeightState(
      setActive === ' active' ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className='accordion__section'>
      <button className={`accordion ${setActive} bg-[#3C3579] text-left`} onClick={toggleAccordion}>
        <p>{' '}{props.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className='accordion__content'
      >
        <div
          dangerouslySetInnerHTML={{ __html: props.content }}
          className='p-[1rem] text-[1.2rem]'
        />
      </div>
    </div>
  );
}

export default Accordion;
