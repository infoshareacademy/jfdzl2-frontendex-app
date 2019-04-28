import { createStore, combineReducers } from 'redux';
import places from './reducers/places';
import services from './reducers/services';
import brands from './reducers/brands';
import filters from './reducers/filters';

let store = createStore(combineReducers({
    places: places,
    services: services,
    brands: brands,
    filters: filters
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;