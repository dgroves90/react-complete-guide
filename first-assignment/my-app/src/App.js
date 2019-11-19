import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
