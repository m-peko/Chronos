import React from 'react';

import '../../styles/components/toolbar/toolbar.css';

const Toolbar = (props) => {
    return (
        <aside className='item aside-left'>
            <ul className='toolbar'>
                <li className={ props.isOpen.newTask === true ? 'tool-active' : '' }
                    onClick={ props.toggleNewTaskModal }>
                    <i className='fa fa-plus' aria-hidden='true'></i>
                </li>
                <li className={ props.isOpen.sync === true ? 'tool-active' : '' }
                    onClick={ props.toggleSyncModal }>
                    <i className='fa fa-refresh' aria-hidden='true'></i>
                </li>
            </ul>
        </aside>
    );
};

export default Toolbar;
