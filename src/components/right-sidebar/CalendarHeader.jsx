import React, { Component } from 'react';

import '../../styles/components/right-sidebar/calendar-header.css';

class CalendarHeader extends Component {
    constructor(props) {
        super(props);

        this.goToPreviousMonth = this.goToPreviousMonth.bind(this);
        this.goToNextMonth = this.goToNextMonth.bind(this);
    }

    getMonthName(month) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];

        return months[month];
    }

    goToPreviousMonth() {
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

    goToNextMonth() {
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
                    <li className='prev' onClick={ this.goToPreviousMonth }>&#10094;</li>
                    <li className='next' onClick={ this.goToNextMonth }>&#10095;</li>
                    <li className='month-details'>
                        { this.getMonthName(this.props.month) }<br/>
                        <span>{ this.props.year }</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CalendarHeader;
