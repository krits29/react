import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>----person-----</p>
            <p>Adding in custom js code with curly braces</p>
            <p>Using random number: {Math.floor(Math.random() * 50)}</p>
            <p>Given name: {props.name}</p>
            <p>Given animal: {props.animal}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;