const initialState = {
    colore: 'green',
    error: null
}

function changeColor(state=initialState, action) {
    switch(action.type) {
        case 'CAMBIA_COLORE':
            return {
                ...state,
                colore: action.payload
            }

        default:
            return state
    }
}

export default changeColor;