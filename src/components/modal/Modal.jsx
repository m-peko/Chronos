import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/components/modal/modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.setModalRef = this.setModalRef.bind(this);
        this.setContentRef = this.setContentRef.bind(this);
        this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClickOutsideModal, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutsideModal, false);
    }

    setModalRef(node) {
        this.modalRef = node;
    }

    setContentRef(node) {
        this.contentRef = node;
    }

    handleClickOutsideModal(event) {
        if (this.modalRef && this.modalRef.contains(event.target) &&
            this.contentRef && !this.contentRef.contains(event.target)) {
            /* Click outside modal component */
            this.props.onClose();
        }
    }

    render() {
        if (!this.props.show)
            return null;

        return (
            <div ref={ this.setModalRef } className='modal'>
                <div ref={ this.setContentRef } className='modal-content'>
                    <div className='modal-header'>
                        <span className='close' onClick={ this.props.onClose }>&times;</span>
                        <p>{ this.props.title }</p>
                    </div>
                    { this.props.content }
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;
