import React from 'react';

import '../../styles/components/schedule/timeline.css';

const Timeline = (props) => {
    let timeline = [];

    for (let i = 7; i <= 12; i++) {
        timeline.push(
            <li key={ Math.random().toString(36).substr(2, 16) }>
                <span>{ i }AM</span>
            </li>
        );
    }

    for (let i = 1; i <= 7; i++) {
        timeline.push(
            <li key={ Math.random().toString(36).substr(2, 16) }>
                <span>{ i }PM</span>
            </li>
        );
    }

    return (
        <div className='timeline'>
            <ul>
                { timeline }
            </ul>
        </div>
    );
};

export default Timeline;
