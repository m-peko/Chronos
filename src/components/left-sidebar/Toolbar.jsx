import React, { Component } from 'react';
import Modal from '../../components/modal/Modal.jsx';
import NewTaskBody from '../../components/modal/new-task/NewTaskBody.jsx';
import NewTaskFooter from '../../components/modal/new-task/NewTaskFooter.jsx';
import SyncBody from '../../components/modal/sync/SyncBody.jsx';
import SyncFooter from '../../components/modal/sync/SyncFooter.jsx';

import '../../styles/components/left-sidebar/toolbar.css';

class Toolbar extends Component {
    constructor() {
        super();

        this.state = {
            newTaskVisible: false,
            syncVisible: false
        }

        this.toggleNewTask = this.toggleNewTask.bind(this);
        this.toggleSync = this.toggleSync.bind(this);
    }

    toggleNewTask() {
        if (!this.state.newTaskVisible)
            document.addEventListener('click', this.toggleNewTask, false);
        else
            document.removeEventListener('click', this.toggleNewTask, false);

        this.setState({
            newTaskVisible: this.state.newTaskVisible ? false : true,
            syncVisible: this.state.syncVisible
        });
    }

    toggleSync() {
        if (!this.state.syncVisible)
            document.addEventListener('click', this.toggleSync, false);
        else
            document.removeEventListener('click', this.toggleSync, false);

        this.setState({
            newTaskVisible: this.state.newTaskVisible,
            syncVisible: this.state.syncVisible ? false : true
        });
    }

    render() {
        return (
            <aside className='item aside-left'>
                <ul className='toolbar'>
                    <li className={ this.state.newTaskVisible === true ? 'tool-active' : '' }
                        onClick={ this.toggleNewTask }>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                    </li>
                    <li className={ this.state.syncVisible === true ? 'tool-active' : '' }
                        onClick={ this.toggleSync }>
                        <i className='fa fa-refresh' aria-hidden='true'></i>
                    </li>
                </ul>

                <Modal visible={ this.state.newTaskVisible }
                       title='New task'
                       body={ <NewTaskBody/> }
                       footer={ <NewTaskFooter/> }
                       close={ this.toggleNewTask }/>

                <Modal visible={ this.state.syncVisible }
                       title='Sync'
                       body={ <SyncBody/> }
                       footer={ <SyncFooter/> }
                       close={ this.toggleSync }/>
            </aside>
        );
    }
}

export default Toolbar;
