import './Application.css';
import React, {Component} from 'react';
import SearchWidget from './SearchWidget';
import {ItemList, Button, TitleBar} from './StatelessComponents'

let sourceData =
[
    {
        objId: 0,
        vendor: 'Yamaha',
        vendorUrl: 'http://www.yamaha.com',
        model: 'MT09SP',
        year: '2018',
        engineCC: '850',
        cyls: '3'
    },
    {
        objId: 1,
        vendor: 'KTM',
        vendorUrl: 'http://www.ktm.com',
        model: 'Duke690',
        year: '2018',
        engineCC: '650',
        cyls: '1',
    },
    {
        objId: 2,
        vendor: 'Aprilia',
        vendorUrl: 'http://www.aprilia.com',
        model: 'Shiver',
        year: '2017',
        engineCC: '890',
        cyls: '2',
    },
    {
        objId: 3,
        vendor: 'Ducati',
        vendorUrl: 'http://www.ducati.com',
        model: 'Monster',
        year: '2017',
        engineCC: '980',
        cyls: '2',
    },
    {
        objId: 4,
        vendor: 'Kawasaki',
        vendorUrl: 'http://www.kawasaki.com',
        model: 'Z800',
        year: '2018',
        engineCC: '800',
        cyls: '4',
    }
];

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
                modelParam : ''
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
                <br/>
            <div className="interactions">
                <SearchWidget value={filterParams} onApply={this.onApplySearch} onClearSearch={this.onClearSearch}/>
            </div>
                <br/>
                <ItemList data={data} filterParams={filterParams} onDiscard={this.onDiscard}/>
                <br/>
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

    onClearSearch = () =>
    {
        this.setState({filterParams : {modelParam : ''}});
    };

    onReset = (listData) =>
    {
        this.setState({data : listData});
    };
}
