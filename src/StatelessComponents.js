import React from 'react';

let filterData = filterParams => (item => item.model.startsWith(filterParams.modelParam));

export let TitleBar = ({children, className}) => <div className={className}><h3>{children}</h3></div>;

export let Button = ({children, className, onClick}) => <button type="button" className={className} onClick={onClick}>{children}</button>;

export let ItemList = ({data, filterParams, onDiscard}) =>
<div>
{
    data.filter(filterData(filterParams)).map
    (
        item =>
            <div key={item.objId}>
                <span><a href={item.vendorUrl}>{item.vendor}</a></span>
                &nbsp;<span>{item.model}</span>&nbsp;<span>({item.year})</span>&nbsp;
                <Button type="button" onClick={() => onDiscard(item.objId)}>Discard</Button>
                <br/>
            </div>
    )
}
</div>;

