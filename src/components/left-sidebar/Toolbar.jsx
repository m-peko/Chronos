import React from 'react';

import '../../styles/components/left-sidebar/toolbar.css';

const Toolbar = (props) => {
    return (
        <aside className='item aside-left'>
            <ul className='toolbar'>
                <li className={ props.tools.newTask === true ? 'tool-active' : '' }
                    onClick={ props.toggleNewTask }>
                    <i className='fa fa-plus' aria-hidden='true'></i>
                </li>
                <li className={ props.tools.sync === true ? 'tool-active' : '' }
                    onClick={ props.toggleSync }>
                    <i className='fa fa-refresh' aria-hidden='true'></i>
                </li>
            </ul>
        </aside>
    );
};

export default Toolbar;
