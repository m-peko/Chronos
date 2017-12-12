import React from 'react';
import ProfileDetails from './ProfileDetails';

import '../../styles/components/header/profile.css';

const Profile = (props) => {
    return (
        <div className='profile'>
            <i className='fa fa-user-circle-o'/>
            <span>{ props.user.firstName } { props.user.lastName }</span>
            <i className='fa fa-caret-down'/>
            <ProfileDetails fullName={ props.user.firstName + ' ' + props.user.lastName }
                            email={ props.user.email }
                            membership={ props.user.membership }/>
        </div>
    );
};

export default Profile;
