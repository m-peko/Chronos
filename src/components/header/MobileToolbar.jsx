import React, { Component } from 'react';

import '../../styles/components/header/mobile-toolbar.css';

class MobileToolbar extends Component {
    render() {
        return (
            <ul className='mobile-toolbar'>
                <li>
                    <i className='fa fa-search' aria-hidden='true'/>
                </li>
                <li>
                    <i className='fa fa-plus' aria-hidden='true'/>
                </li>
                <li>
                    <i className='fa fa-refresh' aria-hidden='true'/>
                </li>
                <li>
                    <i className='fa fa-calendar' aria-hidden='true'/>
                </li>
                <li>
                    <i className='fa fa-user' aria-hidden='true'/>
                </li>
            </ul>
        );
    }
}

export default MobileToolbar;
