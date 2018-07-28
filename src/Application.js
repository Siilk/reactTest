import React, {Component} from 'react';
import {ClockWidget} from './ClockWidget';
import './Application.css';

let data =
    [
        {
            objId: 0,
            vendor: 'Yamaha',
            vendorUrl: 'http://www.yamaha.com',
            model: 'MT09',
            year: '2015',
            engineCC: '850',
            cyls: '3'
        },
        {
            objId: 1,
            vendor: 'Honda',
            vendorUrl: 'http://www.honda.com',
            model: 'CB250',
            year: '2006',
            engineCC: '250',
            cyls: '2',
        },
    ];

export default class Application extends Component
{
    constructor(properties)
    {
        super(properties);

        this.state =
        {
            data
        };

        this.onDiscard = this.onDiscard.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    render()
    {
        let res =
        (
            <div className="App">
                <ClockWidget/>
                <br/>
                {
                    this.state.data.map
                    (
                        item =>
                        <div key={item.objId}>
                            <span>
                                <a href={item.vendorUrl}>{item.vendor}</a>
                            </span>
                            &nbsp;
                            <span>{item.model}</span>
                            &nbsp;
                            <span>({item.year})</span>
                            &nbsp;
                            <button type="button" onClick={() => this.onDiscard(item.objId)}>Discard</button>
                            <br/>
                        </div>
                    )
                }
                <br/>
                <button type="button" onClick={() => this.onReset(data)}>Reset</button>
                <ExplainBindingsComponent/>
            </div>
        );
        return res;
    }

    onDiscard(itemId)
    {
        let updatedList = this.state.data.filter(item => item.objId !== itemId);
        this.setState({data : updatedList});
    }

    onReset(listData)
    {
        this.setState({data : listData});
    }
}

class ExplainBindingsComponent extends Component
{
    constructor()
    {
        super();
        this.onClickMe = this.onClickMe.bind(this);
    }

    onClickMe()
    {
        console.log(this);
    }

    render()
    {
        return (
            <button onClick={this.onClickMe} type="button">
                Click Me
            </button>
        );
    }
}
