import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation.js";
import Char from "./Char/Char.js";

class App extends Component {
  state = {
    userInput: ""
  }
  
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteLetterHandler = (index) => {
    const allLetters = this.state.userInput.split("");
    allLetters.splice(index, 1);
    this.setState({userInput: allLetters.join("")}); //joining back the separated letters
  }

  render() {
    let individualLetters = this.state.userInput.split("").map((char, index) => {
      return(
        <Char 
          letter={char} 
          key={index}
          clicked={() => this.deleteLetterHandler(index)}
        />
      );
    }); //map every letter (array) into a new element

    return (
      <div>
        <h1>Assignment 2</h1>
        <hr/>
        <input 
          type = "text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} 
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength = {this.state.userInput.length}/>
        {individualLetters}
      </div>
    );
  }
}

export default App;
