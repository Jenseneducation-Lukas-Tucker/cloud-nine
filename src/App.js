import React, { Component } from "react";
import './App.css';
import FilterList from './FilterList';
import Saloon from './Saloon.js'
import SaloonList from './SaloonList.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Saloons: [
        {name:'Sax & Fön', price:'320 kr', time:'30 min', rating: 4, location:'Rådmansgatan 46'},
        {name:'Håriszont', price:'320 kr', time:'30 min', rating: 4, location:'Rådmansgatan 46'},
        {name:'Hårhuset', price:'320 kr', time:'30 min', rating: 4, location:'Rådmansgatan 46'},
        {name:'Hair & Nu', price:'320 kr', time:'30 min', rating: 4, location:'Rådmansgatan 46'},
        {name:'Hårley Davidson', price:'320 kr', time:'30 min', rating: 4, location:'Rådmansgatan 46'}
      ]
    }
  }
  
  render() {
    return (
    <div className="App">
      <h1>Saloon List</h1>
    </div>
  );
}

export default App;
