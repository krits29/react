import React, {Component} from "react";
import Person from "./Person/Person.js"

//const people = (props) =>
class People extends Component {
    static getDerivedStateFromProps (props, state) {
        console.log("[People.js] getDerivedStateFromProps");
        return state;
    }

    componentWillReceiveProps(props) {
        console.log("[People.js] componentWillReceiveProps", props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[People.js] shouldComponentUpdate");
        return true; //if react should continue updating or not (true or false)
    }

    getSnapshotBeforeUpdate() {
        console.log("[People.js] getSnapshotBeforeUpdate");
        return null;
    }

    //most commonly used
    componentDidUpdate(prevProps, prevState, snapshot) {
        //runs after we're done with all the updating
        console.log("[People.js] componentDidUpdate");
        console.log(snapshot);
    }

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