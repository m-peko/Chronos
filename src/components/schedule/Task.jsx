import React from 'react';

import '../../styles/components/schedule/task.css';

const Task = (props) => {
    const color = props.task.color !== '' ? `task-${props.task.color}` : '';

    const getScheduleTimestamp = (time) => {
        time = time.replace(/ /g, '');
        const timeArr = time.split(':');
        return parseInt(timeArr[0], 10) * 60 + parseInt(timeArr[1], 10);
    };

    const taskTop = 45 * (getScheduleTimestamp(props.task.from) - 100) / 50;
    const taskHeight = 45 * (getScheduleTimestamp(props.task.to) - getScheduleTimestamp(props.task.from)) / 50;

    const style = {
        top: taskTop,
        height: taskHeight
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
