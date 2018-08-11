import './Application.css';
import React, {Component} from 'react';
import {hackNewsModel} from './utility/DataModels';
import {DEFAULT_QUERY, hackNewsUrl} from './utility/StaticData';
import FilterableListView from "./components/FilterableListView";
import {ItemList} from "./components/StatelessComponents";

export default class Application extends Component
{
    constructor(params)
    {
        super(params);
        this.state =
        {
            searchTerm : DEFAULT_QUERY,
            result : null,
        }
    }

    componentDidMount()
    {
        fetch(hackNewsUrl + this.state.searchTerm).then(response => response.json())
            .then(result => this.setSearchTopStories(result)).catch(error => console.error(error));
    }

    render = () => this.state.result ? <FilterableListView title="Search Results" dataModel={hackNewsModel} dataSource={this.state.result.hits}/> : null;

    setSearchTopStories = (data) =>
    {
        this.setState({result: data});
    };
}
