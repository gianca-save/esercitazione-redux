import {createStore} from 'redux';
import changeColor from './colorReducer';

const defaultStore = {
    colore: 'green',
    error: null
}

const store = createStore(changeColor, defaultStore)

export default store;