import React, { Component } from 'react';
import ScheduleHeader from './ScheduleHeader';
import ScheduleBody from './ScheduleBody';

import '../../styles/components/schedule/schedule.css';

class Schedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <main className='item main'>
                <table>
                    <ScheduleHeader/>
                    <ScheduleBody/>
                </table>
            </main>
        );
    }
}

export default Schedule;
