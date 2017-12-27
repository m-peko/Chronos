import React, { Component } from 'react';

import '../../../styles/components/modal/new-task/new-task-form.css';

const initialState = {
    title: '',
    date: '',
    from: '',
    to: '',
    category: 'Chilling out',
    location: '',
    repetition: '',
    color: 'blue',
    reminder: false,
    reminderTimes: []
};

class NewTaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = '';

        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        } else if (event.target.tagName.toLowerCase() === 'div') {
            name = event.target.dataset.name;
            value = event.target.dataset.value;
        } else {
            value = event.target.value;
        }

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        // if everything is ok
        this.props.onSubmit(this.state);
        this.props.close();
    }

    handleCancel() {
        this.setState(initialState);
    }

    render() {
        return (
            <div>
                <div className='modal-body new-task-form'>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='title'>Title</label>
                        </div>
                        <div className='col-60'>
                            <input type='text' id='title' name='title' placeholder='Task title...'
                                   value={ this.state.title }
                                   onChange={ this.handleChange }/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='date'>Date</label>
                        </div>
                        <div className='col-60'>
                            <input type='date' id='date' name='date' placeholder='Task date...'
                                   value={ this.state.date }
                                   onChange={ this.handleChange }/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='from'>From</label>
                        </div>
                        <div className='col-15'>
                            <input type='number' id='from' name='from' min='0' max='23.59' step='0.01'
                                   value={ this.state.from }
                                   onChange={ this.handleChange }/>
                        </div>
                        <div className='col-15'>
                            <label htmlFor='to' className='label-margin'>To</label>
                        </div>
                        <div className='col-15'>
                            <input type='number' id='to' name='to' min='0' max='23.59' step='0.01'
                                   value={ this.state.to }
                                   onChange={ this.handleChange }/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='category'>Category</label>
                        </div>
                        <div className='col-60'>
                            <select id='category' name='category'
                                    value={ this.state.category }
                                    onChange={ this.handleChange }>
                                <option value='Chilling out'>Chilling out</option>
                                <option value='Lecture'>Lecture</option>
                                <option value='Training'>Training</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='location'>Location</label>
                        </div>
                        <div className='col-60'>
                            <input type='text' id='location' name='location' placeholder='Task location...'
                                   value={ this.state.location }
                                   onChange={ this.handleChange }/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='reminder'>Reminder</label>
                        </div>
                        <div className='col-60'>
                            <label className='switch'>
                                <input type='checkbox' name='reminder'
                                       value={ this.state.reminder }
                                       onChange={ this.handleChange }/>
                                <span className='slider round'></span>
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-15'>
                            <label htmlFor='reminder'>Color</label>
                        </div>
                        <div className='col-60'>
                            <div data-name='color' data-value='blue'
                                 onClick={ this.handleChange }
                                 className={ this.state.color === 'blue' ? 'color-box blue-box active-box' : 'color-box blue-box' }/>
                            <div data-name='color' data-value='orange'
                                 onClick={ this.handleChange }
                                 className={ this.state.color === 'orange' ? 'color-box orange-box active-box' : 'color-box orange-box' }/>
                            <div data-name='color' data-value='red'
                                 onClick={ this.handleChange }
                                 className={ this.state.color === 'red' ? 'color-box red-box active-box' : 'color-box red-box' }/>
                            <div data-name='color' data-value='green'
                                 onClick={ this.handleChange }
                                 className={ this.state.color === 'green' ? 'color-box green-box active-box' : 'color-box green-box' }/>
                        </div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className='app-light-btn' onClick={ this.handleCancel }>Cancel</button>
                    <button className='app-btn' onClick={ this.handleSubmit }>Add</button>
                </div>
            </div>
        );
    }
}

export default NewTaskForm;
