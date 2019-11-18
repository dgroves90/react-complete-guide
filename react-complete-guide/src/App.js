import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm react app</h1>
        <Person name="Daniel" age="29"/>
        <Person name="Sarah" age="32"/>
        <Person name="Lisa" age="23"/>
      </div>
    );
  }
}

export default App;
