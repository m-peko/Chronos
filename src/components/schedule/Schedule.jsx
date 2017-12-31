import React from 'react';
import Timeline from './Timeline';
import Day from './Day';

import '../../styles/components/schedule/schedule.css';

const Schedule = (props) => {
    const getTasksByDay = (day) => {
        return props.tasks.filter(task => {
            const date = new Date(task.date);
            return date.getDay() === day;
        });
    };

    if (!props.show) {
        return null;
    }

    return (
        <main className='item main'>
            <div className='schedule'>
                <Timeline/>

                <div className='tasks'>
                    <ul>
                        <Day day='Monday' tasks={ getTasksByDay(1) } mobile={ props.mobile }/>
                        <Day day='Tuesday' tasks={ getTasksByDay(2) } mobile={ props.mobile }/>
                        <Day day='Wednesday' tasks={ getTasksByDay(3) } mobile={ props.mobile }/>
                        <Day day='Thursday' tasks={ getTasksByDay(4) } mobile={ props.mobile }/>
                        <Day day='Friday' tasks={ getTasksByDay(5) } mobile={ props.mobile }/>
                        <Day day='Saturday' tasks={ getTasksByDay(6) } mobile={ props.mobile }/>
                        <Day day='Sunday' tasks={ getTasksByDay(0) } mobile={ props.mobile }/>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Schedule;
