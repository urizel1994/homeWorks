import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import MainPage from '../main-page';

export default class App extends Component {
  render() {
    return (
        <div className="app container-fluid">
            <Header />
            <MainPage />
        </div>  
    )
  }
}
