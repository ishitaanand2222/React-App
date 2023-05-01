import React from "react";

const person = function(props){
    return(
        <div>
            <h1>Hello I'm {props.name} and I'm {props.age}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default person;