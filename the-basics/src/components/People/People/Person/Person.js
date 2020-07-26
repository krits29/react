import React, {Component} from 'react';
import './Person.css';
import Radium from 'radium';
import styled from "styled-components";

//changed to class based components...
//const person = (props) => 
//need to replace props now with this.props
class Person extends Component {
    render() {
        const style = {
            "@media (maxWidth: 620px)": {
                width: "450px"
            }
        };
        
        console.log("[person.js] rendering...");

        return (
            <div className = "Person" style = {style}>
                <p onClick = {this.props.click}>Given name: {this.props.name}</p>
                <p>Given animal: {this.props.animal}</p>
                <p>{this.props.children}</p>
                <input type = "text" onChange = {this.props.changed} value = {this.props.name}/>
            </div>

        );
    }
};

//using styled components

//const StyledDiv = styled.div`
//     width: 60%;
//     margin: 18px auto;
//     border: 1px solid lightgray;
//     box-shadow: 0px 9px 13px lightgray;
//     padding: 16px ;
//     text-align: center;
// `

//export default Radium(person);
//class with uppercase to Person instead of person
export default Person;