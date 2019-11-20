import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"safqefaf", name: "Daniel", age:29},
      {id:"vadsvfse", name: "Sarah", age:32},
      {id:"sdavfsag", name: "Lisa", age:23}
    ],
    showPersons: false
  }

  
  // inputNameChanger = (event) => {
  //   this.setState({persons: [
  //     {name: "Daniel", age:29},
  //     {name: event.target.value, age:32},
  //     {name: "Lisa", age:23}
  //   ]})
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
    );
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); /*slice makes a copy of array/object */
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} 
              key={person.id}
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
