import React, {Component} from 'react';
import SearchWidget from './SearchWidget';
import {ItemList, Button, TitleBar} from './StatelessComponents'
import {deepCopy} from '../utility/Functions'
import {hackNewsModel} from "../utility/DataModels";

export default class FilterableListView extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            listData : [...props.dataSource],
            filterParams : deepCopy(props.dataModel)
        };
        console.warn('props.listData');
        console.warn(props.dataSource);
        console.warn(this.state.listData);
    }

    render()
    {
        let {listData, filterParams} = this.state;
        let {dataModel, dataSource, title = ''} = this.props;
        let res =
        (
            <div className="page">
                <TitleBar className="title">{title}</TitleBar>
                <div className="dataContainer">

                <div className="listHolder">
                    <ItemList data={listData} model={dataModel} filterParams={filterParams} onDiscard={this.onDiscard}/>
                    <Button onClick={() => this.onReset(dataSource)}>Reset</Button>
                    {/*todo move reset into ItemList*/}
                </div>
                <SearchWidget value={filterParams} defaultVal={dataModel} onApply={this.onApplySearch}/>
                    {/*todo search*/}
                </div>
            </div>
        );
        return res;
    }

    onDiscard = (itemId) =>
    {
        let updatedList = this.state.listData.filter(item => item[this.state.filterParams.idField] !== itemId);
        this.setState({listData : updatedList});
    };

    onApplySearch = (filterParams) =>
    {
        this.setState({filterParams : filterParams});
    };

    onReset = (listData) =>
    {
        this.setState({listData : listData});
    };
}
