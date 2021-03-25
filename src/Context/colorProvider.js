import {createContext, useReducer} from 'react';

const initialState = {
    colore: 'green',
    error: null
}

function changeColor(state, action) {
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


export const MyContext = createContext(initialState);

export default ({children}) => {
    const [state, dispatch] = useReducer(changeColor, initialState);

    const value = {state, dispatch};

   return (<MyContext.Provider value={value}>
       {children}
   </MyContext.Provider>)
}