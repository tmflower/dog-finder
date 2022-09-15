import React from "react";
import {dogs} from "./App";
import { NavLink } from "react-router-dom";

const DogFinder = () => {
    
    return (
        <div>
            <h1>DogFinder</h1>
            <h2>Welcome to DogFinder, the place to find your new best friend!  Meet Our Dogs:</h2>
            <div>
                {dogs.map(d => <div>
                    <h3>Say hi to <NavLink to={`/dogs/${d.name}`}>{d.name}</NavLink></h3>
                    <img src={d.src}/>
                    </div>)}
            </div>              
        </div>
    )
}

export default DogFinder;