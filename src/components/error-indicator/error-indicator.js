import React from 'react';
import './error-indicator.css';
import icon from './error-icon.png';
const ErrorIndicator = () => {
    return(
       <div className="error-indicator">
            <img className="icon" src={icon} alt="error-icon"></img>
            <span className="boom">BOOM</span> 
            <span>Somethink has gone terribly wrong</span> 
            <span>(But we already sent droids to fix it)</span>   
       </div>
    )
};

export default ErrorIndicator;