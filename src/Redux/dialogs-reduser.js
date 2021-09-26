const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'
const UPDATE_DIALOGS_NEW_MESSAGE = 'UPDATE-DIALOGS-NEW-MESSAGE'
const UPDATE_MESSAGE1 = 'UPDATE-MESSAGE1'
const ADD_MESSAGE1 = 'ADD_MESSAGE1'

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_DIALOGS_MESSAGE:
			let newMessage = {
				id: 25,
				name: state.newMessages1
			};
			state.messages.push(newMessage);
			return state;
		
		case UPDATE_DIALOGS_NEW_MESSAGE:
			state.newMessages = action.newText;
			return state;
		case ADD_MESSAGE1:
			let newMessage1 = {
				id: 25,
				name: state.newMessages1
			};
			state.messages.push(newMessage1);
			return state;
		
		case UPDATE_MESSAGE1:
			state.newMessages1 = action.body;
			return state;
		default:
			return state
	}
}

export const addDialogsMessageCreator = () => {
	return {
		type: 'ADD-DIALOGS-MESSAGE'
	}
}
export const updateDialogsNewMessageCreator = (text) => {
	return {
		type: 'UPDATE-DIALOGS-NEW-MESSAGE',
		newText: text
	}
}

export const addMessageCreator1 = () => {
	return {
		type: ADD_MESSAGE1
	}
}
export const updateDialogsNewMessageCreator1 = (body) => {
	return {
		type: UPDATE_MESSAGE1,
		body: body
	}
}
export default dialogsReducer