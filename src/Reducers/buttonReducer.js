import { CHANGE_COLOR, CHANGE_FANCY_COLOR } from '../Constants/type';


function buttonReducer(state, action) {

    const newState = { ...state } // pasidarom state kopija

    switch (action.type) {
        // case 'change_color':
        //     newState = 'red'
        case CHANGE_COLOR:
            if (state.click === 'red') {
                newState.click = 'blue';
            } else {
                newState.click = 'red';
            }
            break;
        case CHANGE_FANCY_COLOR:
            newState.fancyClick = action.payload;
            break;
    }
    console.log(action);
    // return 'red';
    return newState;
}

export default buttonReducer;