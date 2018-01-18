import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/components/modal/sync/sync-form.css';

const initialState = {
    sync: 'outlook'
};

class SyncForm extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        this.props.onSubmit(this.state.sync);
        this.props.close();
    }

    handleCancel() {
        this.props.close();
    }

    handleKeyDown(event) {
        if (event.keyCode === 27) {
            this.props.close();
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className='modal-body sync-form'>
                    <div className='row'>
                        <div className='col-20'>
                            <label htmlFor='sync'>Synchronize</label>
                        </div>
                        <div className='col-70'>
                            <select id='sync' name='sync'
                                    value={ this.state.sync }
                                    onChange={ this.handleChange }>
                                <option value='outlook'>Outlook</option>
                                <option value='fesb'>FESB Kalendar</option>
                                <option value='gmail'>Gmail Calendar</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className='app-btn' onClick={ this.handleSubmit }>Sync</button>
                    <button className='app-light-btn' onClick={ this.handleCancel }>Cancel</button>
                </div>
            </div>
        );
    }
}

SyncForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
};

export default SyncForm;
