import { animals as list } from "../Data/animals";
import { useParams } from "react-router";
import { useState } from "react";
import Animal from "./Animal";

function Zoo() {

    const { animals, setAnimals } = useState(list);



    return (
        <div className="zoo">
            <h1>Welcome to Zoo</h1>
            <ul>
                {animals.map(animal => <Animal></Animal>)}
            </ul>
        </div>
    )
}

export default Zoo;