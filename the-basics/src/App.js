import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    people: [
      {name: "Mickey", animal: "Mouse"},
      {name: "Donald", animal: "Duck"},
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

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        {name: "Mickey", animal: "Mouse"},
        {name: event.target.value, animal: "Duck"}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
    //react will merge the update along with the other states
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid gray",
      padding: "8px",
      cursor: "pointer"
    };

    //using regular javascript here
    //create a variable to either hold the jsx or to hold null

    let people = null;
    
    //simple if else statment here
    if(this.state.showPeople === true) {
      people = (
        <div>
          {this.state.people.map(person =>{
            return <Person name = {person.name} animal = {person.animal}/>
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
    }

    return (
      <div className="App">
        <h1>Basics of React</h1> 
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
    );
  }
}

export default App; 



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
