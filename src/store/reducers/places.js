import { SET_PLACES } from "../constants";

const initialState = []

const places = (state = initialState, action) => {

    switch (action.type) {
        case SET_PLACES:
            return [
                ...action.places
            ]
        default:
            return state
    }
}

export default places;