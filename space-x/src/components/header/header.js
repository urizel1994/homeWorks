import React from 'react';
import "./header.css";
import Logo from '../logo';
import Nav from '../nav';

export default class Header extends React.Component {
    render(){
        return(
                <header className="header">
                    <div className="row">
                        <Logo />
                        <Nav />
                    </div>
                </header>   
        )
    }
}