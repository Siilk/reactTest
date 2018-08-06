import './Application.css';
import React, {Component} from 'react';
import SearchWidget from './SearchWidget';
import {ItemList, Button, TitleBar} from './StatelessComponents'
import {sourceData} from './DataSource';

export default class Application extends Component
{
    constructor(properties)
    {
        super(properties);

        this.state =
        {
            data : sourceData,
            filterParams :
            {
                modelParam : '',
                vendorParam : '',
                yearParam: '',
                engineCCParam: '',
                cylsParam: ''
            }
        };
    }

    render()
    {
        let {data, filterParams} = this.state;
        let res =
        (
            <div className="page">
                <TitleBar className="title">React test</TitleBar>
                <div className="interactions">
                    <SearchWidget value={filterParams} onApply={this.onApplySearch}/>
                </div>
                <ItemList data={data} filterParams={filterParams} onDiscard={this.onDiscard}/>
                <Button type="button" onClick={() => this.onReset(sourceData)}>Reset</Button>
            </div>
        );
        return res;
    }

    onDiscard = (itemId) =>
    {
        this.setState(prevState => ({data : prevState.data.filter(item => item.objId !== itemId)}));
    };

    onApplySearch = (filterParams) =>
    {
        this.setState({filterParams : filterParams});
    };

    onReset = (listData) =>
    {
        this.setState({data : listData});
    };
}
