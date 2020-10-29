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
    showSaloons: false
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
        ? a.saloons.price > b.saloons.price
        ? 1
        : -1
        : sort === "highest"
        ? a.saloons.price < b.saloons.price
        ? 1
        :-1
        : a._id > b._id
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

  toggleSaloonHandler = () => {
    const doesShow = this.state.showSaloons;
    this.setState( { showSaloons: !doesShow } );
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

    if ( this.state.showSaloons ) {
      saloons = (
        <div>
          {this.state.saloons.map((saloon, index) => {
            return <Saloon
              click={() => this.deleteSaloonHandler(index)}
              name={saloon.name} 
              price={saloon.price}
              key={saloon.id}
              changed={(event) => this.nameChangedHandler(event, saloon.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Filter count={this.state.saloons.length}
        sort={this.state.sort}
        sortSaloons={this.sortSaloons}
        ></Filter>
        <button
          style={style}
          onClick={this.toggleSaloonHandler}>Toggle Saloons</button>
        {saloons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
