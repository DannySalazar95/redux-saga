import {combineReducers} from "redux";
import loginReducer from '../pages/login/redux/login.reducers'

const rootReducer = combineReducers({
    login: loginReducer
})

export default rootReducer;
