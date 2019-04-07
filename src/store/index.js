import { createStore, combineReducers } from 'redux';
import places from './reducers/places';
import services from './reducers/services';

let store = createStore(combineReducers({
    places: places,
    services: services
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;