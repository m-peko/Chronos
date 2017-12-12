import React, { Component } from 'react';
import SearchItem from './SearchItem';

import '../../styles/components/header/search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: props.tasks,
            filteredTasks: []
        };

        this.filterTasks = this.filterTasks.bind(this);
    }

    filterTasks(event) {
        let tasks = [];

        if (event.target.value !== '') {
            tasks = this.state.tasks;
            tasks = tasks.filter(task => {
                return task.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
            });
        }

        this.setState({
            filteredTasks: tasks
        });
    }

    generateFilteredContent() {
        return this.state.filteredTasks.map(task => {
            return <SearchItem key={ Math.random().toString(36).substr(2, 16) }
                               task={ task }/>;
        });
    }

    render() {
        return (
            <div className='search'>
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

export default Search;
