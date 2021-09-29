import { animals as list } from '../Data/animals';
import { useState } from 'react';
import AnimalLink1 from './AnimalLink1';
import Animal1 from './Animal1';
import { Route, Switch } from 'react-router';

function Zoo1() {

    const [animals, setAnimals] = useState(list);

    return (
        <div className="zoo">
            <h1> Welcome to the ZOO </h1>
            <Switch>
                <Route path={'/:id'}>
                    <Animal1 animals={animals}></Animal1>
                </Route>
                <Route path={'/'}>
                    <ul>
                        {animals.map(animal => <AnimalLink1 key={animal.id} animal={animal} />)}
                    </ul>
                </Route>
            </Switch>
        </div>
    )

}

export default Zoo1