import React, { Component } from 'react';

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
        this.setState(initialState);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className='modal-body sync-form'>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='sync'>Synchronize</label>
                        </div>
                        <div className='col-60'>
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
                    <button className='app-light-btn' onClick={ this.handleCancel }>Cancel</button>
                    <button className='app-btn' onClick={ this.handleSubmit }>Sync</button>
                </div>
            </div>
        );
    }
}

export default SyncForm;
