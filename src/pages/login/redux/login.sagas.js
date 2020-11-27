import { call, put } from 'redux-saga/effects'
import { postHttp } from "../../../http";
import * as types from './login.types'

export function* requestAuth(action) {
    try {
        const response = yield call(postHttp, action.payload.request);
        yield put({type: types.AUTH_SUCCESS, data: response.data})
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)
    } catch(e) {
        yield put({type: types.AUTH_FAILED, message: e.message})
    }
}
