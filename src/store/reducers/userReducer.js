import { LOG_IN, LOG_OUT, GET_USER } from '../actions/type';
const initialState = {
    isAuthenticated: false,
    token: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                token: '',
            }
        case GET_USER:
            return {
                ...state,
                isAuthenticated: state.isAuthenticated,
                token: state.token
            }
        default:
            return state
    }
}