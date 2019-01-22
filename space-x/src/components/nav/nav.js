import React from 'react';
import "./nav.css";

const Nav = () => {
    return(
        <nav className="menu  offset-1 col-6">
            <div className="row no-gutters menu align-items-center justify-content-between">
                <div className="menu__item"><a href="#">Главная</a></div>
                <div className="menu__item"><a href="#">Технология</a></div>
                <div className="menu__item"><a href="#">График полетов</a></div>
                <div className="menu__item"><a href="#">Гарантии</a></div>
                <div className="menu__item"><a href="#">О компании</a></div>
                <div className="menu__item"><a href="#">Контакты</a></div>
            </div>
        </nav>
    )
}

export default Nav;