import React from "react";
import Person from "./Person/Person.js"

const people = (props) => props.people.map((person, index) => { //using default map method to render a list into jsx elements
            return <Person 
              click = {() => props.clicked(index)}
              name = {person.name} 
              animal = {person.animal}
              key = {person.id} //more efficient way to compare 
              changed = {(event) => props.changed(event, person.id)}
            />
        });
    


export default people;