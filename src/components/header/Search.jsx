import React from 'react';

import '../../styles/components/header/search.css';

const Search = (props) => {
    return (
        <div className='search'>
            <span className='search-icon'>
                <i className='fa fa-search'/>
            </span>
            <input type='text' placeholder='Search...' id='search' />
        </div>
    );
};

export default Search;
