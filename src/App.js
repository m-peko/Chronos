import React, { Component } from 'react';
import Header from './components/header/Header';
import Schedule from './components/main/Schedule';
import Toolbar from './components/left-sidebar/Toolbar';
import Calendar from './components/right-sidebar/Calendar';

import './styles/main.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                firstName: 'Marin',
                lastName: 'Peko',
                email: 'marinpeko5@gmail.com',
                membership: 'Feb. 2017'
            }
        };
    }

    render() {
        return (
            <div className='wrapper'>
                <Header user={ this.state.user }/>
                <Schedule/>
                <Toolbar/>
                <Calendar/>
            </div>
        );
    }
}

export default App;
