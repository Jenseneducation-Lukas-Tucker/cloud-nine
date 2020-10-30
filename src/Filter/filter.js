import React, { Component } from 'react';
import './filter.css'

export default class Filter extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="Filter">
        <div className="filter-result">{this.props.count} Saloons</div>
        <div className="filter-sort">Price
        <select value={this.props.sort} onChange={this.props.sortSaloons}>
        <option value="">All</option>
        <option value="highest">Highest Price</option>
        <option value="lowest">Lowest Price</option>
        </select></div>
        </div>
         );
    }
}
 

