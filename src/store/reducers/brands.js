import { SET_BRANDS } from "../constants";

const initialState = []

const brands = (state = initialState, action) => {

    switch (action.type) {
        case SET_BRANDS:
            return action.brands
        default:
            return state
    }
}

export default brands;
