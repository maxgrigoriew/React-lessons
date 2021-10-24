import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReduser from "./users-redusers";

let reducers = combineReducers({
	profileReducer,
	dialogsReducer,
	sidebarReducer,
	usersReduser,
})

const store = createStore(reducers)

window.store = store
export default store
