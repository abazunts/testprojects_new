import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "../dndUsers/BLL/usersReducer";
import mainPageReducer from "../wargaming/BLL/mainPageReducer";
import pacManReducer from "../pacman/BLL/pacManReducer";

const reducers = combineReducers({
    users: usersReducer,
    mainPage: mainPageReducer,
    pacMan: pacManReducer,
});


let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;