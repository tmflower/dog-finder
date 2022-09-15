import React from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";
import { dogs } from "./App";


const Dog = ({name, age, src, facts}) => {
    const {dogName} = useParams();
    const dog = (dogs.filter(d => (d.name).toLowerCase() === dogName.toLowerCase()))

    if (dog.length === 0) {
        // this will be the redirect
        return (
            <Navigate to="/dogs"></Navigate>
        )        
    }

    const myDog = dog[0];

    name = myDog.name;
    age = myDog.age;
    src = myDog.src;
    facts = myDog.facts;

    return (        
        <div>
            <h1>Hi! My name is {name}.</h1>
            <h2>I am {age} years young.</h2>
            <img src={src}></img>
            <h3>Get to know me:</h3>
            <p>{facts.map(f => <li>{f}</li>)}</p>
            <NavLink to="/dogs">Back to all the dogs</NavLink>
        </div>
    )
}

export default Dog;