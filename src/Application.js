import './Application.css';
import React, {Component} from 'react';
import FilterableListView from "./components/FilterableListView";
import {motoFilterStructure, motoSourceData} from "./utility/DataSource";

export default class Application extends Component
{
    render = () => <FilterableListView filterObj={motoFilterStructure} sourceData={motoSourceData}/>;
    // render = () => <FilterableListView filterObj={filterStructure} sourceData={sourceData}/>;
}
