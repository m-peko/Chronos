import React, { Component } from 'react';
import Search from './Search';
import MobileToolbar from './MobileToolbar';
import Profile from './Profile';

import '../../styles/components/header/header.css';

class Header extends Component {
    render() {
        return (
            <header className='item header'>
                <img src='images/chronos.png' className='logo' alt='Chronos'/>
                <Search/>
                <MobileToolbar/>
                <Profile/>
            </header>
        );
    }
}

export default Header;
