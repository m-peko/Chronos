import React from 'react';

import '../../../styles/components/header/search/search-item.css';

const SearchItem = (props) => {
    return (
        <li className={ 'search-item ' + props.task.color }>
            <span className='search-item-title'>{ props.task.title }</span>
            <span className='search-item-hours'>{ props.task.from } - { props.task.to }</span>
            <br/>
            <span className='search-item-category-location'>{ props.task.category } at { props.task.location }</span>
        </li>
    );
};

export default SearchItem;
