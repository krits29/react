import React from 'react';

const userInput = (props) => {
    const styling = {
        border: "2px solid gray",
        height: "25px",
        width: "200px",
        margin: "40px 0 20px 0"
    };

    return (
        <input 
            type = "text" 
            style = {styling}
            onChange = {props.changed} 
            value = {props.currentName}
        />
    );
};

export default userInput;
