import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { PlayersReducers } from "./reducers";

const rootReducer = combineReducers({
    PlayerReductor: PlayersReducers,
})

export default createStore(rootReducer, applyMiddleware(thunk));