import { SET_PLACES } from "../constants";

const places = (state = ['asd', 'test'], action) => {

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