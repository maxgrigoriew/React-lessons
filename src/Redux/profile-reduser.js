const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: 4,
			mes: state.newPostText
		};
		state.myPosts.push(newPost)
		state.newPostText = ''
	} else if (action.type === UPDATE_NEW_POST_TEXT) {
		state.newPostText = action.newText
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