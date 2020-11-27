import * as type from './login.types'

const initialState = {
    access_token: null,
    refresh_token: null,
    loading: false,
    error: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case type.AUTH_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                access_token: action.data.access_token,
                refresh_token: action.data.refresh_token
            }
        case type.AUTH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
                access_token: null,
                refresh_token: null
            }
        default:
            return state;
    }
}
