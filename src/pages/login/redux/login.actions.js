import * as type from './login.types'

// [ACTION] Request authentication
export function requestAuthAction(request) {
    return {
        type: type.AUTH_REQUESTED,
        payload: { request }
    }
}
