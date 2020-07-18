import React from 'react';

const checkLength = (length) => {
    if(length > 5){
        return "Text long enough";
    } else {
        return "Text not long enough";
    }
}

const validation = (props) => {
    
    return (
        <div>
            <p>{checkLength(props.inputLength)}</p>
        </div>
    );
}

export default validation;