import React from 'react';

const char = (props) => {

    const style = {
        display: "inline-block",
        padding: "13px",
        margin: "13px",
        height: "40px",
        width: "40px",
        border: "1px solid lightgray",
        boxShadow: "0px 9px 13px lightgray",
        textAlign: "center",
        fontWeight: "bold",
        cursor: "pointer"
    };

    return (
        <div style = {style} onClick = {props.clicked}>
            <p>{props.letter}</p>
        </div>
    );
}

export default char;