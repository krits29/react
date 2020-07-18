import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    people: [
      {id: "111", name: "Mickey", animal: "Mouse"},
      {id: "222", name: "Donald", animal: "Duck"}
    ],
    showPeople: false
  }

  switchNameHandler = (newName) => {
    //console.log("Clicked!");
    this.setState({
      people: [
        {name: newName, animal: "Mouse"},
        {name: "Donald", animal: "Duck"}
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((prsn) => {
      return prsn.id === id;
    });
    //findIndex takes in a function and will get the element in the array and then get the index
    
    //now actually accessing the person
    const person = {...this.state.people[personIndex]};

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({people: people});

  }

  deletePersonHandler = (personIndex) => {
    //fetching the people
    //const people = this.state.people.slice; //slice will make a copy of the original array
    const people = [...this.state.people]; //es6 way of ^
    people.splice(personIndex, 1); //remove one element from the array
    this.setState({people: people});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
    //react will merge the update along with the other states
  }

  render() {
    const style = {
      backgroundColor: "rosybrown",
      font: "inherit",
      border: "2px solid gray",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "rgba(200, 150, 150, 0.50",
        color: "white",
        border: "none"
      }
    };

    //using regular javascript here
    //create a variable to either hold the jsx or to hold null

    let people = null;
    
    //simple if else statment here
    if(this.state.showPeople === true) {
      people = (
        <div>
          {this.state.people.map((person, index) => { //using default map method to render a list into jsx elements
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              animal = {person.animal}
              key = {person.id} //more efficient way to compare 
              changed = {(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
          {/* <Person 
            name = {this.state.people[0].name} 
            click = {this.switchNameHandler.bind(this, "Minnie")}
            animal = {this.state.people[0].animal}
          />
          <Person 
            name = {this.state.people[1].name} 
            animal = {this.state.people[1].animal}
            changed = {this.nameChangedHandler}
          /> */}
        </div>
      );
      style.backgroundColor = "white";
      style[":hover"] = {
        backgroundColor: "whitesmoke",
        color: "gray",
        border: "2px solid lightgray"
      }
    }

    const extras = [];
    if(this.state.people.length <= 1){
      extras.push("rosybrown");
    }
    if(this.state.people.length <= 2){
      extras.push("bigger");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className = {extras.join(" ")}>Basics of React</h1> 
          <p>We need to understand this jsx, it's like syntactical sugar</p>
          <button 
            style = {style} //inline stylings
            onClick = {this.togglePersonHandler}>Toggle People</button>
          {people}
          
          {/* { //using the ternary operator to check to display or not
            this.state.showPeople === true ?
              <div>
                <Person 
                  name = {this.state.people[0].name} 
                  click = {this.switchNameHandler.bind(this, "Minnie")}
                  animal = {this.state.people[0].animal}
                />
                <Person 
                  name = {this.state.people[1].name} 
                  animal = {this.state.people[1].animal}
                  changed = {this.nameChangedHandler}
                />
              </div> : null
          } */}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);



//hooks
//import React, {useState} from 'react';

//same thing here:
  
// const app = (props) => {
//   const [ peopleState, setPeopleState] = useState({
//     people: [
//       {name: "Mickey", animal: "Mouse"},
//       {name: "Donald", animal: "Duck"}
//     ]
//   });//returning two elements: current state & a function which allows us to update it

//   const switchNameHandler = () => {
//     //console.log("Clicked!");
//     setPeopleState({
//       people: [
//         {name: "Minnie", animal: "Mouse"},
//         {name: "Donald", animal: "Duck"}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Basics of React</h1>
//       <p>We need to understand this jsx, and don't get confused with html</p>
//       <button onClick = {switchNameHandler}>Switch name</button>
//       <Person name = {peopleState.people[0].name} animal = {peopleState.people[0].animal}/>
//       <Person name = {peopleState.people[1].name} animal = {peopleState.people[0].animal}>"He he he"</Person>
//     </div>
//   );
  
// }

// export default app; 
