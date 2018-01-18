import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader';
import Week from './Week';

import '../../styles/components/calendar/calendar.css';

class Calendar extends Component {
    constructor(props) {
        super(props);

        const now = new Date();
        this.state = {
            year: now.getFullYear(),
            month: now.getMonth()
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState(state) {
        this.setState(state);
    }

    getDaysInMonth(year, month) {
        const isLeap = ((year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0));
        return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }

    generateCalendarBody() {
        const date = new Date();
        date.setDate(1);
        date.setMonth(this.state.month);
        date.setYear(this.state.year);

        /**
         * Transforming first weekday numbering
         * (Su = 0, Mo = 1, ..., Sa 6) => (Mo = 0, Tu = 1, ..., Su = 6)
         */
        let firstWeekDay = date.getDay();
        firstWeekDay--;
        if (firstWeekDay === -1) {
            firstWeekDay = 6;
        }

        const daysInMonth = this.getDaysInMonth(this.state.year,
                                                this.state.month);

        let weekDays = [];
        for (let i = 0; i - firstWeekDay < daysInMonth; i++) {
            if (i >= firstWeekDay) {
                if (i - firstWeekDay + 1 === new Date().getDate() &&
                    this.state.year === new Date().getFullYear() &&
                    this.state.month === new Date().getMonth()) {
                    weekDays.push({
                        isActive: true,
                        date: i - firstWeekDay + 1
                    });
                } else {
                    weekDays.push({
                        isActive: false,
                        date: i - firstWeekDay + 1
                    });
                }
            } else {
                weekDays.push({
                    isActive: false,
                    date: ''
                });
            }
        }

        let weeks = [];
        while (weekDays.length > 0) {
            weeks.push({
                days: weekDays.splice(0, 7)
            });
        }

        const content = weeks.map((week, index) => {
            return <Week key={ index }
                         days={ week.days }/>;
        });

        return (
            <tbody>
                { content }
            </tbody>
        );
    }

    render() {
        return (
            <aside className={ this.props.show ? 'item aside-right visible' : 'item aside-right' }>
                <CalendarHeader year={ this.state.year } month={ this.state.month } changeState={ this.changeState }/>
                <table className='weeks'>
                    <thead>
                        <tr>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                            <th>Su</th>
                        </tr>
                    </thead>
                    { this.generateCalendarBody() }
                </table>
            </aside>
        );
    }
}

Calendar.propTypes = {
    show: PropTypes.bool.isRequired
};

export default Calendar;
