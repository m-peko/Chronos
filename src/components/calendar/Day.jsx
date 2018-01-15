import React from 'react';
import PropTypes from 'prop-types';

const Day = (props) => {
    return (
        <td className={ props.isActive ? 'active' : '' }>{ props.date }</td>
    );
};

Day.propTypes = {
    isActive: PropTypes.bool.isRequired,
    date: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
};

export default Day;
