import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';

import '../../../styles/components/header/search/search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: props.tasks,
            filteredTasks: []
        };

        this.filterTasks = this.filterTasks.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tasks: nextProps.tasks
        });
    }

    filterTasks(event) {
        let tasks = [];

        if (event.target.value !== '') {
            tasks = this.state.tasks;
            tasks = tasks.filter(task =>
                task.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            );
        }

        this.setState({
            filteredTasks: tasks
        });
    }

    generateFilteredContent() {
        return this.state.filteredTasks.map((task, index) => {
            return <SearchItem key={ index }
                               task={ task }/>;
        });
    }

    render() {
        return (
            <div className={ this.props.showMobile ? 'search search-mobile' : 'search' }>
                <span className='search-icon'>
                    <i className='fa fa-search'/>
                </span>
                <input type='text' placeholder='Search...' id='search' autoComplete='off'
                       onChange={ this.filterTasks }/>
                <ul className='search-filter'>
                    { this.generateFilteredContent() }
                </ul>
            </div>
        );
    }
}

Search.propTypes = {
    tasks: PropTypes.array.isRequired,
    showMobile: PropTypes.bool.isRequired
};

export default Search;
