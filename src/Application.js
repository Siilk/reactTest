import './Application.css';
import React, {Component} from 'react';
import FilterableListView from "./components/FilterableListView";
import {motoFilterStructure, motoSourceData} from "./utility/DataSource";


const model =
[
    'vendor', 'model', 'year'
];

export default class Application extends Component
{
    render = () => <FilterableListView filterObj={motoFilterStructure} sourceData={motoSourceData} listModel={model}/>;
    // render = () => <FilterableListView filterObj={filterStructure} sourceData={sourceData}/>;
}
