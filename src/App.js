import React, { Component } from 'react';
import './App.css';
import Saloon from './Saloon/Saloon';
import Filter from './Filter/filter';

class App extends Component {
  state = {
    saloons: [
      { id: 'asfa1', name: 'Sax & Fön', price: 300 ,location: 'Rådmansgatan 46' },
      { id: 'vasdf1', name: 'Hårizont', price: 150 ,location: 'Rådmansgatan 46' },
      { id: 'asdf11', name: 'Hårhuset', price: 320 ,location: 'Rådmansgatan 46' },
      { id: 'a23', name: 'Hair & Nu', price: 500 ,location: 'Rådmansgatan 46' },
      { id: 'as2353', name: 'Hårley Davidson', price: 320, location:'Rådmansgatan 46' },
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

  nameChangedHandler = ( event, id ) => {
    const saloonIndex = this.saloons.findIndex(p => {
      return p.id === id;
    });

    const saloon = {
      ...this.state.saloons[saloonIndex]
    };



    saloon.name = event.target.value;

    const saloons = [...this.state.saloons];
    saloons[saloonIndex] = saloon;

    this.setState( {saloons: saloons} );
  }

  deleteSaloonHandler = (saloonIndex) => {
    // const persons = this.state.persons.slice();
    const saloons = [...this.state.saloons];
    saloons.splice(saloonIndex, 1);
    this.setState({saloons: saloons});
  }

  toggleFilterHandler = () => {
    const doesShow = this.state.showFilters;
    this.setState( { showFilters: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let saloons = null;

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
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
  }<div>
  {this.state.saloons.map((saloon, index) => {
    return <Saloon
      click={() => this.deleteSaloonHandler(index)}
      name={saloon.name} 
      price={saloon.price}
      key={saloon.id}
      changed={(event) => this.nameChangedHandler(event, saloon.id)} />
  })}
</div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
