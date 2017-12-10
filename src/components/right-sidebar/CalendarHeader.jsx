import React, { Component } from 'react';

import '../../styles/components/right-sidebar/calendar-header.css';

class CalendarHeader extends Component {
    constructor(props) {
        super(props);

        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    /**
     * Gets the name of the month
     * @param  {integer} month An integer representing the month (0 - 11)
     * @return {string}        Name of the month
     */
    getMonthString(month) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];

        return months[month];
    }

    /**
     * Returns to the previous month
     * @return {void}
     */
    previousMonth() {
        if (this.props.month === 0) {
            this.props.changeState({
                year: this.props.year - 1,
                month: 11
            });
        } else {
            this.props.changeState({
                year: this.props.year,
                month: this.props.month - 1
            });
        }
    }

    /**
     * Proceeds to the next month
     * @return {void}
     */
    nextMonth() {
        if (this.props.month === 11) {
            this.props.changeState({
                year: this.props.year + 1,
                month: 0
            });
        } else {
            this.props.changeState({
                year: this.props.year,
                month: this.props.month + 1
            });
        }
    }

    render() {
        return (
            <div className='month'>
                <ul>
                    <li className='prev' onClick={ this.previousMonth }>&#10094;</li>
                    <li className='next' onClick={ this.nextMonth }>&#10095;</li>
                    <li className='month-details'>
                        { this.getMonthString(this.props.month) }<br/>
                        <span>{ this.props.year }</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CalendarHeader;
