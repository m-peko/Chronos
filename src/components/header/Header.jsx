import React from 'react';
import Search from './Search';
import MobileToolbar from './MobileToolbar';
import Profile from './Profile';

import '../../styles/components/header/header.css';

const Header = (props) => {
    return (
        <header className='item header'>
            <img src='images/chronos.png' className='logo' alt='Chronos'/>
            <Search/>
            <MobileToolbar/>
            <Profile user={ props.user }/>
        </header>
    );
};

export default Header;
