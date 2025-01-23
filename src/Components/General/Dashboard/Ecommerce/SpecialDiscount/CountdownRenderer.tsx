import React from 'react';
import { CountdownRenderProps } from 'react-countdown';

const CountdownRenderer: React.FC<CountdownRenderProps> = ({ days, hours, minutes, seconds }) => {
  return (
    <ul className="timer-sec">
      <li>
        <span className="txt-primary days time">{days}</span>
        <span className="title">Days</span>
      </li>
      <li>
        <span className="txt-primary hours time">{hours}</span>
        <span className="title">Hours</span>
      </li>
      <li className="px-3">
        <span className="txt-primary minutes time">{minutes}</span>
        <span className="title">Min</span>
      </li>
      <li className="px-3">
        <span className="txt-primary seconds time">{seconds}</span>
        <span className="title">Sec</span>
      </li>
    </ul>
  );
};

export default CountdownRenderer;
