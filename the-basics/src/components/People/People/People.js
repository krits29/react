import React, {Component} from "react";
import Person from "./Person/Person.js"

//const people = (props) =>
class People extends Component {
    render() {
        return this.props.people.map((person, index) => { //using default map method to render a list into jsx elements
            return <Person 
            click = {() => this.props.clicked(index)}
            name = {person.name} 
            animal = {person.animal}
            key = {person.id} //more efficient way to compare 
            changed = {(event) => this.props.changed(event, person.id)}
            />
        });
    }
}; 

//change to uppercase P
export default People;