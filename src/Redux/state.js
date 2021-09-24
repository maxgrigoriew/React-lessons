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
			newPostText: '1'
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
			newMessages: 'defd'
			
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
		
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 4,
				mes: this.state.profilePage.newPostText
			};
			this.state.profilePage.myPosts.push(newPost)
			this.state.profilePage.newPostText = ''
			this.renderEntireThree(this.state)
		}
		else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this.state.profilePage.newPostText = action.newText
			this.renderEntireThree(this.state)
		}
		
		else if (action.type === 'ADD-DIALOGS-MESSAGE') {
			let newMessage = {
				id: 25,
				name: this.state.dialogsPage.newMessages
			};
			this.state.dialogsPage.messages.push(newMessage)
			this.renderEntireThree(this.state)
		}
		else if (action.type === 'UPDATE-DIALOGS-NEW-MESSAGE') {
			this.state.dialogsPage.newMessages = action.newText
			this.renderEntireThree(this.state)
		}
	}
}


export default store
window.store = store
