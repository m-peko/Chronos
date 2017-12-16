import React from 'react';
import Day from './Day';

const Week = (props) => {
    const days = props.days.map(day => {
        return <Day key={ Math.random().toString(36).substr(2, 16) }
                    isActive={ day.isActive }
                    date={ day.date }/>
    });

    return (
        <tr>
            { days }
        </tr>
    );
};

export default Week;
