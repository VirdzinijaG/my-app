import { animals as list } from "../Data/animals";
import { useState } from "react";
import { Route, Switch } from "react-router";
import AnimalLink from "./AnimalLink";
import Animal from "./Animal";

function Zoo() {

    const [animals, setAnimals] = useState(list);



    return (
        <div className="zoo">
            <h1>Welcome to the Zoo</h1>
            <Switch>
                <Route path={'/:id'}>
                    <Animal></Animal>
                </Route>
                <Route path={'/'}>
                    <ul>
                        {animals.map(animal => <AnimalLink key={animal.id} animal={animal}></AnimalLink>)}
                    </ul>
                </Route>
            </Switch>
        </div>
    )
}

export default Zoo;