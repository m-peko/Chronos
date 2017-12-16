import React from 'react';

import '../../../styles/components/modal/new-task/new-task-body.css';

const NewTaskBody = (props) => {
    return (
        <div className='modal-body new-task-body'>
            <div className='row'>
                <div className='col-15'>
                    <label htmlFor='title'>Title</label>
                </div>
                <div className='col-60'>
                    <input type='text' id='title' name='title' placeholder='Task title...'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-15'>
                    <label htmlFor='date'>Date</label>
                </div>
                <div className='col-60'>
                    <input type='date' id='date' name='date' placeholder='Task date...'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-15'>
                    <label htmlFor='from'>From</label>
                </div>
                <div className='col-15'>
                    <input type='number' id='from' name='from' min='0' max='23.59' step='0.01'/>
                </div>
                <div className='col-15'>
                    <label htmlFor='to' className='label-margin'>To</label>
                </div>
                <div className='col-15'>
                    <input type='number' id='to' name='to' min='0' max='23.59' step='0.01'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-15'>
                    <label htmlFor='country'>Category</label>
                </div>
                <div className='col-60'>
                    <select id='country' name='country'>
                    <option value='chilling'>Chilling out</option>
                    <option value='lecture'>Lecture</option>
                    <option value='training'>Training</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col-15'>
                    <label htmlFor='location'>Location</label>
                </div>
                <div className='col-60'>
                    <input type='text' id='location' name='location' placeholder='Task location...'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-15'>
                    <label htmlFor='reminder'>Reminder</label>
                </div>
                <div className='col-60'>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NewTaskBody;
