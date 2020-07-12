import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    userOutput: {username: "k29", secondPara: "Here's another"}
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value}); 
    //event.targer.value is input element which has a value property that the user enter
    //update the state and will inform react if the state changed
    //pass it as props as the useroutput and checks child elements
    //if props changes, it will re-render the <p>Usernamepart
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput changed = {this.usernameChangeHandler} currentName = {this.state.username}/>
        <UserOutput username = {this.state.username} secondPara = "Here's another"/>
        <UserOutput username = "w56" secondPara = "Here's another"/>
      </div>
    );
  }
}

export default App;
