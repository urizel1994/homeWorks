import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="header__logo">Star DB</Link>
            <ul className="header__menu">
                <li className="header__menu-item">
                    <Link to="/people/">People</Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/planets/">Planets</Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/starships/">Starships</Link>
                </li>
            </ul>
        </div>
    )
};

export default Header;