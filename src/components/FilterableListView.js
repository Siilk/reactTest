import React, {Component} from 'react';
import SearchWidget from './SearchWidget';
import {ItemList, Button, TitleBar} from './StatelessComponents'
import {deepCopy} from '../utility/Functions'

export default class FilterableListView extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            data : props.sourceData,
            filterParams : deepCopy(props.dataModel)
        };
    }

    render()
    {
        let {data, filterParams} = this.state;
        let {dataModel, sourceData} = this.props;
        let res =
        (
            <div className="page">
                <TitleBar className="title">React test</TitleBar>
                <div className="interactions">
                    <SearchWidget value={filterParams} defaultVal={dataModel} onApply={this.onApplySearch}/>
                </div>
                <ItemList data={data} model={dataModel} filterParams={filterParams} onDiscard={this.onDiscard}/>
                <Button onClick={() => this.onReset(sourceData)}>Reset</Button>
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
