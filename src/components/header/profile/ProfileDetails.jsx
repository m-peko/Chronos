import React from 'react';
import PropTypes from 'prop-types';

const ProfileDetails = (props) => {
    return (
        <div className={ props.showMobile ? 'profile-details mobile-profile' : 'profile-details' }>
            <div className='profile-details-img'>
                <i className='fa fa-user-circle-o'></i>
            </div>
            <div className='profile-details-info'>
                <h4>{ props.fullName }</h4>
                <h5>{ props.email }</h5>
                <i>Member since { props.membership }</i>
            </div>
            <div>
                <button className='app-btn profile-details-btn'>View profile</button>
                <button className='app-btn profile-details-btn'>Logout</button>
            </div>
        </div>
    );
};

ProfileDetails.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    membership: PropTypes.string.isRequired,
    showMobile: PropTypes.bool.isRequired
};

export default ProfileDetails;
