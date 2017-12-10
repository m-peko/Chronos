import React, { Component } from 'react';
import Header from './components/header/Header';
import Schedule from './components/main/Schedule';
import Toolbar from './components/left-sidebar/Toolbar';
import Calendar from './components/right-sidebar/Calendar';

import './styles/main.css';

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <Schedule/>
                <Toolbar/>
                <Calendar/>
            </div>
        );
    }
}

export default App;
