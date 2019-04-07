import { SET_FILTERS } from "../constants";

const initialState = {
    name: null,
    location: null,
    specialization: null
}

const places = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILTERS:
            return action.filters
        default:
            return state
    }
}

export default places;