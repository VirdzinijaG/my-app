import { useReducer } from 'react';
import buttonReducer from '../Reducers/buttonReducer';
// import { CHANGE_COLOR } from '../Constants/type';
import { changeColor, changeFancyColor } from '../Actions/index';


function Reducer() {

    // const [buttonState, buttonDispacher] = useReducer(buttonReducer, 'blue')

    const [buttonState, buttonDispacher] = useReducer(buttonReducer, {
        click: 'blue',
        fancyClick: 'blue'
    })

    return (
        <div className="button-shelf">
            <button onClick={() => buttonDispacher(changeColor())} style={{ color: buttonState.click }}>Press</button>
            <button onClick={() => buttonDispacher(changeFancyColor('#' + Math.floor(Math.random() * 16777215).toString(16)))} style={{ color: buttonState.fancyClick }}>Press Me Fancy</button>
        </div>

    )
}

export default Reducer;