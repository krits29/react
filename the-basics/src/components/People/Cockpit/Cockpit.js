import React, {useEffect} from 'react';
import classes from "./Cockpit.css";
import Radium, { StyleRoot } from 'radium';

//functional component example
const cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        //http request...
        setTimeout(() => {
            alert("heres the alert");
        }, 1000);
    }, []); //passing an empty array mean there are no dependencies
    //or pass an array like this [props.people] to have that dependency

    const extras = [];
    const style = {
        backgroundColor: "rosybrown",
        font: "inherit",
        border: "2px solid gray",
        padding: "8px",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "rgba(200, 150, 150, 0.50)",
          color: "white",
          border: "none"
        }
      };

    if(props.showPeople) {
        style.backgroundColor = "white";
        style[":hover"] = {
        backgroundColor: "whitesmoke",
        color: "darkgray",
        border: "2px solid lightgray"
        }
    }   

    if(props.people.length <= 1){
      extras.push("rosybrown");
    }
    if(props.people.length <= 2){
      extras.push("bigger");
    }

    return (
        <div className = {classes.Cockpit}>
            <h1 className = {extras.join(" ")}>Basics of React</h1> 
            <p>We need to understand this jsx, it's like syntactical sugar</p>
            <button //can change it to <StyledButton>
                style = {style} //inline stylings
                onClick = {props.clicked}
            >Toggle People</button>
        </div>
    );
}

export default cockpit;