import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    people: [
      {name: "Mickey", animal: "Mouse"},
      {name: "Donald", animal: "Duck"}
    ]
  }

  switchNameHandler = () => {
    //console.log("Clicked!");
    this.setState({
      people: [
        {name: "Minnie", animal: "Mouse"},
        {name: "Donald", animal: "Duck"}
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Basics of React</h1>
        <p>We need to understand this jsx, and don't get confused with html</p>
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person name = {this.state.people[0].name} animal = {this.state.people[0].animal}/>
        <Person name = {this.state.people[1].name} animal = {this.state.people[0].animal}>"He he he"</Person>
      </div>
    );
  }
}

export default App; 
