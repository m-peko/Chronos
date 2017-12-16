import React from 'react';

const Day = (props) => {
    return (
        <td className={ props.isActive ? 'active' : '' }>{ props.date }</td>
    );
};

export default Day;
