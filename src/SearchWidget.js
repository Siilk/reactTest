import React from 'react';
import {Button} from './StatelessComponents'

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
                <label>Model&nbsp;<input type="text" value={filterParams.modelParam} onChange={this.storeModelParam}/></label>
                &nbsp;
                <Button type="button" onClick={this.clearModel}>Clear field</Button>
                <br/>
                <Button type="button" onClick={() => onApply(filterParams)}>Search</Button>
                <Button type="button" onClick={() => this.clearSearchParams()}>Clear search</Button>

            </form>
        );
        return res;
    }

    storeModelParam = (event) =>
    {
        this.setModelParam(event.target.value);
    };

    clearModel = () =>
    {
        this.setModelParam('');
    };

    setModelParam = model =>
    {
        this.setState({filterParams : {modelParam : model}});
    };

    clearSearchParams = () =>
    {
        this.setState({filterParams : {modelParam : ''}}, () => {this.props.onApply(this.state.filterParams)});
    };
}