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

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} 
            />
          })}
        </div>
      )
    }
    
    return (
      <div className="App">
        <h1>Hi I'm react app</h1>
        <button onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}          
      </div>
    );
  }
}

export default App;
