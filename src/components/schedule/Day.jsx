import React from 'react';
import Task from './Task';

const Day = (props) => {
    let tasks = '';
    if (props.tasks) {
        tasks = props.tasks.map(task => {
            return <Task task={ task } mobile={ props.mobile }/>;
        });
    }

    return (
        <li className='tasks-group'>
            <div className='top-info'><span>{ props.day }</span></div>

            <ul>
                { tasks }
            </ul>
        </li>
    );
};

export default Day;
