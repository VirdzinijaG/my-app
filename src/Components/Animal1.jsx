import { useParams } from "react-router-dom";
import { animals as list } from '../Data/animals';
import AnimalLink1 from './AnimalLink1';

function Animal1({ animals }) {
    const { id } = useParams();
    return (
        <>
            <ul>
                {animals.map(animal => <AnimalLink1 key={animal.id} animal={animal} />)}
            </ul>
            <h1 style={{ fontSize: '123px' }}>{list[id - 1].name}</h1>
        </>
    )
}

export default Animal1;