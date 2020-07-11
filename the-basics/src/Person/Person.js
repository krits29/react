import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className = "Person">
            <p>Adding in custom js code with curly braces</p>
            <p>Using random number: {Math.floor(Math.random() * 50)}</p>
            <p onClick = {props.click}>Given name: {props.name}</p>
            <p>Given animal: {props.animal}</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
    );
};

export default person;