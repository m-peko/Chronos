import React from 'react';
import PropTypes from 'prop-types';
import ProfileDetails from './ProfileDetails';

import '../../../styles/components/header/profile/profile.css';

const Profile = (props) => {
    return (
        <div className='profile'>
            <div className='profile-general'>
                <i className='fa fa-user-circle-o'/>
                <span>{ props.user.firstName } { props.user.lastName }</span>
                <i className='fa fa-caret-down'/>
            </div>
            <ProfileDetails fullName={ props.user.firstName + ' ' + props.user.lastName }
                            email={ props.user.email }
                            membership={ props.user.membership }
                            showMobile={ props.showMobile }/>
        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    toggleProfile: PropTypes.func.isRequired,
    showMobile: PropTypes.bool.isRequired
};

export default Profile;
