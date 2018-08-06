import React from 'react';
import {Button, SearchField} from './StatelessComponents'

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
        let res =
        (
            <form>
                <SearchField label="Model" value={filterParams.modelParam}
                    onChange={(event) => this.setSearchParam('modelParam', event.target.value)}
                    onClear={() => this.setSearchParam('modelParam', '')}/>

                <SearchField label="Vendor" value={filterParams.vendorParam}
                    onChange={(event) => this.setSearchParam('vendorParam', event.target.value)}
                    onClear={() => this.setSearchParam('vendorParam', '')}/>

                <SearchField label="Year" value={filterParams.yearParam}
                    onChange={(event) => this.setSearchParam('yearParam', event.target.value)}
                    onClear={() => this.setSearchParam('yearParam', '')}/>

                <SearchField label="Displacement" value={filterParams.engineCCParam}
                    onChange={(event) => this.setSearchParam('engineCCParam', event.target.value)}
                    onClear={() => this.setSearchParam('engineCCParam', '')}/>

                <SearchField label="Cylinders" value={filterParams.cylsParam}
                    onChange={(event) => this.setSearchParam('cylsParam', event.target.value)}
                    onClear={() => this.setSearchParam('cylsParam', '')}/>
                <Button type="button" onClick={() => onApply(filterParams)}>Search</Button>
                <Button type="button" onClick={() => this.clearSearchParams()}>Clear search</Button>
            </form>
        );
        return res;
    }

    setSearchParam = (paramName, paramVal) =>
    {
        let updatedFilterParams = this.state.filterParams;
        updatedFilterParams[paramName] = paramVal;
        this.setState({filterParams : updatedFilterParams});
    };

    clearSearchParams = () =>
        this.setState
        (
            {
                filterParams :
                {
                    modelParam : '',
                    vendorParam : '',
                    yearParam: '',
                    engineCCParam: '',
                    cylsParam: ''
                }
            }, () => this.props.onApply(this.state.filterParams)
        );
}