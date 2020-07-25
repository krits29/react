import React from 'react';
import './Person.css';
import Radium from 'radium';
import styled from "styled-components";

const person = (props) => {
    const style = {
        "@media (max-width: 620px)": {
            width: "450px"
        }
    };
    
    return (
        <div className = "Person" style = {style}>
            <p onClick = {props.click}>Given name: {props.name}</p>
            <p>Given animal: {props.animal}</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>

        

    );
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
export default person;
