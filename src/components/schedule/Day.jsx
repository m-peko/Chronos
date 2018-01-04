import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Day = (props) => {
    let tasks = '';
    if (props.tasks) {
        tasks = props.tasks.map(task => {
            return <Task key={ Math.random().toString(36).substr(2, 16) }
                         task={ task }
                         mobile={ props.mobile }/>;
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

Day.propTypes = {
    day: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    mobile: PropTypes.bool.isRequired
};

export default Day;
