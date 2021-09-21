import React, { useState } from 'react';
import SmallAnimalF from './SmallAnimalF';
import getId from '../Shared/id';


function App() {

    const [animals, setAnimals] = useState([]);
    const [cowInput, setCowInput] = useState('');

    const addAnimal = (a) => {
        const animal = { id: getId(), color: cowInput, animal: a };
        const animalsCopy = animals.slice();
        animalsCopy.push(animal);

        setAnimals(animalsCopy);
        // localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    const deleteAnimal = (id) => {
        console.log(id);
        const animalsCopy = animals.slice();
        for (let i = 0; i < animalsCopy.length; i++) {
            if (animalsCopy[i].id == id) {
                animalsCopy.splice(i, 1);
                break;
            }
        }

        setAnimals(animalsCopy);

        // localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    const editAnimal = (id, color) => {
        console.log(id, color);
        const animalsCopy = animals.slice();
        for (let i = 0; i < animalsCopy.length; i++) {
            if (animalsCopy[i].id == id) {
                animalsCopy[i].color = color;
                break;
            }
        }
        setAnimals(animalsCopy);

        // localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    const cowInputHandler = (e) => {
        setCowInput(e.target.value);
    }

    // componentDidMount() {
    //     const animals = JSON.parse(localStorage.getItem('allAnimals'));
    //     if (null === animals) {
    //         return;
    //     }
    //     this.useState({
    //         animals: animals
    //     })
    // }



    return (
        <>
            {animals.map(b => <SmallAnimalF key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} />)}
            <div>
                <input type="text" value={cowInput} onChange={cowInputHandler} />
                <button className="input-button" onClick={() => addAnimal('cow')}>Add Cow</button>
                <button className="input-button" onClick={() => addAnimal('sheep')}>Add Sheep</button>
            </div>
        </>
    );
}

export default App;