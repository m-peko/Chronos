import React, { Component } from 'react';
import Header from './components/header/Header';
import Schedule from './components/schedule/Schedule';
import Toolbar from './components/toolbar/Toolbar';
import Calendar from './components/calendar/Calendar';

/* Modals */
import Modal from './components/modal/Modal.jsx';
import NewTaskForm from './components/modal/new-task/NewTaskForm.jsx';
import SyncForm from './components/modal/sync/SyncForm.jsx';

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
            syncs: [],
            isOpen: {
                schedule: true,
                search: false,
                newTask: false,
                sync: false,
                calendar: false
            }
        };

        this.toggleNewTaskModal = this.toggleNewTaskModal.bind(this);
        this.toggleSyncModal = this.toggleSyncModal.bind(this);
        this.toggleCalendar = this.toggleCalendar.bind(this);

        this.addTask = this.addTask.bind(this);
        this.addSync = this.addSync.bind(this);
    }

    toggleNewTaskModal(event) {
        this.setState({
            isOpen: {
                schedule: this.state.isOpen.schedule,
                search: this.state.isOpen.search,
                newTask: this.state.isOpen.newTask ? false : true,
                calendar: this.state.isOpen.calendar
            }
        });
    }

    toggleSyncModal(event) {
        this.setState({
            isOpen: {
                schedule: this.state.isOpen.schedule,
                search: this.state.isOpen.search,
                sync: this.state.isOpen.sync ? false : true,
                calendar: this.state.isOpen.calendar
            }
        });
    }

    toggleCalendar() {
        this.setState({
            isOpen: {
                schedule: !this.state.isOpen.schedule,
                calendar: !this.state.isOpen.calendar
            }
        });
    }

    addTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    addSync(sync) {
        this.setState({
            syncs: [...this.state.syncs, sync]
        });
    }

    render() {
        console.log(this.state.syncs);
        return (
            <div className='wrapper'>
                <Header user={ this.state.user }
                        tasks={ this.state.tasks }
                        isOpen={ this.state.isOpen }
                        toggleNewTaskModal={ this.toggleNewTaskModal }
                        toggleSyncModal={ this.toggleSyncModal }
                        toggleCalendar={ this.toggleCalendar }/>

                <Schedule show={ this.state.isOpen.schedule }
                          tasks={ this.state.tasks }/>

                <Toolbar isOpen={ this.state.isOpen }
                         toggleNewTaskModal={ this.toggleNewTaskModal }
                         toggleSyncModal={ this.toggleSyncModal }/>

                <Calendar show={ this.state.isOpen.calendar }/>

                <Modal show={ this.state.isOpen.newTask }
                       title='New task'
                       content={ <NewTaskForm onSubmit={ this.addTask }
                                              close={ this.toggleNewTaskModal }/> }
                       onClose={ this.toggleNewTaskModal }/>

                <Modal show={ this.state.isOpen.sync }
                       title='Sync'
                       content={ <SyncForm onSubmit={ this.addSync }
                                           close={ this.toggleSyncModal }/> }
                       onClose={ this.toggleSyncModal }/>
            </div>
        );
    }
}

export default App;
