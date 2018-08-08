import React from 'react';
import {filterData} from '../utility/Functions';
import {smallColumn} from '../utility/DataSource'

export let TitleBar = ({children, className}) => <div className={className}><h3>{children}</h3></div>;

export let Button = ({children, className, onClick}) => <button type="button" className={className} onClick={onClick}>{children}</button>;

export let SearchField = ({label = '', value, onChange, onClear, className}) =>
    <div className={className}>
        <label>{label}<input type="text" value={value} onChange={onChange} style={{margin: '5px'}}/></label><Button onClick={onClear}>X</Button>
    </div>;

export let ItemList = ({data, filterParams, onDiscard, model}) =>
{
    let res =
    (
        <div className="table-holder">
            <div className="table-header">
                {
                    Object.keys(model).map
                    (
                        modelField =>
                        {
                            let columnDef = model[modelField];
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
                            <div key={item.objId} className="table-row">
                                {
                                    Object.keys(model).map
                                    (
                                        modelField =>
                                        {
                                            let columnDef = model[modelField];
                                            let res =
                                                (
                                                    <span style={columnDef.colWidth}>{item[columnDef.field]}</span>
                                                );
                                            return res;
                                        }
                                    )
                                }
                                <span style={smallColumn}><Button className="button-inline" onClick={() => onDiscard(item.objId)}>Discard</Button></span>
                            </div>
                    )
                }
            </div>
        </div>
    );
    return res;
};