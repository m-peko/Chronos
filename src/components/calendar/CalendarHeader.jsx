import React from 'react';

import '../../styles/components/calendar/calendar-header.css';

const CalendarHeader = (props) => {

    const getMonthName = (month) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month];
    };

    const goToPreviousMonth = () => {
        if (props.month === 0) {
            props.changeState({
                year: props.year - 1,
                month: 11
            });
        } else {
            props.changeState({
                month: props.month - 1
            });
        }
    };

    const goToNextMonth = () => {
        if (props.month === 11) {
            props.changeState({
                year: props.year + 1,
                month: 0
            });
        } else {
            props.changeState({
                month: props.month + 1
            });
        }
    };

    return (
        <div className='month'>
            <ul>
                <li className='prev' onClick={ goToPreviousMonth }>&#10094;</li>
                <li className='next' onClick={ goToNextMonth }>&#10095;</li>
                <li className='month-details'>
                    { getMonthName(props.month) }<br/>
                    <span>{ props.year }</span>
                </li>
            </ul>
        </div>
    );
};

export default CalendarHeader;
