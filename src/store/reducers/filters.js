import { SET_FILTERS } from "../constants";

const initialState = {
    name: null,
    location: null,
    specialization: null,
    brand: null
}

const filters = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILTERS:
            return action.filters
        default:
            return state
    }
}

export default filters;