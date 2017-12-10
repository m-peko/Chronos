import React, { Component } from 'react';
import Modal from '../../components/modal/Modal.jsx';

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
        this.setState({
            newTaskVisible: this.state.newTaskVisible ? false : true,
            syncVisible: this.state.syncVisible
        });
    }

    toggleSync() {
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
                <Modal visible={ this.state.newTaskVisible } title='New task' body='' footer='' close={ this.toggleNewTask }/>
                <Modal visible={ this.state.syncVisible } title='Sync' body='' footer='' close={ this.toggleSync }/>
            </aside>
        );
    }
}

export default Toolbar;
