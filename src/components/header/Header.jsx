import React from 'react';
import PropTypes from 'prop-types';
import Search from './search/Search';
import MobileToolbar from './mobile/MobileToolbar';
import Profile from './profile/Profile';

import '../../styles/components/header/header.css';

const Header = (props) => {
    return (
        <header className='item header'>
            <img src='images/chronos.png' className='logo' alt='Chronos'/>
            <Search tasks={ props.tasks }
                    showMobile={ props.isOpen.search }/>
            <MobileToolbar isOpen={ props.isOpen }
                           toggleSearch={ props.toggleSearch }
                           toggleNewTaskModal={ props.toggleNewTaskModal }
                           toggleSyncModal={ props.toggleSyncModal }
                           toggleCalendar={ props.toggleCalendar }
                           toggleProfile={ props.toggleProfile }/>
            <Profile user={ props.user }
                     toggleProfile={ props.toggleProfile }
                     showMobile={ props.isOpen.profile }/>
        </header>
    );
};

Header.propTypes = {
    user: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    isOpen: PropTypes.object.isRequired,
    toggleSearch: PropTypes.func.isRequired,
    toggleNewTaskModal: PropTypes.func.isRequired,
    toggleSyncModal: PropTypes.func.isRequired,
    toggleCalendar: PropTypes.func.isRequired,
    toggleProfile: PropTypes.func.isRequired,
};

export default Header;
