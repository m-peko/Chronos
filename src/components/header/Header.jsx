import React from 'react';
import Search from './search/Search';
import MobileToolbar from './mobile/MobileToolbar';
import Profile from './profile/Profile';

import '../../styles/components/header/header.css';

const Header = (props) => {
    return (
        <header className='item header'>
            <img src='images/chronos.png' className='logo' alt='Chronos'/>
            <Search tasks={ props.tasks }/>
            <MobileToolbar isOpen={ props.isOpen }
                           toggleSearch={ props.toggleSearch }
                           toggleNewTaskModal={ props.toggleNewTaskModal }
                           toggleSyncModal={ props.toggleSyncModal }
                           toggleCalendar={ props.toggleCalendar }
                           toggleProfile={ props.toggleProfile }/>
            <Profile user={ props.user }/>
        </header>
    );
};

export default Header;
