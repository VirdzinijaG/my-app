import { useReducer } from 'react';
import buttonReducer from '../Reducers/buttonReducer';


function Reducer() {

    const [buttonState, buttonDispacher] = useReducer(buttonReducer, 'blue')

    return (
        <div className="button-shelf">
            <button onClick={() => buttonDispacher({})} style={{ color: buttonState }}>Press</button>
        </div>

    )
}

export default Reducer;