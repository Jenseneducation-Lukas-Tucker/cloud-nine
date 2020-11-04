import React, { Component } from 'react';
import './App.css';
import Saloon from './Saloon/Saloon';
import Filter from './Filter/filter';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Hair from './Hair/Hair';


class App extends Component {
  state = {
    saloons: [
      { id: 'asfa1', name: 'Sax & Fön', price: 300 ,location: 'Rådmansgatan 46',  },
      { id: 'vasdf1', name: 'Hårizont', price: 150 ,location: 'Rådmansgatan 46', },
      { id: 'asdf11', name: 'Hårhuset', price: 320 ,location: 'Rådmansgatan 46', },
      { id: 'a23', name: 'Hair & Nu', price: 500 ,location: 'Rådmansgatan 46', },
      { id: 'as2353', name: 'Hårley Davidson', price: 320, location:'Rådmansgatan 46',},
    ],
    sort:"",
    showSaloons: false,
    showFilters: false
  }
  sortSaloons = (event) => {
    //implement 
    const sort = event.target.value
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      saloons: this.state.saloons
      .slice()
      .sort((a , b) => 
        sort === "lowest"
        ? a.price > b.price
        ? 1
        : -1
        : sort === "highest"
        ? a.price < b.price
        ? 1
        :-1
        : a.id > b.id
        ? 1
        :-1

      ),
    }))
  }

  toggleFilterHandler = () => {
    const doesShow = this.state.showFilters;
    this.setState( { showFilters: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'MillerBanner',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <BrowserRouter>
      <div className="App">
      <Route path="/" exact render={() =>       <div>
        <h5>Hår</h5>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.toggleFilterHandler}>Toggle Filters</button>
          { this.state.showFilters === true ?
          <div>
        <Filter count={this.state.saloons.length}
        sort={this.state.sort}
        sortSaloons={this.sortSaloons}
        ></Filter>
        </div> :null  
        }
  <div>
  {this.state.saloons.map((saloon) => {
    return <Saloon
      name={saloon.name} 
      price={saloon.price}
      key={saloon.id}
      rating={saloon.rating}
      location={saloon.location}/>
  })}
</div>
</div>}/>

<div>
<Route path="/:id" exact render={ () => <div>
  {this.state.saloons.map((saloon) => {
    return <Hair
    name={saloon.name} 
    price={saloon.price}
    key={saloon.id}
    rating={saloon.rating}
    location={saloon.location}/>
  })}

</div>}></Route>
</div>
      </div>

      </BrowserRouter>
    );

  }
}

export default App;
