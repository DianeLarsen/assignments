import React from "react";


export default function Pet(props){
    console.log(props.pets[0].name)
    return <h1> {props.pets[0].name} </h1>
    
    
}