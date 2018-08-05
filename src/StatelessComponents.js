import React from 'react';


const filterData = filterParams => (item => item.model.startsWith(filterParams.modelParam));

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

export let ItemList = ({data, filterParams, onDiscard}) =>
<div className="table">
{
    data.filter(filterData(filterParams)).map
    (
        item =>
            <div key={item.objId} className="table-row">
                <span style={midColumn}><a href={item.vendorUrl}>{item.vendor}</a></span>&nbsp;
                <span style={midColumn}>{item.model}</span>&nbsp;
                <span style={largeColumn}>{item.year}</span>&nbsp;
                <span style={smallColumn}><Button type="button" className="button-inline" onClick={() => onDiscard(item.objId)}>Discard</Button></span>
                <br/>
            </div>
    )
}
</div>;

