import { useReducer } from 'react';
import buttonReducer from '../Reducers/buttonReducer';
// import { CHANGE_COLOR } from '../Constants/type';
import { changeColor } from '../Actions/index';


function Reducer() {

    const [buttonState, buttonDispacher] = useReducer(buttonReducer, 'blue')

    return (
        <div className="button-shelf">
            <button onClick={() => buttonDispacher(changeColor())} style={{ color: buttonState }}>Press</button>
        </div>

    )
}

export default Reducer;