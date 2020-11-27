import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./root.reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./root.sagas";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)

sagaMiddleware.run(rootSaga)

export default store;
