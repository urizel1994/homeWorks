import React from 'react';
import "./logo.css";
import logo from '../../logo.png';

const Logo = () => {
    return(
        <div className="header__logo offset-1 col-3">
            <div>
                <img src={logo} alt="logo" className="logo"/>
            </div>
        </div>
    )
}

export default Logo;