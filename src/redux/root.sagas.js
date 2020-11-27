import { all } from 'redux-saga/effects';
import authWatchers from "../pages/login/redux/login.watchers";

export default function* rootSaga() {
    yield all([
        authWatchers()
    ])
}
