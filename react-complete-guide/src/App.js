import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Daniel", age:29},
      {name: "Sarah", age:32},
      {name: "Lisa", age:23}
    ],
    showPersons: false
  }

  changeNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age:30},
      {name: "Sanjib", age:32},
      {name: "Leo", age:23}
    ]})
  };

  inputNameChanger = (event) => {
    this.setState({persons: [
      {name: "Daniel", age:29},
      {name: event.target.value, age:32},
      {name: "Lisa", age:23}
    ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm react app</h1>
        <button onClick={this.togglePersonsHandler}>Show Persons</button>
         {
           this.state.showPersons ?
           <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.changeNameHandler.bind(this, 'Mr Paragraph')}
            changed={this.inputNameChanger}/>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div>
          :null
        }
      </div>
    );
  }
}

export default App;
