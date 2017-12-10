import React, { Component } from 'react';

import '../../styles/components/header/mobile-toolbar.css';

class MobileToolbar extends Component {
    render() {
        return (
            <ul className='mobile-toolbar'>
                <li>
                    <a href='#'>
                        <i className='fa fa-search' aria-hidden='true'/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='fa fa-plus' aria-hidden='true'/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='fa fa-refresh' aria-hidden='true'/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='fa fa-calendar' aria-hidden='true'/>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <i className='fa fa-user' aria-hidden='true'/>
                    </a>
                </li>
            </ul>
        );
    }
}

export default MobileToolbar;
