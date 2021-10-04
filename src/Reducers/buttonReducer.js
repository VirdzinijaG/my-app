function buttonReducer(sate, action) {

    let newState;

    switch (action.type) {
        case 'change_color':
            newState = 'red'
    }
    console.log(action);
    return 'red';
}

export default buttonReducer;