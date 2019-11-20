import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    users: [
      {username: "JadedGiraffe"},
    ]
  }

  updateUsername = (event)=>{
    this.setState(
      {
        users: [
          {username: event.target.value},
        ]
      }
    )
  }


  render() {
    return (
      <div className="App">
        <UserInput 
        change={this.updateUsername}
        username={this.state.users[0].username} />
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[0].username}/>
      </div>
    );
  }
}

export default App;
