import React from 'react';
import Day from './Day';

const Week = (props) => {
    const days = props.days.map(day => {
        return <Day isActive={ day.isActive } date={ day.date }/>
    });

    return (
        <tr>
            { days }
        </tr>
    );
};

export default Week;
