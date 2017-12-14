import React, { Component } from 'react';
import Header from './components/header/Header';
import Schedule from './components/main/Schedule';
import Toolbar from './components/left-sidebar/Toolbar';
import Calendar from './components/right-sidebar/Calendar';

/* Modals */
import Modal from './components/modal/Modal.jsx';
import NewTaskBody from './components/modal/new-task/NewTaskBody.jsx';
import NewTaskFooter from './components/modal/new-task/NewTaskFooter.jsx';
import SyncBody from './components/modal/sync/SyncBody.jsx';
import SyncFooter from './components/modal/sync/SyncFooter.jsx';

/* Static data */
import User from './data/User.json';
import Tasks from './data/Tasks.json';

import './styles/app.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            user: User,
            tasks: Tasks,
            items: {
                schedule: true,
                search: false,
                newTask: false,
                sync: false,
                calendar: false
            }
        };

        this.toggleNewTask = this.toggleNewTask.bind(this);
        this.toggleSync = this.toggleSync.bind(this);
        this.toggleCalendar = this.toggleCalendar.bind(this);
    }

    toggleNewTask() {
        if (!this.state.items.newTask)
            document.addEventListener('click', this.toggleNewTask, false);
        else
            document.removeEventListener('click', this.toggleNewTask, false);

        this.setState({
            items: {
                newTask: this.state.items.newTask ? false : true
            }
        });
    }

    toggleSync() {
        if (!this.state.items.sync)
            document.addEventListener('click', this.toggleSync, false);
        else
            document.removeEventListener('click', this.toggleSync, false);

        this.setState({
            items: {
                sync: this.state.items.sync ? false : true
            }
        });
    }

    toggleCalendar() {
        this.setState({
            items: {
                schedule: !this.state.items.schedule,
                calendar: !this.state.items.calendar
            }
        });
    }

    render() {
        return (
            <div className='wrapper'>
                <Header user={ this.state.user }
                        tasks={ this.state.tasks }
                        tools={ this.state.items }
                        toggleNewTask={ this.toggleNewTask }
                        toggleSync={ this.toggleSync }
                        toggleCalendar={ this.toggleCalendar }/>

                <Schedule schedule={ this.state.items.schedule }/>

                <Toolbar tools={ this.state.items }
                         toggleNewTask={ this.toggleNewTask }
                         toggleSync={ this.toggleSync }/>

                <Calendar calendar={ this.state.items.calendar }/>

                <Modal visible={ this.state.items.newTask }
                       title='New task'
                       body={ <NewTaskBody/> }
                       footer={ <NewTaskFooter/> }
                       close={ this.toggleNewTask }/>

                <Modal visible={ this.state.items.sync }
                       title='Sync'
                       body={ <SyncBody/> }
                       footer={ <SyncFooter/> }
                       close={ this.toggleSync }/>
            </div>
        );
    }
}

export default App;
