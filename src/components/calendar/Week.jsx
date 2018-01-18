import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

const Week = (props) => {
    const days = props.days.map((day, index) => {
        return <Day key={ index }
                    isActive={ day.isActive }
                    date={ day.date }/>
    });

    return (
        <tr>
            { days }
        </tr>
    );
};

Week.propTypes = {
    days: PropTypes.array.isRequired
};

export default Week;
