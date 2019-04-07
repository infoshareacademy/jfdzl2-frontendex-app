import { SET_SERVICES } from "../constants";

const initialState = []

const services = (state = initialState, action) => {

    switch (action.type) {
        case SET_SERVICES:
            return action.services
        default:
            return state
    }
}

export default services;