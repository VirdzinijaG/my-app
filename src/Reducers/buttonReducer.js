import { CHANGE_COLOR } from '../Constants/type';


function buttonReducer(sate, action) {

    let newState;

    switch (action.type) {
        // case 'change_color':
        //     newState = 'red'
        case CHANGE_COLOR:
            newState = 'red'
    }
    console.log(action);
    return 'red';
}

export default buttonReducer;