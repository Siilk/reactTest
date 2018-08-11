import React from 'react';
import {filterData} from '../utility/Functions';
import {smallColumn} from '../utility/StaticData'

export let TitleBar = ({children, className}) => <div className={className}><h3>{children}</h3></div>;

export let Button = ({children, className, onClick}) => <button type="button" className={className} onClick={onClick}>{children}</button>;

export let SearchField = ({label = '', value, onChange, onClear, className}) =>
    <div className="searchElem">
        <label>
            {label}
            <input type="text" value={value} onChange={onChange} className="searchField"/>
        </label>
        <Button onClick={onClear}>X</Button>
    </div>;

export let ItemList = ({data, filterParams, onDiscard, model}) =>
{
    let res = <div/>;
    if (data !== null && data !== [] && data !== {})
    {
        res =
        (
            <div className="table-holder">
                <div className="table-header">
                {
                    Object.keys(model.columns).map
                    (
                        modelField =>
                        {
                            let columnDef = model.columns[modelField];
                            return <span style={columnDef.colWidth}>{columnDef.label}</span>
                        }
                    )
                }
                </div>
                <div className="table">
                {
                    data.filter(filterData(filterParams)).map
                    (
                        item =>
                            <div key={item[model.idField]} className="table-row">
                                {
                                    Object.keys(model.columns).map
                                    (
                                        modelField =>
                                        {
                                            let columnDef = model.columns[modelField];
                                            let res =
                                            (
                                                <span style={columnDef.colWidth}>{item[columnDef.field]}</span>
                                            );
                                            return res;
                                        }
                                    )
                                }
                                <span style={smallColumn}><Button className={onDiscard === undefined ? "button-hidden" : "button-inline"}
                                    onClick={() => onDiscard(item[model.idField])}>Discard</Button></span>
                            </div>
                    )
                }
                </div>
            </div>
        );
    }
    return res;
};