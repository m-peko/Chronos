import React, { Component } from 'react';
import ProfileDetails from './ProfileDetails';

import '../../styles/components/header/profile.css';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            firstName: 'Marin',
            lastName: 'Peko',
            email: 'marinpeko5@gmail.com',
            membership: 'Feb. 2017'
        };
    }

    render() {
        return (
            <div className='profile'>
                <i className='fa fa-user-circle-o'/>
                <span>{ this.state.firstName } { this.state.lastName }</span>
                <i className='fa fa-caret-down'/>
                <ProfileDetails fullName={ this.state.firstName + ' ' + this.state.lastName }
                                email={ this.state.email }
                                membership={ this.state.membership }/>
            </div>
        );
    }
}

export default Profile;
