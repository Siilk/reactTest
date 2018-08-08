import React from 'react';
import {Button, SearchField} from './StatelessComponents'
import {deepCopy} from "../utility/Functions";

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
        let fields = Object.keys(filterParams);
        let res =
        (
            <form>
                {
                    fields.map
                    (
                        field =>
                        <SearchField key={field} label={filterParams[field].label} value={filterParams[field].value}
                            onChange={(event) => this.setSearchParam(field, event.target.value)}
                            onClear={() => this.setSearchParam(field, '')}/>
                    )
                }
                <Button onClick={() => onApply(filterParams)}>Search</Button>
                <Button onClick={() => this.clearSearchParams()}>Clear search</Button>
            </form>
        );
        return res;
    }

    setSearchParam = (paramName, paramVal) =>
    {
        let updatedFilterParams = this.state.filterParams;
        updatedFilterParams[paramName].value = paramVal;
        this.setState({filterParams : updatedFilterParams});
    };

    clearSearchParams = () =>
    {
        this.setState({filterParams: deepCopy(this.props.defaultVal)},
            () =>{this.props.onApply(this.state.filterParams)});
    };
}