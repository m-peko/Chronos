import React from 'react';
import PropTypes from 'prop-types';

const Day = (props) => {
    return (
        <td className={ props.isActive ? 'active' : '' }>{ props.date }</td>
    );
};

Day.propTypes = {
    isActive: PropTypes.bool.isRequired,
    date: PropTypes.number.isRequired
};

export default Day;
