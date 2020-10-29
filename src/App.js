import React, { Component } from 'react';
import './App.css';
import Saloon from './Saloon/Saloon';

class App extends Component {
  state = {
    saloons: [
      { id: 'asfa1', name: 'Sax & Fön', price: "320kr" },
      { id: 'vasdf1', name: 'Hårizont', price: "320 kr" },
      { id: 'asdf11', name: 'Hårhuset', price: "320 kr" },
      { id: 'a23', name: 'Hair & Nu', price: "320 kr" },
      { id: 'as2353', name: 'Hårley Davidson', price: "320 kr" },
    ],
    otherState: 'some other value',
    showSaloons: false
  }

  nameChangedHandler = ( event, id ) => {
    const saloonIndex = this.saloons.findIndex(p => {
      return p.id === id;
    });

    const saloon = {
      ...this.state.saloons[saloonIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

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
