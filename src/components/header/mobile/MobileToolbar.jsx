import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/components/header/mobile/mobile-toolbar.css';

const MobileToolbar = (props) => {
    return (
        <ul className='mobile-toolbar'>
            <li className={ props.isOpen.search ? 'tool-active' : '' }
                onClick={ props.toggleSearch }>
                <i className='fa fa-search' aria-hidden='true'/>
            </li>
            <li className={ props.isOpen.newTask ? 'tool-active' : '' }
                onClick={ props.toggleNewTaskModal }>
                <i className='fa fa-plus' aria-hidden='true'/>
            </li>
            <li className={ props.isOpen.sync ? 'tool-active' : '' }
                onClick={ props.toggleSyncModal }>
                <i className='fa fa-refresh' aria-hidden='true'/>
            </li>
            <li className={ props.isOpen.calendar ? 'tool-active' : '' }
                onClick={ props.toggleCalendar }>
                <i className='fa fa-calendar' aria-hidden='true'/>
            </li>
            <li className={ props.isOpen.profile ? 'tool-active' : '' }
                onClick={ props.toggleProfile }>
                <i className='fa fa-user' aria-hidden='true'/>
            </li>
        </ul>
    );
};

MobileToolbar.propTypes = {
    isOpen: PropTypes.object.isRequired,
    toggleSearch: PropTypes.func.isRequired,
    toggleNewTaskModal: PropTypes.func.isRequired,
    toggleSyncModal: PropTypes.func.isRequired,
    toggleCalendar: PropTypes.func.isRequired,
    toggleProfile: PropTypes.func.isRequired,
};

export default MobileToolbar;
