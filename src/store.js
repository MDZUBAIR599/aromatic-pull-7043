import {legacy_createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as playerreducer} from "./playerreducer/reducer";

const rootReducer = combineReducers({playerreducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))