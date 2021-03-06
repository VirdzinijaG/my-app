import React, { useState, useEffect } from 'react';
import SmallAnimalF from './SmallAnimalF';
import getId from '../Shared/id';


function App() {

    const [animals, setAnimals] = useState([]);
    const [cowInput, setCowInput] = useState('');

    useEffect(() => {
        // console.log('did Mount');
        const animalsCopy = JSON.parse(localStorage.getItem('allAnimals'));
        if (null === animalsCopy) {
            return;
        }
        setAnimals(animalsCopy)
    }, [])

    // useEffect(() => {
    //     console.log('animals changed');
    // }, [animals])

    // useEffect(() => {
    //     console.log('cowInput changed');
    // }, [cowInput])

    // useEffect(() => {
    //     console.log('something changed');
    // }, [cowInput, animals])

    const addAnimal = (a) => {
        const animal = {
            id: getId(),
            color: cowInput,
            animal: a,
            farm1: true
        };
        const animalsCopy = animals.slice();
        animalsCopy.push(animal);

        setAnimals(animalsCopy);
        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
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

        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
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

        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
    }

    const changeFarm = (id) => {
        const animalsCopy = animals.slice();
        for (let i = 0; i < animalsCopy.length; i++) {
            if (animalsCopy[i].id == id) {
                animalsCopy[i].farm1 = !animalsCopy[i].farm1;
                break;
            }
        }
        setAnimals(animalsCopy);

        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
    }

    const cowInputHandler = (e) => {
        setCowInput(e.target.value);
    }

    return (
        <>
            <div className="field">
                <div className="farm">
                    <h1>Farm No 1</h1>
                    {animals.map(b => <SmallAnimalF farm1={b.farm1} farmNumber={1} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
                </div>
                <div className="farm">
                    <h1>Farm No 2</h1>
                    {animals.map(b => <SmallAnimalF farm1={b.farm1} farmNumber={2} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
                </div>
            </div>
            <div>
                <input type="text" value={cowInput} onChange={cowInputHandler} />
                <button className="input-button" onClick={() => addAnimal('cow')}>Add Cow</button>
                <button className="input-button" onClick={() => addAnimal('sheep')}>Add Sheep</button>
            </div>
        </>
    );
}

export default App;