import React, { Component } from 'react';
import Timeline from './Timeline';
import Task from './Task';

import '../../styles/components/schedule/schedule.css';

class Schedule extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <main className='item main'>
                <div className='schedule'>
                    <Timeline/>

                    <div className='tasks'>
                        <ul>
                            <li className='tasks-group'>
                                <div className='top-info'><span>Monday</span></div>

                                <ul>
                                    <Task task={ this.props.tasks[0] }/>
                                </ul>
                            </li>

                            <li className='tasks-group'>
                                <div className='top-info'><span>Tuesday</span></div>

                                <ul>

                                </ul>
                            </li>

                            <li className='tasks-group'>
                                <div className='top-info'><span>Wednesday</span></div>

                                <ul>
                                </ul>
                            </li>

                            <li className='tasks-group'>
                                <div className='top-info'><span>Thursday</span></div>

                                <ul>

                                </ul>
                            </li>

                            <li className='tasks-group'>
                                <div className='top-info'><span>Friday</span></div>

                                <ul>

                                </ul>
                            </li>

                            <li className='tasks-group'>
                                <div className='top-info'><span>Saturday</span></div>

                                <ul>

                                </ul>
                            </li>

                            <li className='tasks-group'>
                                <div className='top-info'><span>Sunday</span></div>

                                <ul>

                                </ul>
                            </li>

                        </ul>
                    </div>

                    {/*<div className='task-modal'>
                        <header className='header'>
                            <div className='content'>
                                <span className='task-date'></span>
                                <h3 className='task-name'></h3>
                            </div>

                            <div className='header-bg'></div>
                        </header>

                        <div className='body'>
                            <div className='task-info'></div>
                            <div className='body-bg'></div>
                        </div>

                        <a className='close'>Close</a>
                    </div>

                    <div className='cover-layer'></div>*/}
                </div>
            </main>
        );
    }
}

export default Schedule;
