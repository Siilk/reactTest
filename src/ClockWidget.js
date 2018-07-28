import React, {Component} from 'react';

export class ClockWidget extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                date: new Date()
            };
    }

    componentDidMount()
    {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerId);
    }

    render()
    {
        let res =
        (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button type="button" onClick={() => this.onButtonPress()}>||/></button>
            </div>
        );
        return res;
    }

    tick()
    {
        this.setState({date: new Date()})
    }

    onButtonPress()
    {
        if (this.timerId == null)
        {
            this.timerId = setInterval(() => this.tick(), 1000);
        }
        else
        {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
}