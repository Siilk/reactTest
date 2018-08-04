import React, {Component} from 'react';

export default class TitleBar extends Component
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
                <h3>React test</h3>
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