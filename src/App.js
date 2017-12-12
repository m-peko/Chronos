import React, { Component } from 'react';
import Header from './components/header/Header';
import Schedule from './components/main/Schedule';
import Toolbar from './components/left-sidebar/Toolbar';
import Calendar from './components/right-sidebar/Calendar';

import User from './data/User';
import Tasks from './data/Tasks';

import './styles/main.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: User,
            tasks: Tasks
        };
    }

    render() {
        return (
            <div className='wrapper'>
                <Header user={ this.state.user } tasks={ this.state.tasks }/>
                <Schedule/>
                <Toolbar/>
                <Calendar/>
            </div>
        );
    }
}

export default App;
