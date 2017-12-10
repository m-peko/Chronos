import React, { Component } from 'react';

import '../../styles/components/left-sidebar/toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <aside className='item aside-left'>
                <ul className='toolbar'>
                    <li>
                        <a href='#'>
                            <i className='fa fa-plus' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='fa fa-refresh' aria-hidden='true'></i>
                        </a>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default Toolbar;
