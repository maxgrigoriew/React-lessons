const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	myPosts: [
		{id: 1, mes: 'hello'},
		{id: 2, mes: 'how are you?'}
	],
	newPostText: ''
};
const profileReducer = (state = initialState, action) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: 4,
			mes: state.newPostText
		};
		let stateCopy = {...state}
		stateCopy.myPosts = [...state.myPosts]
		
		if (!!stateCopy.newPostText) {
			stateCopy.myPosts.push(newPost)
			stateCopy.newPostText = ''
		}
		return stateCopy
	} else if (action.type === UPDATE_NEW_POST_TEXT) {
		return {
			...state,
			newPostText: action.newText
		}
	}
	return state
}

export let addPostCreater = () => {
	return {
		type: ADD_POST
	}
}
export let onPostChangeCreater = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}
export default profileReducer