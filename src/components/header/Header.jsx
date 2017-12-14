import React from 'react';
import Search from './Search';
import MobileToolbar from './MobileToolbar';
import Profile from './Profile';

import '../../styles/components/header/header.css';

const Header = (props) => {
    return (
        <header className='item header'>
            <img src='images/chronos.png' className='logo' alt='Chronos'/>
            <Search tasks={ props.tasks }/>
            <MobileToolbar tools={ props.tools }
                           toggleNewTask={ props.toggleNewTask }
                           toggleSync={ props.toggleSync }
                           toggleCalendar={ props.toggleCalendar }/>
            <Profile user={ props.user }/>
        </header>
    );
};

export default Header;
