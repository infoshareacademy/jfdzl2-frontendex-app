import { createStore, combineReducers } from 'redux';
import places from './reducers/places';

let store = createStore(combineReducers({
    places: places
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;