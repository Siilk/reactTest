import './Application.css';
import React, {Component} from 'react';
import FilterableListView from "./components/FilterableListView";
import {motoModel, motoSourceData} from "./utility/DataSource";

export default class Application extends Component
{
    render = () => <FilterableListView dataModel={motoModel} sourceData={motoSourceData}/>;
    // render = () => <FilterableListView filterObj={filterStructure} sourceData={sourceData}/>;
}
