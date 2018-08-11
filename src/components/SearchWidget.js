import React from 'react';
import {Button, SearchField} from './StatelessComponents'
import {deepCopy} from "../utility/Functions";
import {largeColumn, medColumn} from "../utility/StaticData";

/*
    idField : 'objectID',
    columns :
    {
        authorParam: {label: 'Author', value: '', field: 'author', colWidth: medColumn},
        titleParam: {label: 'Title', value: '', field: 'title', colWidth: largeColumn},
    }
*/

export default class SearchWidget extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            filterParams : props.value
        }
    }

    render()
    {
        let {filterParams} = this.state;
        let {onApply} = this.props;
        let fields = Object.keys(filterParams.columns);
        let res =
        (
            <div className="interactions">
                <div className="searchTitle">Search parameters</div>
                <form className="searchForm">
                    {
                        fields.map
                        (
                            field =>
                            <SearchField key={field} label={filterParams.columns[field].label} value={filterParams.columns[field].value}
                                onChange={(event) => this.setSearchParam(field, event.target.value)}
                                onClear={() => this.setSearchParam(field, '')}/>
                        )
                    }
                    <Button onClick={() => onApply(filterParams)}>Search</Button>
                    <Button onClick={() => this.clearSearchParams()}>Clear search</Button>
                </form>
            </div>
        );
        return res;
    }

    setSearchParam = (paramName, paramVal) =>
    {
        let updatedFilterParams = this.state.filterParams;
        updatedFilterParams.columns[paramName].value = paramVal;
        this.setState({filterParams : updatedFilterParams});
    };

    clearSearchParams = () =>
    {
        this.setState({filterParams: deepCopy(this.props.defaultVal)},
            () =>{this.props.onApply(this.state.filterParams)});
    };
}