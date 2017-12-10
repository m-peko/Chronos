import React, { Component } from 'react';

import '../../styles/components/modal/modal.css';

const Modal = (props) => {
    return (
        <div className={ props.visible ? 'modal visible' : 'modal' }>
            <div className='modal-content'>
                <div className='modal-header'>
                    <span className='close' onClick={ props.close }>&times;</span>
                    <p>{ props.title }</p>
                </div>
                <div className='modal-body'>
                    { props.body }
                </div>
                <div className='modal-footer'>
                    { props.footer }
                </div>
            </div>
        </div>
    );
};

export default Modal;
