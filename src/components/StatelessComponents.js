import React from 'react';
import {filterData} from "../utility/Functions";

const largeColumn =
{
    width: '80%',
};

const midColumn =
{
    width: '10%',
};

const smallColumn =
{
    width: '5%',
};

export let TitleBar = ({children, className}) => <div className={className}><h3>{children}</h3></div>;

export let Button = ({children, className, onClick}) => <button type="button" className={className} onClick={onClick}>{children}</button>;

export let SearchField = ({label = '', value, onChange, onClear, className}) =>
    <div className={className}>
        <label>{label}<input type="text" value={value} onChange={onChange} style={{margin: '5px'}}/></label><Button type="button" onClick={onClear}>X</Button>
    </div>;

export let ItemList = ({data, filterParams, onDiscard, model}) =>
    <div className="table">
    {
        data.filter(filterData(filterParams)).map
        (
            item =>
                <div key={item.objId} className="table-row">
                    {model.map(columnDef => <span style={midColumn}>{item[columnDef]}</span>)}
                    <br/>
                </div>
        )
    }
    </div>;

