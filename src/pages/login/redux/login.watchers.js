import {takeEvery} from "redux-saga/effects";
import { requestAuth } from "./login.sagas";
import { AUTH_REQUESTED } from './login.types'

function* authWatchers() {
    yield takeEvery(AUTH_REQUESTED, requestAuth);
}

export default authWatchers;
