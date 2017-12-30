import React from 'react';

import '../../styles/components/schedule/task.css';

const Task = (props) => {
    const color = props.task.color !== '' ? `task-${props.task.color}` : '';

    const getScheduleTimestamp = (time) => {
        time = time.replace(/ /g, '');
        const timeArr = time.split(':');
        return parseInt(timeArr[0], 10) * 60 + parseInt(timeArr[1], 10);
    };

    const slotHeight = 45;       /* Height of .top-info div */
    const timelineStart = 420;   /* Value of getScheduleTimestamp function for 07:00 */
    const timelineDuration = 60; /* An hour */

    const taskTop = slotHeight * (getScheduleTimestamp(props.task.from) - timelineStart) / timelineDuration;
    const taskHeight = slotHeight * (getScheduleTimestamp(props.task.to) - getScheduleTimestamp(props.task.from)) / timelineDuration;

    const style = {
        top: (taskTop - 1) + 'px',
        height: taskHeight + 'px'
    };

    return (
        <li className={ 'single-task ' + color } style={ style }>
            <a>
                <span className='task-date'>{ props.task.from } - { props.task.to }</span>
                <em className='task-title'>{ props.task.title }</em>
            </a>
        </li>
    );
};

export default Task;
