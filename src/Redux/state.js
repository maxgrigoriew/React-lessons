// let state = {
// 	profilePage: {
//
// 		myPosts: [
// 			{id: 1, mes: 'hello'},
// 			{id: 2, mes: 'how are you?'}
// 		],
// 	},
// 	dialogPage: {
// 		messages: [
// 			{id: 1, name: 'Hallo'},
// 			{id: 2, name: 'By'},
// 			{id: 3, name: 'You'},
// 		],
// 		dialogs: [
// 			{
// 				id: 1,
// 				name: 'Max',
// 				number: '22',
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
// 			},
// 			{
// 				id: 2,
// 				name: 'Nikos',
// 				number: '22',
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
// 			},
// 			{
// 				id: 3,
// 				name: 'Anya',
// 				number: '22',
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-12.jpg"
// 			}
// 		]
// 	},
// 	navBar:{
// 		navFrendsData: [
// 			{
// 				id: 1,
// 				name: "Max",
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
// 			},
// 			{
// 				id: 2,
// 				name: "Nik",
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
// 			},
// 			{
// 				id: 3,
// 				name: "Dasha",
// 				img: "https://phonoteka.org/uploads/posts/2021-04/1618996087_3-phonoteka_org-p-fon-na-rabochii-stol-koti-3.jpg"
// 			}
// 		]
//
// 	}
// }
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'
const UPDATE_DIALOGS_NEW_MESSAGE = 'UPDATE-DIALOGS-NEW-MESSAGE'

let store = {
	renderEntireThree() {
		return null
	},
	state: {
		profilePage: {
			myPosts: [
				{id: 1, mes: 'hello'},
				{id: 2, mes: 'how are you?'}
			],
			newPostText: ''
		}
		,
		dialogsPage: {
			messages: [
				{id: 1, name: 'Hallo'},
				{id: 2, name: 'By'},
				{id: 3, name: 'You'},
			],
			dialogs: [
				{
					id: 1,
					name: 'Max',
					number: '22',
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
				},
				{
					id: 2,
					name: 'Nikos',
					number: '22',
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
				},
				{
					id: 3,
					name: 'Anya',
					number: '22',
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-12.jpg"
				}
			],
			navFrendsData: [
				{
					id: 1,
					name: "Max",
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
				},
				{
					id: 2,
					name: "Nik",
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
				},
				{
					id: 3,
					name: "Dasha",
					img: "https://phonoteka.org/uploads/posts/2021-04/1618996087_3-phonoteka_org-p-fon-na-rabochii-stol-koti-3.jpg"
				}
			],
			newMessages: ''
			
		}
	},
	getState() {
		return this.state
	},
	// updateNewPostTest(newText){
	// 	this.state.profilePage.newPostText = newText
	// 	this.renderEntireThree(this.state)
	// },
	
	// addMessage(addMessage) {
	// 	let newMessage = {
	// 		id: 25,
	// 		name: addMessage
	// 	};
	// 	this.state.dialogsPage.messages.push(newMessage)
	// 	this.renderEntireThree(this.state)
	// },
	
	subscribe(observer) {
		this.renderEntireThree = observer
	},
	
	dispatch(action) {
		
		if (action.type === ADD_POST) {
			let newPost = {
				id: 4,
				mes: this.state.profilePage.newPostText
			};
			this.state.profilePage.myPosts.push(newPost)
			this.state.profilePage.newPostText = ''
			this.renderEntireThree(this.state)
		}
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this.state.profilePage.newPostText = action.newText
			this.renderEntireThree(this.state)
		}
		
		else if (action.type === ADD_DIALOGS_MESSAGE) {
			let newMessage = {
				id: 25,
				name: this.state.dialogsPage.newMessages
			};
			this.state.dialogsPage.messages.push(newMessage)
			this.renderEntireThree(this.state)
		}
		else if (action.type === UPDATE_DIALOGS_NEW_MESSAGE) {
			this.state.dialogsPage.newMessages = action.newText
			this.renderEntireThree(this.state)
		}
	}
}

// dispatch перенесли в ф ии и вынесли в store

export let addPostCreater = ()=>{
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
export let addDialogsMessageCreator = ()=>{
	return {
		type: 'ADD-DIALOGS-MESSAGE'
	}
}
export let updateDialogsNewMessageCreator = (text) => {
	return {
		type: 'UPDATE-DIALOGS-NEW-MESSAGE',
		newText: text
	}
}


export default store
window.store = store
