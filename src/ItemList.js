import React from 'react'

let filterData = filterParams => (item => item.model.startsWith(filterParams.modelParam));

export default class ItemList extends React.Component
{
    render()
    {
        let {data, filterParams, onDiscard} = this.props;
        let res =
        <div>
            {
                data.filter(filterData(filterParams)).map
                (
                    item =>
                        <div key={item.objId}>
                            <span><a href={item.vendorUrl}>{item.vendor}</a></span>
                            &nbsp;<span>{item.model}</span>&nbsp;<span>({item.year})</span>&nbsp;
                            <button type="button" onClick={() => onDiscard(item.objId)}>Discard</button>
                            <br/>
                        </div>
                )
            }

        </div>;
        return res;
    }
}