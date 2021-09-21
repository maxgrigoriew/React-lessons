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

let renderEntireThree = () => {
	return null
}
 let state = {
	profilePage: {
		myPosts: [
			{id: 1, mes: 'hello'},
			{id: 2, mes: 'how are you?'}
		],
		newPostText: 'bla bla'
	}
	,
	name: '222',
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
		]
		
	}
}

export const addPost = () => {
	let newPost = {
		id: 4,
		mes: state.profilePage.newPostText
	};
	state.profilePage.myPosts.push(newPost)
	state.profilePage.newPostText = ''
	renderEntireThree(state)
}

export const updateNewPostTest = (newText) => {
	state.profilePage.newPostText = newText
	renderEntireThree(state)
}

export const addMessage = (addMessage) => {
	let newMessage = {
		id: 25,
		name: addMessage
	};
	state.dialogsPage.messages.push(newMessage)
	renderEntireThree(state)
}

export let subscribe = (observer) => {
	renderEntireThree = observer
}

export default state
window.state = state
