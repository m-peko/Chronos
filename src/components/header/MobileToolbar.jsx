import React from 'react';

import '../../styles/components/header/mobile-toolbar.css';

const MobileToolbar = (props) => {
    return (
        <ul className='mobile-toolbar'>
            <li>
                <i className='fa fa-search' aria-hidden='true'/>
            </li>
            <li className={ props.tools.newTask ? 'tool-active' : '' }
                onClick={ props.toggleNewTask }>
                <i className='fa fa-plus' aria-hidden='true'/>
            </li>
            <li className={ props.tools.sync ? 'tool-active' : '' }
                onClick={ props.toggleSync }>
                <i className='fa fa-refresh' aria-hidden='true'/>
            </li>
            <li className={ props.tools.calendar ? 'tool-active' : '' }
                onClick={ props.toggleCalendar }>
                <i className='fa fa-calendar' aria-hidden='true'/>
            </li>
            <li>
                <i className='fa fa-user' aria-hidden='true'/>
            </li>
        </ul>
    );
};

export default MobileToolbar;
